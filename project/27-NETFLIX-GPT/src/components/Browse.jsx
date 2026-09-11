import nowPlayingMovies from '../hook/useNowplayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
const Browse = () => {
  
nowPlayingMovies()
        
  return (
    <div className="flex justify-between">
     
          <Header/>
           <MainContainer />
            <SecondaryContainer />
      
    </div>
  )
}

export default Browse
