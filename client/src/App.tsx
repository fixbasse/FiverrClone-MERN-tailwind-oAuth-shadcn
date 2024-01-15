import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/Home"
import CategoryPage from "./pages/Category/Category"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </div>
  )
}

export default App
// this app fetch by name 
