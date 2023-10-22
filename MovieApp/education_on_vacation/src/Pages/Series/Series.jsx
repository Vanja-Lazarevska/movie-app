import { useState, useEffect } from "react"
import { SeriesGenre } from "../../Components/SeriesGenre/SeriesGenre"
import { fetchGenres } from "../../utils/shared/fetchFunc"

const Series = () => {
    const [genre, setGenre] = useState([])
    const apiKey = '4b136df1e8e8f6a86757e2a959bb1fc6'
    const URL = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`

    const handleScroll = (id) => {
        const seriesById = document.getElementById(id)
        seriesById.scrollIntoView({behavior: "smooth"})
    }

    useEffect(()=> {
        if(genre.length !==0) return;
        fetchGenres(URL, setGenre)       
    }, [])

return (
    <div>
        <h1>Series</h1>

        <div className='allGenres'>
            {genre.map((genre) => (
                <div key={genre.id} className='genreBtn' onClick={() => handleScroll(genre.id)}>{genre.name}</div>
            ))}
            </div>
            
            <div className='containerGenre'>
                {genre.map((genre)=> (
                    <div key={genre.id} id={genre.id}>
                    <h2 className='genreName'>{genre.name}</h2>
                    <div className='eachGenre'>
                    <SeriesGenre genreId={genre.id} />
                    </div>
                    </div>
                ))} 
                </div>
    </div>

)
}

export default Series