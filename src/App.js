import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import About from "./Components/About"
import Project from "./Components/Project"
import Portfolio from "./Components/Portfolio"
import Contact from "./Components/Contact"


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
