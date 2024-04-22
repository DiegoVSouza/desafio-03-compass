import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from '../../Presentation/Pages/Home/HomeView';
import LoginView from '../../Presentation/Pages/Login/LoginView';
import UserPage from '../../Presentation/Pages/UserPage/UserPage';
import ShopView from '../../Presentation/Pages/Shop/ShopView';
import ProductView from '../../Presentation/Pages/Product/ProductView';
import ShopCarView from '../../Presentation/Pages/ShopCar/ShopCarView';
import RegisterView from '../../Presentation/Pages/Register/RegisterView';

const Router: React.FC = ()=> {
  return (
    <Routes>
      <Route path='/home/' element={<HomeView/>}/>
      <Route path='/home/shop/' element={<ShopView/>}/>
      <Route path='/home/shop/:productname' element={<ProductView />} />
      <Route path='/home/shop-car/' element={<ShopCarView/>}/>
      <Route path='/userpage/' element={<UserPage/>}/>
      <Route path='/login/' element={<LoginView/>}/>
      <Route path='/register/' element={<RegisterView/>}/>
    </Routes>
  );
}

export default Router;
