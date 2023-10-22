import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';
import '../SearchBar/SearchBar.css'
import { fetchFunc } from '../../utils/shared/fetchFunc';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function ResponsiveDialog({setMovies, movies}) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const handleClickOpen = async () => {

    const apiKey = '4b136df1e8e8f6a86757e2a959bb1fc6'
    const URL = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
    fetchFunc(URL, setMovies)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
       <SearchBar handleClickOpen={handleClickOpen} setMovies={setMovies}/>
      <Dialog
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            backgroundColor: 'rgb(255, 224, 212)'
          },
        },}}
        fullScreen={fullScreen}
        fullWidth={true}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="responsive-dialog-title">
            <div className='searchClose'>
          {"Search movie"}
          <SearchBar handleClickOpen={handleClickOpen} setMovies={setMovies}/>
          <DialogActions>
          <Button autoFocus onClick={handleClose}>
            X
          </Button>
        </DialogActions>
          </div>
        </DialogTitle>
        
        <div className='containerForSearch'
>
            {movies.map((movie)=> {
                return (
                    <MoviesCard movie={movie} isMovie={true} key={movie.id} />
                )
})}
</div>
      </Dialog>
    </>
  );
}





const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));



export const SearchBar = ({setMovies, handleClickOpen}) => {
    const handleSearchValue = async (e) => {
        const apiKey = '4b136df1e8e8f6a86757e2a959bb1fc6'
        console.log(e.target.value)
        const searchValue = e.target.value
    
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`
        const response = await fetch(URL)
        const data = await response.json()
        setMovies(data.results)
      }
    
    return (
        <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
        onClick={handleClickOpen}
        onChange={(event) => handleSearchValue(event)}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    )
}
 