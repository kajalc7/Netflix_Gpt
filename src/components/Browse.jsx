import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showgptSearch = useSelector(store=>store.gpt.showgptSearch);

  useNowPlayingMovies();
  usePopularMovies();
 
  return (
    <div>
      <Header/>
      {
        showgptSearch ? <GPTSearch/> :<>  <MainContainer/>
        <SecondaryContainer/></>
      }
    </div>
  )
}

export default Browse
