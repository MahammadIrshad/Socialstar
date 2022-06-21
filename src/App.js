import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Trending from "./Components/Trending";
import Menu from "./Components/Menu";
import Login from "./Components/Login";
import Register from "./Components/Register";


import { auth } from "./firebase";
import Slider from "./slider/Slider";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Menu user={user} />
        <Switch>
          <Route exact path="/">
           <Slider/>
            <Home user={user} url={'https://api.themoviedb.org/3/discover/tv?api_key=7d3a6e1310d289aee91adb4bea239d1b&with_networks=213'}/>
          
          </Route>

          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>

          <Route path="/About">
            <About />
          </Route>
          <Route path="/Trending">
            <Trending />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
