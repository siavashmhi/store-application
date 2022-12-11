import React from "react";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductContextProvider from "./context/ProductContextProvider";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="body">
          <ProductContextProvider>
            <Switch>
              <Route path="/cart" component={CartPage}/>
              <Route path="/" component={HomePage} exact/>
            </Switch>
          </ProductContextProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;