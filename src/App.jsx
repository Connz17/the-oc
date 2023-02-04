import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './containers/HomePage/HomePage';
import LandingPage from './containers/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home"
            element={<HomePage/>}>
          </Route>
          <Route path='/'
            element={<LandingPage/>}>
          </Route>
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
