import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import  Home  from "./pages/home/Home"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./login/login";
import Messages from "./messages/message";
 
 
function App() {
  return (
   <Router>
    
 
  <div className="container">
   
   <Switch>
   <Route exact path="/">
         <Login/>
   </Route>
   <Route  path="/home">
       <div>  <Topbar/> <Sidebar/> </div><Home/>
   </Route>
   <Route  path="/users">
   <div>  <Topbar/> <Sidebar/> </div>
      <UserList/>
      </Route>
      <Route  path="/user/:userId">
      <div>  <Topbar/> <Sidebar/> </div> <User/>
      </Route>
      <Route path="/newUser">
      <div>  <Topbar/> <Sidebar/> </div><NewUser/>
      </Route>

      <Route  path="/products">
      <div>  <Topbar/> <Sidebar/> </div><ProductList/>
      </Route>
      <Route  path="/product/:productId">
      <div>  <Topbar/> <Sidebar/> </div><Product/>
      </Route>
      <Route path="/newProduct">
      <div>  <Topbar/> <Sidebar/> </div>
      <NewProduct/>
      </Route>
      <Route path="/messages">
      <div>  <Topbar/> <Sidebar/> </div>
      <Messages/>
      </Route>
      

    </Switch> 
  </div>
   </Router> 
  );
}

export default App;
