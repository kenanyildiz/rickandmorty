import { useEffect, useState, FC } from "react";
import Paging from "../Paging/index";
import Characters from "../Characters";
import Error from "../Characters/Error/index";
import Loading from "../Characters/Loading/index";
import NotFound from "../Characters/NotFound/index";
import { makeRequest } from "../utils";
import { ICharacter, ICharactersResponse, IError, IInfo } from "../Interfaces";

const initialErrorState = { state: false, msg: "" };

const App: FC = () => {
  const [active, setActive] = useState<number>(getPageParams());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<IError>(initialErrorState);
  const [pageInfo, setPageInfo] = useState<IInfo>({ count: 0, pages: 0 });
  const [isNotFound, setNotFound] = useState<boolean>(false);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    onCharactersFetchRequested(getPageParams());
  }, []);

  function getPageParams(): number {
    const val = new URLSearchParams(window.location.search).get("page");
    return Number(val) || 1;
  }

  function clearCharacters() {
    setCharacters([]);
  }

  async function fetchCharacters(query: string) {
    return makeRequest("character", query);
  }

  async function onCharactersFetchRequested(page: number) {
    const query = "page=" + page;

    window.history.replaceState(null, "", "?" + query);

    setActive(page);

    setIsLoading(true);

    setNotFound(false);

    setHasError(initialErrorState);

    const response: ICharactersResponse = await fetchCharacters(query);
    const { results = [], info, error = "" } = response;
    if (error) {
      setHasError({ msg: error, state: true });
      alert(error);
    } else {
      if (!results.length) {
        setNotFound(true);
      }
    }

    setCharacters(results);

    setPageInfo(info);

    setIsLoading(false);
  }

  const displayCharacters = !isLoading && !hasError.state && !isNotFound;

  return (
    <div className="App m-3">
      <div className="container">
        {!displayCharacters ? (
          <div className="row row-cols-3 justify-content-center">
            {isLoading ? <Loading /> : null}
            {hasError.state ? <Error /> : null}
            {isNotFound ? <NotFound /> : null}
          </div>
        ) : (
          <>
            <Characters characters={characters} />
            <div className="row mt-4 justify-content-center">
              <div className="col-auto">
                {displayCharacters ? (
                  <Paging
                    active={active}
                    clearCharacters={clearCharacters}
                    info={pageInfo}
                    onCharactersFetchRequested={onCharactersFetchRequested}
                  />
                ) : null}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
