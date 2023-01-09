import { useState, useEffect } from 'react'

import { useParams } from "react-router-dom"

const api = import.meta.env.VITE_API;

import "./style.css"
import GamesCard from '../../components/GamesCard';
import Achievements from '../../components/achievements';
import Loading from '../../components/Loader';

function DetailsGame() {
  var btnPrev = document.querySelector(".back-to-top");

  btnPrev?.addEventListener("click", function () {
    window.scrollTo(0, 1100);
  });

  var btnNext = document.querySelector(".next-to-top");

  btnNext?.addEventListener("click", function () {
    window.scrollTo(0, 1100);
  });

  const { id } = useParams()
  const [page, setPage] = useState(1)
  const [game, setGame] = useState([]);
  const [conq, setConq] = useState([])
  const [screen, setScreen] = useState([])

  const getGameDetails = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setGame(data)
  }

  const getGameAchievements = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setConq(data.results)
  }

  const getScreenShot = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setScreen(data.results)
  }

  useEffect(() => {
    const detailGame = `https://api.rawg.io/api/games/${id}?key=${api}`;

    getGameDetails(detailGame)
  }, [])

  useEffect(() => {
    const conqGame = `https://api.rawg.io/api/games/${id}/achievements?key=${api}&page=${page}`

    getGameAchievements(conqGame)
  }, [page])

  useEffect(() => {
    const screenGame = `https://api.rawg.io/api/games/${id}/screenshots?key=${api}`;

    getScreenShot(screenGame)
  }, [])

  return (
    <div>
      {game.length === 0 && <Loading />}
      <div className='DetailsGame'>
        {game &&
          <>
            <GamesCard key={game.id} game={game} showLink={false} />
            <div className='Details'>
              <div className="info">
                <h3>Data de Lançamento</h3>
                <p>{game.released?.substring(8, 10)}/{game.released?.substring(7, 5)}/{game.released?.substring(0, 4)}</p>
              </div>
              <div className="info">
                <h3>Website</h3>
                <a href={game.website ? game.website : "Não há link para o site"}>Ir para o site</a>
              </div>
              <div className="info">
                <h3>Genêros</h3>
                <div className="genres">
                  {game.genres?.map((genero) => (
                    <span key={genero.id} className="item">{genero.name ? genero.name : "Não há genêros"}</span>
                  ))}
                </div>
              </div>
              <div className="info">
                <h3>Plataformas</h3>
                <div className="plataform">
                  {game.platforms?.map((plataforma) => (
                    <p key={plataforma.id} className="item-plataform">{plataforma.platform.name ? plataforma.platform.name : "Não há plataformas"}</p>
                  ))}
                </div>
              </div>
              <div className="info ">
                <h3>Descrição</h3>
                <div className="description">
                  <p>{game.description_raw}</p>
                </div>
              </div>
              <div className="info">
                <h3>Tags</h3>
                <div className="tags">
                  {game.tags?.map((tags) => (
                    <p key={tags.id} className="item-tags">{tags.name ? tags.name : "Não há tags"}</p>
                  ))}
                </div>
              </div>
              <div className="info">
                <h3>Lojas</h3>
                <div className="lojas">
                  {game.stores?.map((lojas) => (
                    <a href={lojas.store.domain ? lojas.store.domain : "Não há link para o domínio"} key={lojas.id} className="item-store">{lojas.store.name}</a>
                  ))}
                </div>
              </div>
              <div className="info">
                <h3>Editores</h3>
                <div className="publishers">
                  {game.publishers?.map((publishers) => (
                    <p key={publishers.id} className="item-publishers">{publishers.name ? publishers.name : <p>Não há editores no banco de dados</p>}</p>
                  ))}
                </div>
              </div>
            </div>
          </>}
      </div>
      {conq.length > 0 && 
        <>
        <h3 className='text-conq'>Conquistas</h3><div className="conq">
          {conq?.map((conq) => (
            <Achievements key={conq.id} conq={conq} />
          ))}
        </div>
        </>
      }
      {game.length !== 0 &&
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
              if (page === 3) {
                setPage(3)
              } else {
                setPage(page + 1)
              }
            }}>
            Next
          </button>
        </div>}
      <div>
      <h3 className='text-conq'>Imagens</h3>
        <div className="shots">
          {screen.map((image) => (
            <img key={image.id} src={image.image} alt={image.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailsGame