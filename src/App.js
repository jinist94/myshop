import React from "react";
import "./css/reset.css";
import "./App.css";
import "./css/App.scss";
import "./css/product-list.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import List from "./routes/List";
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import Search from "./routes/Search";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Route path="/" exact component={Home} />
      <main>
        <Switch>
          <Route path="/product/list/:id" component={List} />
          <Route path="/product/:id" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route path="/search/:keyword" component={Search} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
