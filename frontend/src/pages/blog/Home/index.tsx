import ArtList from "../Articles/ArtList";
import "./index.less"
import { Route, Routes } from "react-router-dom";
import ArtDetail from "../ArtDetail";
import logo from "@/assets/logo.jpg"

const Home:React.FC = () => {
  return (
    <div className="home">
      {/* 个人信息区域 */}
      <div className="userInfo">
        <div className="logo">
          <img  src={logo} width="102" height="102"></img>
        </div>
        
      </div>

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