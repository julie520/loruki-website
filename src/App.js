import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Docs from "./components/Docs/Docs";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/docs" component={Docs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
