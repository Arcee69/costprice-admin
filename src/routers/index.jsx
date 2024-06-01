import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthProtectRoutes, ProtectRoutes } from './protectRoutes'

import Dashboard from '../pages/Dashboard'
import BoardLayout from '../layouts/BoardLayout'
import Principals from '../pages/UserManagement/Principals'
import Shoppers from '../pages/UserManagement/Shoppers'
import Admin from '../pages/UserManagement/Admin'
import Merchants from '../pages/UserManagement/Merchants'
import Roles from '../pages/Roles'
import Categories from '../pages/Products/Categories'
import Orders from '../pages/Orders'

import Settings from '../pages/Settings'
import Products from '../pages/Products/Products'
import Login from '../pages/Auth/login'
import ProductDetails from '../pages/Products/ProductDetails'
import AdminDetails from '../pages/UserManagement/Admin/Details/AdminDetails'
import PrincipalDetails from '../pages/UserManagement/Principals/Details/PrincipalDetails'
import AddNewPrincipal from '../pages/UserManagement/Principals/AddNew'
import MerchantDetails from '../pages/UserManagement/Merchants/Details/MerchantDetails'
import ShopperDetails from '../pages/UserManagement/Shoppers/Details/ShopperDetails'
import CategoriesDetails from '../pages/Products/Categories/Details/CategoriesDetails'
import AddNewCategory from '../pages/Products/Categories/AddNew'
import Details from '../pages/Orders/Details'
import Transaction from '../pages/Financials/Transactions'
import Refunds from '../pages/Financials/Refunds'
import Subscription from '../pages/Financials/Subscription'
import TransactionDetails from '../pages/Financials/Transactions/Details'
import SubscriptionDetails from '../pages/Financials/Subscription/Details'

const Routers = () => {
  return (
    <Routes>
        <>
          <Route element={<ProtectRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />   
            <Route path='/principals' element={<Principals />} />
            <Route path='/shoppers' element={<Shoppers />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/merchants' element={<Merchants />} />
            <Route path='/roles' element={<Roles />} />
            <Route path='/products' element={<Products />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/transactions' element={<Transaction />} />
            <Route path='/transactions-details' element={<TransactionDetails />} />
            <Route path='/refunds' element={<Refunds />} />
            <Route path='/subscription' element={<Subscription />} />
            <Route path='/subscription-details' element={<SubscriptionDetails />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/product-details' element={<ProductDetails />} />
            <Route path='/admin-details' element={<AdminDetails />} />
            <Route path='/principal-details' element={<PrincipalDetails />} />
            <Route path='/add-principal' element={<AddNewPrincipal />} />
            <Route path='/merchant-details' element={<MerchantDetails />} />
            <Route path='/shopper-details' element={<ShopperDetails />} />
            <Route path='/categories-details' element={<CategoriesDetails />} />
            <Route path='/add-category' element={<AddNewCategory />} />
            <Route path='/order-details' element={<Details />} />
          </Route>

          <Route element={<AuthProtectRoutes />}>
            <Route path='/' element={<Login />} />
          </Route>
        </>
     
    
        {/* <>
          

        </> */}
    

  </Routes>
  )
}

export default Routers