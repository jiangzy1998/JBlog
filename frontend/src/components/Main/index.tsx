import Home from "@/pages/blog/Home";
import Dashboard from "@/pages/dashboard";
import { Navigate, Route, Routes } from "react-router-dom"
import ErrorBoundary from "../ErrorBoundary"

const Main:React.FC = () => {
  return (
    <main>
      <ErrorBoundary>
        <Routes>
          <Route path='/blog/*' element={<Home />}></Route>
          <Route path='/dashboard/*' element={<Dashboard />}></Route>
          <Route path='*' element={<Navigate to='/blog' replace />} />
        </Routes>
      </ErrorBoundary>
    </main>
  )
}

export default Main;