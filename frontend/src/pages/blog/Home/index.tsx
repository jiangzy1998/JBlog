import ArtList from "../Articles/ArtList";
import "./index.less"
import { Route, Routes } from "react-router-dom";
import ArtDetail from "../ArtDetail";

const Home:React.FC = () => {
  return (
    <div className="home">
      {/* 个人信息区域 */}
      {/* <div className="userInfo">
      
      </div> */}

      {/* 博客区域 */}
      <div className="artCotent">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<ArtList/>  }/>
            <Route path="/:id" element={<ArtDetail/>  }/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home;