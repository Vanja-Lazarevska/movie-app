import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Movies from './Pages/Movies/Movies'
import SingleMovie from './Pages/SingleMovie/SinegleMovie'
import Footer from './Components/Footer/Footer'
import SignIn from './Components/SignIn/SignIn'
import { useState } from 'react'
import SignUp from './Components/SignUp/SignUp'
import Series from './Pages/Series/Series'
import SingleSeries from './Pages/SingleSeries/SingleSeries'
import GuardedRoute from './guard/auth.guard'

function App() {
  const [token, setToken] = useState()
  const [movies, setMovies] = useState([])

  return (
      <BrowserRouter>
      <Navbar setMovies={setMovies} movies={movies} />
      <Routes>
      <Route path='/signIn' element={<SignIn setToken={setToken}/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route element={<GuardedRoute/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movie/:id' element={<SingleMovie />} />
        <Route path='/series' element={<Series />}/>
        <Route path='/series/:id' element={<SingleSeries />} />
      </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App
