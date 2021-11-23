import React, { useRef, useState } from 'react';
import './App.css';


import './css/reset.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import List from './components/List';
import Detail from './components/Detail';




function App(){
    return(
        <BrowserRouter>
            <Header/>
            <Route path="/" exact component={Home}/>
            <Switch>
                <Route path="/product/:id" component={Detail}/>
                <Route path="/product/list" component={List}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;