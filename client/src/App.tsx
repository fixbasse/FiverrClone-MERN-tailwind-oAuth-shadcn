import {
  Route,
  Routes
} from "react-router-dom"
import PrivateRoute from "./PrivateRoute"

import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/Home/HomePage"
import CategoryPage from "./pages/Category/CategoryPage"
import SellerPage from "./pages/BecomeASeller/SellerPage"
import InfoSeller from "./pages/BecomeASeller/InfoSellerPage"
import CreatePage from "./pages/Create/CreatePage"
import ShowProductPage from "./pages/ShowProduct/ShowProductPage"
import SingleProductPage from "./pages/SingleProduct/SingleProductPage"
import LoadingAnimate from "./components/LoadingAnimate"
import ProfilePage from "./pages/Profile/ProfilePage"
import PaymentPage from "./pages/Payment/PaymentPage"

function App() {

  return (
    <div>
      <LoadingAnimate />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/show-product" element={<ShowProductPage />} />
        <Route path="/single-product/:id" element={<SingleProductPage />} />

        {/* ONLY LOGIN USER */}
        <Route element={<PrivateRoute />}>
          <Route path="/create" element={<CreatePage />} />
          <Route path="/become-a-seller/overview" element={<SellerPage />} />
          <Route path="/become-a-seller/seller_info" element={<InfoSeller />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/payment" element={<PaymentPage />} />

        </Route>

      </Routes>
    </div>
  )
}

export default App