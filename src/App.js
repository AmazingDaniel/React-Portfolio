import React from 'react';
import './App.css';
import Header from "./Components/Header"
import Home from "./Pages/Home"
import Portfolio from "./Pages/Portfolio"
import Language from './Pages/Language'
import Contact from "./Pages/Contact"
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/language" component={Language} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
