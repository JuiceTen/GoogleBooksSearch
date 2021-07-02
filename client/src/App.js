
import './App.css';
import Home from './pages/home'
import SavedBooks from './pages/saved'
import BookPage from './pages/BookPage';
import Nav from './Component/Nav/index'
import {
BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom'
import BookSearch from './Component/searchList';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path ={['/', '/search']}>
          <Home/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path ='/saved'>
          <SavedBooks />
        </Route>
      </Switch>
      <Switch>
        <Route exact path = '/saved/:id'>
            <BookPage />
        </Route>
      </Switch>
    
    </div>
    </Router>
   
  );
}

export default App;
