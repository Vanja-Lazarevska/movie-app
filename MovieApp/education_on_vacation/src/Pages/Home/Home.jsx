import { useEffect, useState } from 'react'
import '../Home/Home.css'
import { HomeCategories } from '../../Components/HomeCategories/HomeCategories';
import { fetchCallToMoviesDb } from '../../utils/shared/fetchFunc';

const Home = () => {
    const [movies, setMovies] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [onTheAir, setOnTheAir] = useState([])
    const [airing_today, setAiringToday] = useState([])
    const [popular, setPopular] = useState([])
    const [topRatedSeries, setTopRatedSeries] = useState([])

    useEffect(() => {
        if (movies.length !== 0) return;
        fetchCallToMoviesDb('trending/movie/day', setMovies)
    }, [])

    useEffect(() => {
        if (topRated.length !== 0) return;
        fetchCallToMoviesDb('movie/top_rated', setTopRated)
    }, [])

    useEffect(() => {
        if (upcoming.length !== 0) return;
        fetchCallToMoviesDb('movie/upcoming', setUpcoming)
    }, [])

    useEffect(() => {
        if (onTheAir.length !== 0) return;
        fetchCallToMoviesDb('tv/on_the_air', setOnTheAir)
    }, [])

    useEffect(() => {
        if (airing_today.length !== 0) return;
        fetchCallToMoviesDb('tv/airing_today', setAiringToday)
    }, [])

    useEffect(() => {
        if (popular.length !== 0) return;
        fetchCallToMoviesDb('tv/popular', setPopular)
    }, [])

    useEffect(() => {
        if (topRatedSeries.length !== 0) return;
        fetchCallToMoviesDb('tv/top_rated', setTopRatedSeries)
    }, [])

    return (
        <div>
            <h1>Movies</h1>
            <HomeCategories array={ movies} category={'Trending'} isMovie={true}></HomeCategories>
            <HomeCategories array={topRated} category={'Top Rated'} isMovie={true}></HomeCategories>
            <HomeCategories array={upcoming} category={'Upcoming'} isMovie={true}></HomeCategories>
            
            <h1>Series</h1>
            <HomeCategories array={onTheAir} category={'On the Air'} isMovie={false}></HomeCategories>
            <HomeCategories array={airing_today} category={'Airing today'} isMovie={false}></HomeCategories>
            <HomeCategories array={popular} category={'Popular'} isMovie={false}></HomeCategories>
            <HomeCategories array={topRatedSeries} category={'Top Raited'} isMovie={false}></HomeCategories>

    </div>
    )
}

export default Home