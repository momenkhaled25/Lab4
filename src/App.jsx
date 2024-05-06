// import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import CustomNavbar from './components/navbar/navbar';
import Home from './components/Home/home';
import Movies from './components/movies/movies';
// import TVShows from './components/TVShows';
// import Profile from './components/Profile';
// import Login from './components/Login';
// import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <CustomNavbar />
    <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
       
        </Routes>
    </Router>
  );
};

export default App;
