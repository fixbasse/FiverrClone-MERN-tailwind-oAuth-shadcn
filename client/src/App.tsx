import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import CategoryPage from "./pages/Category/CategoryPage"
import SellerPage from "./pages/BecomeASeller/SellerPage"
import InfoSeller from "./pages/BecomeASeller/InfoSellerPage"
import Navbar from "./components/navbar/Navbar"
import CreatePage from "./pages/Create/CreatePage"
import ShowProductPage from "./pages/ShowProduct/ShowProductPage"
import { useContext } from "react"
import { AuthContext } from "./context/auth/AuthContext"

function App() {
  const { isLoading } = useContext(AuthContext);
  return (
    <div
      className={isLoading ? 'opacity-90' : undefined}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/show-product" element={<ShowProductPage />} />
        <Route path="/become-a-seller/overview" element={<SellerPage />} />
        <Route path="/become-a-seller/seller_info" element={<InfoSeller />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  )
}

export default App
// this app fetch by name 
