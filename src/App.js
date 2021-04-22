
import Header from "./Components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import {  Switch, Route } from "react-router-dom";
import Warm from "./Components/Warm/Warm";
import Home from "./Components/Home";

function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        
        <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/warm" component={Warm} />
        </Switch>

        </main>
      </div>
    </Router>
  );
}

export default App;
