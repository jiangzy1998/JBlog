import ArtList from "../Articles/ArtList";
import "./index.less"
import { Route, Routes, useNavigate } from "react-router-dom";
import ArtDetail from "../ArtDetail";
import logo from "@/assets/logo.jpg"

const Home:React.FC = () => {

  const navigate = useNavigate()

  return (
    <div className="home">
      {/* 个人信息区域 */}
      <div className="userInfo">
        <div className="logo">
          <img alt="前往首页" src={logo} width="112" height="112" onClick={() => navigate('/blog')}></img>
        </div>

        <p className="typing">我是阿酱，一名前端开发者。</p>
        
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