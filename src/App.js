import './App.css';
import Nav from './Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Rooms from './Components/Rooms/Rooms';
import Singleroom from './Components/Singleroom/SingleRoom';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Error from './Components/Error/Error';




function App() {
  return (
    <div className="App">
    <Router>
    <Nav />
    <Switch>
    <Route exact path ="/" component = {Home} />
    <Route path ="/About" component = {About} />
    <Route exact path ="/Rooms" component = {Rooms} />
    <Route exact path ="/Rooms/:slug" component = {Singleroom} />
    <Route  component = {Error} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
