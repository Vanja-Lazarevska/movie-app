import MoviesCard  from '../MoviesCard/MoviesCard.jsx'
import { useNavigate } from 'react-router'

export const HomeCategories = ({array, category, isMovie}) => {

    const navigate = useNavigate()

    return (
        <>
          <div className='container'>
                <h2 className='moviesHeading'>{category} Movies</h2>
                <div className='cards'>
                    {array.map((movie) => (
                        <div key={movie.id} onClick={() => {isMovie ? navigate(`/movie/${movie.id}`) : navigate(`/series/${movie.id}`) }}>
                            <MoviesCard movie={movie} key={movie.id} isMovie={true} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}