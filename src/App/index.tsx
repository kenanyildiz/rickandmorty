import {useEffect, useState} from "react";
import {useQuery } from "react-query";
import Paging from "../Paging/index";
import Characters from "../Characters";
import Error from "../Characters/Error/index";
import Loading from "../Characters/Loading/index";
import { fetchCharacters, getPageParams } from "../utils";

const App = () => {
  const [page, setPage] = useState(getPageParams())
  const { data, isError, isLoading } = useQuery(
    ['characters', page],
    () => fetchCharacters(`page=${page}`),
    { keepPreviousData : true }
  )

  useEffect(() => {
    replaceHistoryState(`page=${page}`)
    // eslint-disable react-hooks/exhaustive-deps
  }, [])

  const handleSetPage = (newPage: number) => {
    replaceHistoryState(`page=${newPage}`)
    setPage(newPage)
  }

  function replaceHistoryState(query: string) {
    window.history.replaceState(null, "", "?" + query);
  }

  const displayCharacters = !isLoading && !isError;

  return (
    <div className="App m-3">
      <div className="container">
        {!displayCharacters ? (
          <div className="row row-cols-3 justify-content-center">
            {isLoading ? <Loading /> : null}
            {isError ? <Error /> : null}
          </div>
        ) : (
          <>
            <Characters characters={data?.results} />
            <div className="row mt-4 justify-content-center">
              <div className="col-auto">
                {displayCharacters ? (
                  <Paging
                    info={data?.info}
                    page={page}
                    setPage={handleSetPage}
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
