import React from 'react'
import {Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PaymentInputs from "./pages/PaymentInputs";

const App = () => {
  return (
      <div className="wrapper">
          <Header />
          <div className="content">
              <Route path="/" component={Home} exact />
              <Route path="/cart" component={Cart} exact />
              <Route path="/payment" component={PaymentInputs} exact />
          </div>
      </div>
  );
}

export default App;
