import "./App.css";
import { Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import Header from "./components/Header";
function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", position: "sticky" }}
    >
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
