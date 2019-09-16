import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:code" component={Details} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
