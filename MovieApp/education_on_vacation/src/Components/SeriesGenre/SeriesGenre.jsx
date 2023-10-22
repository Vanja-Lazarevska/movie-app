import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import MoviesCard from "../MoviesCard/MoviesCard"
import MoviesPagination from "../Pagination/Pagination"
import { fetchFunc } from "../../utils/shared/fetchFunc"

export const SeriesGenre = ({genreId}) => {
    const apiKey = '4b136df1e8e8f6a86757e2a959bb1fc6'
    const [series, setSeries] = useState([])
    const [paginationSeries, setPaginationSeries] = useState([])
    const navigate = useNavigate()
    const URL = `https://api.themoviedb.org/3/discover/tv/?api_key=${apiKey}&with_genres=${genreId}`

useEffect(()=> {
    fetchFunc(URL, setSeries, genreId)
}, [])

    return (
        <div>
            <div className="movieGenreContainer">
            {paginationSeries.map((series) => {
                return (
                    <div onClick={() => navigate(`/series/${series.id}`)} key={series.id}>
                    <MoviesCard movie={series} key={series.id} isMovie={false}/>
                    </div>
                    )})
            }
    </div>
        <MoviesPagination movies={series} moviesLenght={series.length} setPaginationMovies={setPaginationSeries}/>
        </div>
    )
}