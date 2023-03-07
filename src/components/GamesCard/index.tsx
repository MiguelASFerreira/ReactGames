interface GameProps {
  game: {
    id: string;
    name: string;
    background_image: string;
    slug: string;
    rating: number;
  };
  showLink: boolean;
}

import { Link } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';

import "./style.css"

function GamesCard({ game, showLink = true }: GameProps) {
  return (
    <div className="game">
      <div>
        <div className="img">
          <img src={game.background_image} alt={game.slug} id={game.id} />
        </div>
        <div className='h2-sapn'>
          <h2>{game.name}</h2>
          <span>
            <FaStar /> {game.rating}
          </span>
        </div>
      </div>
        {showLink && <Link to={`/game/${game.id}/${game.slug}`}>Ver Mais</Link>}
    </div>
  )
}

export default GamesCard