import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from '../../Presentation/Pages/Home/HomeView';
import LoginPage from '../../Presentation/Pages/Login/LoginView';
import UserPage from '../../Presentation/Pages/UserPage/UserPage';
import ShopView from '../../Presentation/Pages/Shop/ShopView';
import ProductView from '../../Presentation/Pages/Product/ProductView';
import ShopCarView from '../../Presentation/Pages/ShopCar/ShopCarView';

const Router: React.FC = ()=> {
  return (
    <Routes>
      <Route path='/home/' element={<HomeView/>}/>
      <Route path='/home/shop/' element={<ShopView/>}/>
      <Route path='/home/shop/:productname' element={<ProductView />} />
      <Route path='/home/shop-car/' element={<ShopCarView/>}/>
      <Route path='/userpage/' element={<UserPage/>}/>
      <Route path='/login/' element={<LoginPage/>}/>
    </Routes>
  );
}

export default Router;
