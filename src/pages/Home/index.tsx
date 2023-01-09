import { useState, useEffect } from 'react'


import GamesCard from '../../components/GamesCard';
import Loading from '../../components/Loader';

import "./style.css"

const api = import.meta.env.VITE_API;

function Home() {
  var btnPrev = document.querySelector(".back-to-top");

  btnPrev?.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });

  var btnNext = document.querySelector(".next-to-top");

  btnNext?.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });

  const [page, setPage] = useState(1)
  const [gamesps5, setGamesPs5] = useState([]);
  const [gamesps4, setGamesPs4] = useState([]);
  const [gamespc, setGamesPc] = useState([]);
  const [gamesxbox, setGamesXbox] = useState([]);
  const [gamesnitendo, setGamesNitendo] = useState([]);


  const getGamesPs5 = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setGamesPs5(data.results);
  }

  useEffect(() => {
    const gamePs5Url = `https://api.rawg.io/api/games?key=${api}&platforms=187&ordering=-metacritic&page=${page}`;
    getGamesPs5(gamePs5Url)
  }, [page])


  const getGamesPs4 = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setGamesPs4(data.results);
  }

  useEffect(() => {
    const gamePs4Url = `https://api.rawg.io/api/games?key=${api}&platforms=18&ordering=-metacritic&page=${page}`;
    getGamesPs4(gamePs4Url)
  }, [page])


  const getGamesPc = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setGamesPc(data.results);
  }

  useEffect(() => {
    const gamePcUrl = `https://api.rawg.io/api/games?key=${api}&platforms=4&ordering=-metacritic&page=${page}`;
    getGamesPc(gamePcUrl)
  }, [page])


  const getGamesXbox = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setGamesXbox(data.results);
  }

  useEffect(() => {
    const gameXboxUrl = `https://api.rawg.io/api/games?key=${api}&platforms=186&ordering=-metacritic&page=${page}`;
    getGamesXbox(gameXboxUrl)
  }, [page])


  const getGamesNitendo = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setGamesNitendo(data.results);
  }

  useEffect(() => {
    const gameNintendoUrl = `https://api.rawg.io/api/games?key=${api}&platforms=7&ordering=-metacritic&page=${page}`;
    getGamesNitendo(gameNintendoUrl)
  }, [page])


  return (
    <div>
      {gamesps5.length === 0 && <Loading />}
      {gamesps5.length > 0 && <h2 className='title-game'>PlayStation 5</h2>}
      <div className='game-grid'>
        {gamesps5.slice(0, 10).map((game) => (
          <GamesCard key={game.id} game={game} showLink={true} />
        ))}
      </div>

      {gamesps4.length === 0 && <Loading />}
      {gamesps4.length > 0 && <h2 className='title-game'>PlayStation 4</h2>}
      <div className='game-grid'>
        {gamesps4.slice(0, 10).map((game) => (
          <GamesCard key={game.id} game={game} showLink={true} />
        ))}
      </div>

      {gamespc.length === 0 && <Loading />}
      {gamespc.length > 0 && <h2 className='title-game'>PC</h2>}
      <div className='game-grid'>
        {gamespc.slice(0, 10).map((game) => (
          <GamesCard key={game.id} game={game} showLink={true} />
        ))}
      </div>

      {gamesxbox.length === 0 && <Loading />}
      {gamesxbox.length > 0 && <h2 className='title-game'>Xbox Series S/X</h2>}
      <div className='game-grid'>
        {gamesxbox.slice(0, 10).map((game) => (
          <GamesCard key={game.id} game={game} showLink={true} />
        ))}
      </div>

      {gamesnitendo.length === 0 && <Loading />}
      {gamesnitendo.length > 0 && <h2 className='title-game'>Nintendo Switch</h2>}
      <div className='game-grid'>
        {gamesnitendo.slice(0, 10).map((game) => (
          <GamesCard key={game.id} game={game} showLink={true} />
        ))}
      </div>

      {gamesnitendo.length > 0 &&
        <div className="page">
          <button 
            className='back-to-top'
            onClick={() => {
            if (page === 1) {
              return page ;
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
            if (page === 30) {
              setPage(30)
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

export default Home