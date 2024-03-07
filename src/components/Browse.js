import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlaying Movies';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


// Fetch Data from TMDB API  and update store
const Browse = () => {

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();


    return (
        <div>
            <Header />
            {showGptSearch ? <GptSearch /> : <><MainContainer />
                <SecondaryContainer /></>
            }
        </div>
    )
};

export default Browse;