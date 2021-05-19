import './App.css';
import Convert from './components/convert';
import Home from './components/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/convert">
          <Convert />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
