import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/Home/Home"
import CategoryPage from "./pages/Category/Category"
import Navbar from "./components/navbar/Navbar"
import SellerPage from "./pages/becomeASeller/SellerPage"

function App() {

  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/become-a-seller" element={<SellerPage />} />
      </Routes>

    </div>
  )
}

export default App
// this app fetch by name 
