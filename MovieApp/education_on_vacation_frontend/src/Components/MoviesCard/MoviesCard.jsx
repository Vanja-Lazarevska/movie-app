import '../MoviesCard/MoviesCard.css'
import {AiOutlinePlayCircle } from "react-icons/ai";

const MoviesCard = ({ movie, isMovie }) => {
    return (
            <div className='displayMovies'>
                <div className='movies'>
                    <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} className='movie-picture'/>
                    {isMovie === true ? <p className='movieTitle'>{movie.title}</p> : <p className='movieTitle'>{movie.name}</p> }
                    <div className='containerForPlayBtn'>
                    <AiOutlinePlayCircle size={70} className='playBtn' />
                    </div>
                </div>
            </div>  
    )
}

export default MoviesCard
