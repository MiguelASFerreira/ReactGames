import { useState, useEffect } from 'react'

import GamesCard from '../../components/GamesCard';
import Loading from '../../components/Loader';


const apiKey = import.meta.env.VITE_API;

import "./style.css"


function Games() {
  var btnPrev = document.querySelector(".back-to-top");
  
  btnPrev?.addEventListener("click", function() {
    window.scrollTo(0, 0);
  });
  
  var btnNext = document.querySelector(".next-to-top");
  
  btnNext?.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

  const [page, setPage] = useState(1)
  const [games, setGames] = useState([]);

  const getGames = async (url: RequestInfo | URL) => {
    
    const res = await fetch(url);
    const data = await res.json();

    setGames(data.results);
  }


  useEffect(() => {
    const gameUrl = `https://api.rawg.io/api/games?key=${apiKey}&page=${page}`;
    getGames(gameUrl)
  }, [page])



  return (
    <div>
      <div className='games'>
        {games.length === 0 && <Loading />}
        {games.map((game) => (
          <GamesCard key={game.id} game={game} showLink={true} />
        ))}
      </div>
      {games.length > 0 &&
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
            if (page === 50) {
              setPage(50)
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

export default Games