import { 
  BrowserRouter as Router, 
  Switch,
  Routes, 
  Route
 } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import globalStyle from "./assets/css/global.css";

function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;
