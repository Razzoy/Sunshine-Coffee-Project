import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { NoPage } from './pages/NoPage'
import { CartContextProvider } from "./context/CartContext"
import { Checkout } from './pages/Checkout'
import { Product } from './pages/Product'
import { Login } from './pages/Login'


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='product' element={<Product />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='login' element={<Login />} />
          <Route path={'/*'} element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
