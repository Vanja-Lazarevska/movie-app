import MoviesCard from "../MoviesCard/MoviesCard"
import { useState, useEffect } from "react"
import '../MovieGenre/MovieGenre.css'
import { useNavigate } from "react-router"
import MoviesPagination from "../Pagination/Pagination"
import { fetchFunc } from "../../utils/shared/fetchFunc"

export const MovieGenre = ({genreId}) => {
    const apiKey = '4b136df1e8e8f6a86757e2a959bb1fc6'
    const [movies, setMovies] = useState([])
    const [paginationMovies, setPaginationMovies] = useState([])
    const navigate = useNavigate()
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`

    useEffect(()=> {
        fetchFunc(URL, setMovies, genreId)
}, [])

    return (
        <div>   
        <div className="movieGenreContainer">
            {paginationMovies.map((movie) => {
                return (
                    <div onClick={() => navigate(`/movie/${movie.id}`)} key={movie.id}>
                    <MoviesCard movie={movie} key={movie.id} />
                    </div>
                )})
            }
    </div>
        <MoviesPagination movies={movies} moviesLenght={movies.length} setPaginationMovies={setPaginationMovies}/>
        </div>
    )
    }
