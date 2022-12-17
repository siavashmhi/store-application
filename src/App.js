import React from "react";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Checkout from "./pages/checkout/Checkout";
import Profile from "./pages/profile/Profile";
import ProductContextProvider from "./context/ProductContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/App.css'

function App() {
  return (
    <div className="App">
      <Router>
          <AuthContextProvider>
            <ProductContextProvider>
              <ToastContainer />
              <Switch>
                <Route path="/cart" component={CartPage}/>
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/" component={HomePage} exact/>
              </Switch>
            </ProductContextProvider>
          </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;