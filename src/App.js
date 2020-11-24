import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return(
    <div className="App">
        <Header />
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
