import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Overview from "./Overview";

const Dashboard:React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/overview' element={<Overview />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default Dashboard;