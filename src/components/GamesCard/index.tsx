interface GameProps {
  game: string;
  showLink: boolean;
}

import { Link } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';

import "./style.css"

function GamesCard({ game, showLink = true }: GameProps) {
  return (
      <div className="game">
        <img src={game.background_image} alt={game.slug} id={game.id} />
        <h2>{game.name}</h2>
        <span>
          <FaStar /> {game.rating}
        </span>
        <br />
        {showLink && <Link to={`/game/${game.id}/${game.slug}`}>Ver Mais</Link>}
      </div>
  )
}

export default GamesCard