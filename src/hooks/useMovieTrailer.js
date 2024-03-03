import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addTrailerVideo } from '../utils/moviesSlice';


const useMovieTrailer = (movieId) => {
    // console.log(movieId);

    const dispatch = useDispatch();                                     // Using redux Store 

    // Fetch the Trailer Video && updating the store with the trailer video data
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        // console.log(data);

        const json = await data.json();
        // console.log(json);

        const filterData = json?.results?.filter((video) => video?.type === "Trailer");      // It may Contain More than one video trailers
        const trailer = filterData?.length ? filterData[0] : json?.results[0];
        // console.log(trailer);

        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovieVideos();
    }, []);
};

export default useMovieTrailer;