import React from "react";
import "./App.css";

import "./css/reset.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import List from "./routes/List";
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Route path="/" exact component={Home} />
      <Switch>
        <Route path="/product/:id" component={Detail} />
        <Route path="/product/list" component={List} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
