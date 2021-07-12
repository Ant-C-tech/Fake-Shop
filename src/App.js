import "semantic-ui-css/semantic.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Header} from "semantic-ui-react";

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
          <Route>
            <Container>
              {" "}
              <Header as='h1'>
                404 Not Found
              </Header>
            </Container>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
