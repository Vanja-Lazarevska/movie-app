import { Box, Pagination } from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"

const MoviesPagination = ({movies, moviesLenght, setPaginationMovies}) => {
    const pageSize = 5
    const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize
})

useEffect(() => {
    const paginationMovies = movies.slice(pagination.from, pagination.to) // da bidev po 5 filmovi od tj genre
    setPaginationMovies(paginationMovies)
},[pagination]) // da se izvrsi od kako ke se izvrsi ovj dole useEffect znaci kd pagination kako objekt ke gu promeni svoju vrednost

useEffect(() => {
    setPagination({...pagination, count: moviesLenght})
},[movies])  // da se izvrsi od kako ke gi fetchenmo movies od moviesGenre znaci kd nema da e prazna niza

const handleOnChange = (event, page) => {
    const from = (page - 1) * pageSize
    const to = (page - 1 ) * pageSize + pageSize
    setPagination({...pagination, from:from, to: to})
}
    return (
        <Box display="flex" justifyContent="center" sx={{ margin: "20px 0px"}}>
            <Pagination count={Math.ceil(pagination.count / pageSize)} onChange={handleOnChange} color="secondary"/>
        </Box>
    )
}

export default MoviesPagination