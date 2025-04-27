import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GPTSearch';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
 
  return (
    <div>
      <Header/>
      <GPTSearch/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
