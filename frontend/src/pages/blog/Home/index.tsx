import ArtList from "../Articles/ArtList";
import "./index.less"

const Home:React.FC = () => {
  return (
    <div className="home">
      <div className="userInfo">
      
      </div>

      <div className="artCotent">
        <ArtList></ArtList>
      </div>
    </div>
  )
}

export default Home;