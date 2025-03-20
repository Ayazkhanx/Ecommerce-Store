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
import ShoppingHome from './pages/shopping-view/home'
import ShoppingAccount from './pages/shopping-view/account'
import ShoppingCheckout from './pages/shopping-view/checkout'
import ShoppingListings from './pages/shopping-view/listings'

function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
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


      <Route path='/shop' element={<ShoppingLayout />}>
      <Route path='home' element={<ShoppingHome />} />
      <Route path='account' element={<ShoppingAccount />} />
      <Route path='checkout' element={<ShoppingCheckout />} />
      <Route path='listings' element={<ShoppingListings />} />
      </Route>

      <Route path='*' element={<NotFound />} />

    </Routes>
    </div>
  )
}

export default App
