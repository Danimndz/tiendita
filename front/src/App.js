import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './containers/Main';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Main}></Route>
      </Router>
    </div>
  );
}

export default App;
