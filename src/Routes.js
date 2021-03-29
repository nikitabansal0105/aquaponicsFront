import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';

//products router
import ProductCards from './core/productsList/ProductCards';
import ProductCilantro from './core/productsList/ProductCilantro';
import ProductKale from './core/productsList/ProductKale';
import ProductBasil from './core/productsList/ProductBasil';
import ProductWaterCress from './core/productsList/ProductWaterCress';
import ProductParsley from './core/productsList/ProductParsley';

//services router
import ServicesCards from './core/servicesList/ServicesCards';
import ServicesLearning from './core/servicesList/servicesLearning/ServicesLearning';
import MainComponents from './core/servicesList/servicesLearning/MainComponents';
import AquaponicsProcess from './core/servicesList/servicesLearning/AquaponicsProcess';
import BestSuitableCrops from './core/servicesList/servicesLearning/BestSuitableCrops';
import AquaponicsBenefits from './core/servicesList/servicesLearning/AquaponicsBenefits';
import AquaponicsDrawbacks from './core/servicesList/servicesLearning/AquaponicsDrawbacks';
import ServicesConsulting from './core/servicesList/servicesConsulting/ServicesConsulting';
import SeedlingOverview from './core/servicesList/servicesConsulting/SeedlingOverview';
import ServicesCrops from './core/servicesList/servicesConsulting/ServicesCrops';
import PreRequisite from './core/servicesList/servicesConsulting/PreRequisite';

import Shop from './core/Shop';
// import Product from './core/Product';
import Cart from './core/Cart';
import Menu from './core/Menu';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddProduct from './admin/AddProduct';
import UpdateProduct from './admin/UpdateProduct';
import Profile from './user/Profile';

import ManageProducts from './admin/ManageProducts';
import Orders from "./admin/Orders";

//import Footer from './footer/Footer';

const Routes = () => {
    return (
        <BrowserRouter>
        <Menu/>
            <Switch>
                <Route path="/" exact component={Home}/>

                <Route path='/productCards' component={ProductCards}/> 
                <Route path='/productCilantro' component={ProductCilantro}/>
                <Route path='/productKale' component={ProductKale}/>
                <Route path='/productBasil' component={ProductBasil}/>
                <Route path='/productWaterCress' components={ProductWaterCress}/>
                <Route path='/productParsley' component={ProductParsley}/>

                <Route path='/servicesCards' component={ServicesCards}/>
                <Route path='/servicesLearning' component={ServicesLearning}/>
                <Route path='/mainComponents' component={MainComponents}/>
                <Route path='/aquaponicsProcess' component={AquaponicsProcess}/>
                <Route path='/bestSuitableCrops' component={BestSuitableCrops}/>
                <Route path='/aquaponicsBenefits' component={AquaponicsBenefits}/>                    <Route path='/aquaponicsDrawbacks' component={AquaponicsDrawbacks}/>
                <Route path='/servicesConsulting' component={ServicesConsulting}/>
                <Route path='/preRequisite' component={PreRequisite}/>
                <Route path='/seedlingOverview' component={SeedlingOverview}/>
                <Route path='/servicesCrops' component={ServicesCrops}/>

                <Route path="/shop" exact component={Shop}/>
                <Route path="/cart" exact component={Cart}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <PrivateRoute path="/user/dashboard" exact component={Dashboard}/>
                <AdminRoute path="/user/admindashboard" exact component={AdminDashboard}/>
                <AdminRoute path="/create/product" exact component={AddProduct}/>
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct}/>
                <AdminRoute path="/admin/products" exact component={ManageProducts}/>
                {/* <Route path="/product/:productId" exact component={Product}/> */}
                <PrivateRoute path="/profile/:userId" exact component={Profile}/>
                {/* <Route path="/app" exact component={App}/> */}
                <AdminRoute path="/admin/orders" exact component={Orders}/>
            </Switch>
            {/* <Footer/> */}
        </BrowserRouter>
    );
};

export default Routes;