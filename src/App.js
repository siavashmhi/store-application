import React from "react";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductContextProvider from "./context/ProductContextProvider";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="body">
          <ProductContextProvider>
            <ToastContainer />
            <Switch>
              <Route path="/cart" component={CartPage}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/" component={HomePage} exact/>
            </Switch>
          </ProductContextProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;