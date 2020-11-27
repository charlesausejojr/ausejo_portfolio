import './App.css';
import Body from './pages/Body';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Footer from './components/Footer'
function App() {
  return (
    <Router>
    <div className="app">
      <Header/>
      

      <Switch>
            <Route path="/" exact component={Body}/> 
            <Route path="/projects" component={Projects}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
