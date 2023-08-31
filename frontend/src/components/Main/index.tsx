import Dashboard from "@/pages/dashboard";
import { Route, Routes } from "react-router-dom"
import ErrorBoundary from "../ErrorBoundary"

const Main:React.FC = () => {
  return (
    <main>
      <ErrorBoundary>
        <Routes>
          <Route path='/dashboard/*' element={<Dashboard />}></Route>
        </Routes>
      </ErrorBoundary>
    </main>
  )
}

export default Main;