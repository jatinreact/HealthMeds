import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "../src/Components/Home/Home";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import UserData from "./Components/UserData/UserData";
import FeaturedBrand from "./Components/FeaturedBrand/FeaturedBrand";
import Addmore from "./Components/Addmore/Addmore";
import ProductList from "./Components/AddProduct/ProductList";
import EmailVerify from "./Components/AdminLogin/EmailVerify";
import Resetpassword from "./Components/AdminLogin/Resetpassword";
import AddProduct from "./Components/AddProduct/AddProduct";
import AddBanner from "./Components/AddBanner/AddBanner";
import OrderStatus from "./Components/OrderStatus/OrderStatus";
import PaymentDetails from "./Components/PaymentDetails/PaymentDetails";
import PaymentGatway from "./Components/PaymentGatway/PaymentGatway";
import Catagories from "./Components/Catagories/Catagories";
import SubCatagories from "./Components/Catagories/SubCatagories";
import Brand from "./Components/Catagories/Brand";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={AdminLogin} />
        <Route exact path="/userdata" component={UserData} />
        <Route exact path="/featuredBrand" component={FeaturedBrand} />
        <Route exact path="/addmore" component={Addmore} />
        <Route exact path="/productList" component={ProductList} />
        <Route exact path="/emailverify" component={EmailVerify} />
        <Route exact path="/resetpassword" component={Resetpassword} />
        <Route exact path="/addproduct" component={AddProduct} />
        <Route exact path="/addBanner" component={AddBanner} />
        <Route exact path="/orderstatus" component={OrderStatus} />
        <Route exact path="/payment" component={PaymentDetails} />
        <Route exact path="/gatway" component={PaymentGatway} />
        <Route exact path="/catagories" component={Catagories} />
        <Route exact path="/SubCatagories" component={SubCatagories} />
        <Route exact path="/brand" component={Brand} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
