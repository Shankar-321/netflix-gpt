import useNowPlayingMovies from '../hooks/useNowPlaying Movies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


// Fetch Data from TMDB API  and update store
const Browse = () => {

    useNowPlayingMovies();


    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
};

export default Browse