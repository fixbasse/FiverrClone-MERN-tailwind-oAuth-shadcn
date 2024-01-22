import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/Home"
import CategoryPage from "./pages/Category/CategoryPage"
import SellerPage from "./pages/BecomeASeller/SellerPage"
import InfoSeller from "./pages/BecomeASeller/InfoSellerPage"
import Navbar from "./components/navbar/Navbar"
import LoadingScreen from "./components/LoadingScreen"
import CreatePage from "./pages/Create/CreatePage"

function App() {
  return (
    <div>
      <Navbar />
      <LoadingScreen />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/become-a-seller/overview" element={<SellerPage />} />
        <Route path="/become-a-seller/seller_info" element={<InfoSeller />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  )
}

export default App
// this app fetch by name 
