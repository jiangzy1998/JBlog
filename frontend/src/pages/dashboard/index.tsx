import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Overview from "./Overview";
import Manage from "./Manage";

const Dashboard:React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/manage' element={<Manage />}></Route>
        <Route path='/overview' element={<Overview />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default Dashboard;