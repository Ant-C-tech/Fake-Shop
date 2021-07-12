import "semantic-ui-css/semantic.min.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HeaderComponent } from "./components/HeaderComponent";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";

function App() {
  return (
    <div className='App'>
      <HeaderComponent />
      <Router>
        <Switch>
          <Route path='/' exact component={ProductList} />
          <Route path='/product/:productId' exact component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
