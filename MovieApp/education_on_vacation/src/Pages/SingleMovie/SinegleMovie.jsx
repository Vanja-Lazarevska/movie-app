import { useParams } from "react-router"
import { useEffect, useState } from "react"
import './SingleMovie.css'
import { FiStar } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { PiChatTextLight } from "react-icons/pi"
import { GrLanguage } from "react-icons/gr";
import { BsCalendar2Date, BsSuitHeart } from "react-icons/bs";
import { GiDuration, GiMoneyStack } from "react-icons/gi";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { ListItemComponent } from "../../Components/ListItem/ListItem";
import { IconButton } from "@mui/material";
import { fetchSingle } from "../../utils/shared/fetchFunc";

const SingleMovie = () => {
    const [singleMovie, setSingleMovie] = useState([])
    const params = useParams()
    const id = params.id
    const iconSize = 30
    const image = `https://image.tmdb.org/t/p/w342/${singleMovie.poster_path}`
    const backdropPath = `https://image.tmdb.org/t/p/w780/${singleMovie.backdrop_path}`
    const apiKey = '4b136df1e8e8f6a86757e2a959bb1fc6'
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`

    useEffect(() => {
        fetchSingle(URL, setSingleMovie)
    }, [])

    return (
            <div className="container-singeMovies">
                <div className="titleRating">
                    <h1 className="title">{singleMovie.title}</h1>
                    <div>
                        <h3>Rating</h3>
                        <div className="box">
                            <FiStar color="gold" size={iconSize} />
                            <div className="contentBox">{singleMovie.vote_average} /10</div>
                        </div>
                    </div>
                    <div>
                        <h3>Add to favorite</h3>
                        <div className='box'>
                            <IconButton><BsSuitHeart color="red" size={iconSize}/></IconButton>
                            <div className="contentBox">Favorite</div>
                        </div>
                    </div>
                    <div>
                        <h3>Popularity</h3>
                        <div className='box'>
                            <FaArrowTrendUp size={iconSize} />
                            <div className="contentBox">{singleMovie.popularity}</div>
                        </div>
                    </div>
                </div>

                <div className="imagesForMovie">
                    <img src={image} />
                    <img src={backdropPath} />
                </div>

                {singleMovie.genres ? singleMovie.genres.map((genre) => (
                    <span key={genre.id} className="movieGenre">
                        <button className='btnGenre'>{genre.name}</button>
                    </span>
                )): null}   
                <div className="movieDescription">
                    <Box >
                        <nav aria-label="main mailbox folders" >
                            <List sx={{width: "70%"}}>
                                <ListItemComponent 
                                Icon={PiChatTextLight}
                                text={singleMovie.overview}
                                />
                                <ListItemComponent 
                                Icon={GrLanguage}
                                text={singleMovie.original_language}
                                />
                                <ListItemComponent
                                Icon={BsCalendar2Date} 
                                text={singleMovie.release_date}
                                />
                                <ListItemComponent 
                                Icon={GiDuration}
                                text={singleMovie.runtime}
                                />
                                <ListItemComponent 
                                Icon={AiOutlineDeliveredProcedure}
                                text={singleMovie.status}
                                />
                                <ListItemComponent 
                                Icon={FaHashtag}
                                text={singleMovie.tagline}
                                />
                                <ListItemComponent 
                                Icon={GiMoneyStack}
                                text={singleMovie.budget}
                                />  
                            </List>
                        </nav>
                    </Box>

                    <div className="production">
                    <h3>Production</h3>
                    <h4>Companies</h4>
                    <div>{singleMovie.production_companies ? singleMovie.production_companies.map((companie)=> (
                            <div key={companie.name}>
                            <div>{companie.name}</div>
                            </div>
                    )): null}</div> 
                    <h4>Country</h4>
                    <div>{singleMovie.production_countries ? singleMovie.production_countries.map((country) => (
                        <div key={country.name}>
                            <p>{country.name}</p>
                        </div>
                    )): null}</div>
                    </div>
                </div>
            </div>

    )

}

export default SingleMovie