import { useState } from 'react'
import { useEffect } from 'react'
import '../Movies/Movies.css'
import { MovieGenre } from '../../Components/MovieGenre/MovieGenre'
import { fetchGenres } from '../../utils/shared/fetchFunc'

const Movies = () => {
    const [genres, setGenres] = useState([])
    const apiKey = '4b136df1e8e8f6a86757e2a959bb1fc6'
    const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`

    const handleScroll = (id) => {
        const movieById = document.getElementById(id)
        movieById.scrollIntoView({behavior: "smooth"})
    }

    useEffect(()=> {
        if(genres.length !==0) return;
        fetchGenres(URL, setGenres)
    }, [])


    return (
        <div>
            <h1>Movies</h1>

            <div className='allGenres'>
            {genres.map((genre) => (
                <div key={genre.id} className='genreBtn' onClick={() => handleScroll(genre.id)}>{genre.name}</div>
            ))}
            </div>
            
            <div className='containerGenre'>
                {genres.map((genre)=> (
                    <div key={genre.id} id={genre.id}>
                    <h2 className='genreName'>{genre.name}</h2>
                    <div className='eachGenre'>
                    <MovieGenre genreId={genre.id}/>
                    </div>
                    </div>
                ))} 
            </div>
        </div>
    )
}

export default Movies