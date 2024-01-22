import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/Home/Home"
import CategoryPage from "./pages/Category/Category"
import SellerPage from "./pages/BecomeASeller/SellerPage"
import InfoSeller from "./pages/BecomeASeller/InfoSellerPage"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/become-a-seller/overview" element={<SellerPage />} />
        <Route path="/become-a-seller/seller_info" element={<InfoSeller />} />
      </Routes>

    </div>
  )
}

export default App
// this app fetch by name 
