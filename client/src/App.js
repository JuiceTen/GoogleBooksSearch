
import './App.css';
import Home from './pages/home'
import SavedBooks from './pages/saved'
import {
BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path ='/'>
          <Home/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path ='/saved'>
          <SavedBooks />
        </Route>
      </Switch>
    </div>
    </Router>
   
  );
}

export default App;
