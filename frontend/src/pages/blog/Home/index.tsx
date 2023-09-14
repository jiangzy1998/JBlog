import Pagination from "@/components/Pagination";
import ArtList from "../Articles/ArtList";
import "./index.less"

const Home:React.FC = () => {
  return (
    <div className="home">
      <div className="userInfo">
      
      </div>

      <div className="artCotent">
        <div className="content-wrapper">
          <ArtList></ArtList>
          <Pagination total={5} current={1}></Pagination>
        </div>
      </div>
    </div>
  )
}

export default Home;