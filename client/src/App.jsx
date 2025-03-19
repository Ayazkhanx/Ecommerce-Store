import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/auth/authLayout'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import AdminLayout from './components/admin-view/AdminLayout'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminProducts from './pages/admin-view/products'
import AdminFeature from './pages/admin-view/feature'
import AdminOrder from './pages/admin-view/order'
import ShoppingLayout from './components/shopping-view/ShoppingLayout'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Navbar </h1>
      <Routes> 
      <Route path='/auth' element={<AuthLayout /> } >
        <Route path='login' element={<Login /> } />
        <Route path='register' element={<Register />} />
      </Route>

      <Route path='/admin' element={<AdminLayout />} >
      <Route path='dashboard' element={<AdminDashboard />} />
      <Route path='products' element={<AdminProducts />} />
      <Route path='features' element={<AdminFeature />} />
      <Route path='orders' element={<AdminOrder />} />
      </Route>


      <Route path='/shop' element={<ShoppingLayout />}></Route>
      <Route path='*' element={<NotFound />} />
      
    </Routes>
    </div>
  )
}

export default App
