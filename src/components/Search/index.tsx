import { useState, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import GamesCard from '../GamesCard';
import Loading from '../Loader';


const apiKey = import.meta.env.VITE_API;

import "./style.css"


const Search = () => {
    var btnPrev = document.querySelector(".back-to-top");

    btnPrev?.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });

    var btnNext = document.querySelector(".next-to-top");

    btnNext?.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });

    const [searchParams] = useSearchParams();

    const [page, setPage] = useState(1)
    const [games, setGames] = useState([]);

    const query = searchParams.get("q");

    const getSearchGames = async (url: RequestInfo | URL) => {
        const res = await fetch(url);
        const data = await res.json();
        setGames(data.results)
    };
    useEffect(() => {
        const searchWithQueryURL = `https://api.rawg.io/api/games?key=${apiKey}&search=${query}&page=${page}`;

        getSearchGames(searchWithQueryURL);

    }, [query, page])

    return (
        <div>
            <div className='search'>
                <h2 className="title">
                    {games.length > 0 && <p>Resultados para : <span className="query-text">{query}</span></p>}
                </h2>
                {games.length === 0 && <Loading />}
                <div className="games-search">
                    {games.length > 0 && <Loading /> && games.map((game) => <GamesCard key={game.id} game={game} showLink={true} />)}
                </div>
            </div>
            {games.length > 0 &&
                <div className="page">
                    <button
                        className='back-to-top'
                        onClick={() => {
                            if (page === 1) {
                                return page;
                            } else {
                                setPage(page - 1)
                            }
                        }}>
                        Prev
                    </button>
                    <p>{page}</p>
                    <button
                        className='next-to-top'
                        onClick={() => {
                            if (page === 5) {
                                setPage(5)
                            } else {
                                setPage(page + 1)
                            }
                        }}>
                        Next
                    </button>
                </div>}
        </div>
    )
}

export default Search;