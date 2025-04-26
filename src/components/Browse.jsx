import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaying'

const Browse = () => {

  useNowPlayingMovies();
 
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse
