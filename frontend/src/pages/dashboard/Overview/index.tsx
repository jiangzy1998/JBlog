import { Route, Routes } from "react-router-dom";
import BlogManage from "./BlogManage";

const Overview:React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BlogManage/>  }/>
      </Routes>
    </>
    
  )
}

export default Overview;
