import Home from "@/pages/blog/Home";
import { Navigate, Route, Routes } from "react-router-dom"
import ErrorBoundary from "../ErrorBoundary"
import Manage from "@/pages/Manage";

const Main:React.FC = () => {
  return (
    <main>
      <ErrorBoundary>
        <Routes>
          <Route path='/blog/*' element={<Home />}></Route>
          <Route path='/manage/*' element={<Manage />}></Route>
          <Route path='*' element={<Navigate to='/blog' replace />} />
        </Routes>
      </ErrorBoundary>
    </main>
  )
}

export default Main;