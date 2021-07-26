import {useEffect, useState, FC} from 'react';
import Paging from '../Paging/index';
import Characters from '../Characters';
import Error from "../Characters/Error/index";
import Loading from "../Characters/Loading/index";
import NotFound from "../Characters/NotFound/index";
import {makeRequest} from '../utils';
import {ICharacter, IError, IInfo} from "../Interfaces";

const App: FC = () => {
  const startFrom: number = getPageParams()
  const initialPageInfoState = { count: 0, pages: 0 }
  const initialErrorState = { state: false, msg: '' }

  const [active, setActive] = useState<number>(startFrom);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<IError>(initialErrorState);
  const [pageInfo, setPageInfo] = useState<IInfo>(initialPageInfoState);
  const [isNotFound, setNotFound] = useState<boolean>(false);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    onCharactersFetchRequested(getPageParams())
  }, [])

  function getPageParams () {
    const val = new URLSearchParams(window.location.search).get("page")
    return Number(val) || 1
  }

  const clearCharacters = () => setCharacters([])

  const fetchCharacters = (query: string) => makeRequest('character', query)

  function onCharactersFetchRequested (page: number) {
    const query = 'page=' + page

    window.history.replaceState(null, '', "?" + query);

    setActive(page)

    setLoading(true)

    setNotFound(false)

    setHasError(initialErrorState)

    fetchCharacters(query)
      .then(response => {

        const { results = [], info = {}, error = '' } = response
        if (error) {
          setHasError({ msg: error, state: true })
          alert(error)
        } else {
          if (!results.length) {
            setNotFound(true)
          }
        }

        setCharacters(results)

        setPageInfo(info)

        setLoading(false)
      })
  }

  const displayCharacters = !loading && !hasError.state && !isNotFound

  return (
    <div className='App m-3'>
      <div className='container'>
        {
          !displayCharacters
            ? <div className='row row-cols-3 justify-content-center'>
              {
                loading
                  ? <Loading />
                  : null
              }
              {
                hasError.state
                  ? <Error />
                  : null
              }
              {
                isNotFound
                  ? <NotFound />
                  : null
              }
            </div>
            : null
        }
        {
          displayCharacters
            ? <Characters characters={characters} />
            : null
        }
        <div className='row mt-4  justify-content-center'>
          <div className='col-auto'>
            {
              displayCharacters
                ? <Paging
                  active={active}
                  info={pageInfo}
                  clearCharacters={clearCharacters}
                  onCharactersFetchRequested={onCharactersFetchRequested}
                />
                : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
