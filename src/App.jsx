import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { NoPage } from './pages/NoPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path={'/*'} element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
