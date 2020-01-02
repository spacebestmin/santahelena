import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component.js";

import GiftList from "./components/gift-list.component.js"
import EditGift from "./components/edit-gift.component.js"
import CreateGift from "./components/create-gift.component.js"
import CreateSanta from "./components/create-santa.component.js"

//I love bootstrap <3<3<3

function App() {
  return (
    //these are not just an HTML codes,
    //but it is JSX which stands for JavaScript XML
    //it allows us to write HTML in React
<Router>
  <div className="container">
    <Navbar></Navbar>
  {/*Router helps us to set url paths that will load on the page*/}
  <br/>
  </div>
  <Route path="/" exact component={GiftList} />
  {/* <Route path="/edit/:id" exact component={EditGift} />
  <Route path="/create/:id" exact component={CreateGift} />
  <Route path="/santas" exact component={CreateSanta} /> */}
</Router>

    );
}

export default App;
