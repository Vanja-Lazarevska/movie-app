import { useState,useEffect } from "react"
import { useParams } from "react-router"
import { FiStar } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import * as React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import { PiChatTextLight } from "react-icons/pi"
import { GrLanguage } from "react-icons/gr";
import { BsCalendar2Date, BsSuitHeart } from "react-icons/bs";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { ListItemComponent } from "../../Components/ListItem/ListItem";
import { fetchSingle } from "../../utils/shared/fetchFunc";

const SingleSeries = () => {

    const [singleSeries, setSingleSeries] = useState([])
    const params = useParams()
    const id = params.id
    const iconSize = 30
    const image = `https://image.tmdb.org/t/p/w342/${singleSeries.poster_path}`
    const backdropPath = `https://image.tmdb.org/t/p/w780/${singleSeries.backdrop_path}`
    const apiKey = '4b136df1e8e8f6a86757e2a959bb1fc6'
    const URL =`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`

    useEffect(() => {
        if (singleSeries.length !== 0) return;
        fetchSingle(URL, setSingleSeries)
    }, [])
    
    return (
        <div>
            {console.log('THE SERIE', singleSeries)}
           <div className="container-singeMovies">
                <div className="titleRating">
                    <h1 className="title">{singleSeries.name}</h1>
                    <div>
                        <h3>Rating</h3>
                        <div className="box">
                            <FiStar color="gold" size={iconSize} />
                            <div className="contentBox">{singleSeries.vote_average} /10</div>
                        </div>
                    </div>
                    <div>
                        <h3>Add favorite</h3>
                        <div className='box'>
                            <BsSuitHeart color="red" size={iconSize} />
                            <div className="contentBox">Rate</div>
                        </div>
                    </div>
                    <div>
                        <h3>Popularity</h3>
                        <div className='box'>
                            <FaArrowTrendUp size={iconSize} />
                            <div className="contentBox">{singleSeries.popularity}</div>
                        </div>
                    </div>
                </div>  
         
                <div className="imagesForMovie">
                    <img src={image} />
                    <img src={backdropPath} />
                </div>

                {singleSeries.genres ? singleSeries.genres.map((genre) => (
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
                                text={singleSeries.overview}
                                 />
                                <ListItemComponent 
                                Icon={GrLanguage}
                                text={singleSeries.original_language}
                                />
                                <ListItemComponent 
                                Icon={BsCalendar2Date}
                                text={singleSeries.last_air_date}
                                />
                            </List>
                        </nav>
                    </Box>
                    <div className="production">
                    <h3>Production</h3>
                    <h4>Companies</h4>
                    <div>{singleSeries.production_companies ? singleSeries.production_companies.map((companie)=> (
                            <div key={companie.name}>
                            <div>{companie.name}</div>
                            </div>
                    )): null}</div> 

                    <h4>Country</h4>
                    <div>{singleSeries.production_countries ? singleSeries.production_countries.map((country) => (
                        <div key={country.name}>
                            <p>{country.name}</p>
                        </div>
                    )): null}</div>
                    
                    </div>
                </div>
            </div>
            <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: "10%",
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group" color="secondary" size="large">
        <Button>Sesions: {singleSeries.number_of_seasons}</Button>
        <Button>Episodes: {singleSeries.number_of_episodes}</Button>
      </ButtonGroup>
    </Box>
        </div>
    )
}

export default SingleSeries