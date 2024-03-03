import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        <div className='bg-black '>
            <div className='-mt-52 relative z-20 pl-10 '>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
                <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
                <MovieList title={"TV Shows"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Thriller Movies"} movies={movies.nowPlayingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer
