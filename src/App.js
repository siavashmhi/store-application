import React from "react";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductContextProvider from "./context/ProductContextProvider";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './styles/App.css'

function App() {
  return (
    <Router>
      <ProductContextProvider>
        <Switch>
          <Route path="/cart" component={CartPage}/>
          <Route path="/" component={HomePage} exact/>
        </Switch>
      </ProductContextProvider>
    </Router>
  );
}

export default App;