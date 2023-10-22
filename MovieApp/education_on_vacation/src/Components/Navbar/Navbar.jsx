import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import ResponsiveDialog from '../SearchBar/SearchBar'

const Navbar = ({setMovies, movies}) => {
    const navLinks = [
        {
            id: '1',
            name: 'Home',
            path: '/'
        },
        {
            id: '2',
            name: 'Movies',
            path: '/movies'
        },
        {
            id: '3',
            name: 'Series',
            path: '/series'
        }
    ]

    return (
        <div>
            <header>
                <nav className='navbar'>
                    <img src='https://cdn.iconscout.com/icon/premium/png-128-thumb/book-film-3102960-2583445.png?f=webp' alt="Logo of eduva" width={60} height={60} />
                    <ul className='navLinks'>
                        {navLinks.map(navlink => (
                            <Link to={navlink.path} key={navlink.id}>
                                <li>
                                    {navlink.name}
                                </li>
                            </Link>
                        ))}
                        <li>
                        <ResponsiveDialog setMovies={setMovies} movies={movies}/>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar