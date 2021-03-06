import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Detailed from "./components/pages/Detailed";
import Arts from "./components/pages/categoryPages/Arts";
import Animals from "./components/pages/categoryPages/Animals";
import Youth from "./components/pages/categoryPages/Youth";
import Community from "./components/pages/categoryPages/Community";
import Disaster from "./components/pages/categoryPages/Disaster";
import Education from "./components/pages/categoryPages/Education";
import Environment from "./components/pages/categoryPages/Environment";
import Religious from "./components/pages/categoryPages/Religious";
import Health from "./components/pages/categoryPages/Health";
import Seniors from "./components/pages/categoryPages/Seniors";
import Sports from "./components/pages/categoryPages/Sports";
import Findpage from "./components/pages/Findpage";
import Profile from "./components/pages/Profile";
import Postpage from "./components/pages/Postpage";
import UserProvider from "./provider/UserProvider";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [eachPostId, setEachPostId] = useState("");
  const [user, setUser] = useState(null);
  const [applyUser, setApplyUser] = useState();
  const [postList, setpostList] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    token ? setLoggedIn(true) : setLoggedIn(false);
  }, []);
  return (
    <>
      <Router>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Home
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                user={user}
              />
            )}
          />
          <Route
            path="/register"
            component={() => (
              <Register
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                setUser={setUser}
                user={user}
              />
            )}
          />
          <Route
            path="/login"
            component={() => (
              <Login
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                setUser={setUser}
                user={user}
              />
            )}
          />
          <Route
            path="/detailed/:id"
            component={() => (
              <Detailed
                eachPostId={eachPostId}
                user={user}
                applyUser={applyUser}
                setApplyUser={setApplyUser}
                postList={postList}
              />
            )}
          />
          <Route path="/detailed" component={Detailed} />
          <Route
            path="/arts"
            component={Arts}
            component={() => (
              <Arts
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                user={user}
              />
            )}
          />
          <Route
            path="/animals"
            component={() => (
              <Animals
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                user={user}
              />
            )}
          />
          <Route
            path="/youth"
            component={Youth}
            component={() => (
              <Youth
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                user={user}
              />
            )}
          />
          <Route
            path="/community"
            component={Community}
            component={() => (
              <Community
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                user={user}
              />
            )}
          />
          <Route
            path="/disaster"
            component={Disaster}
            component={() => (
              <Disaster
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                user={user}
              />
            )}
          />
          <Route
            path="/education"
            component={Education}
            component={() => (
              <Education
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                user={user}
              />
            )}
          />
          <Route
            path="/environment"
            component={Environment}
            component={() => (
              <Environment
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                user={user}
              />
            )}
          />
          <Route
            path="/religious"
            component={Religious}
            component={() => (
              <Religious
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                user={user}
              />
            )}
          />
          <Route
            path="/health"
            component={Health}
            component={() => (
              <Health
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                user={user}
              />
            )}
          />
          <Route
            path="/seniors"
            component={Seniors}
            component={() => (
              <Seniors
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                user={user}
              />
            )}
          />
          <Route
            path="/sports"
            component={Sports}
            component={() => (
              <Sports
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                user={user}
              />
            )}
          />
          <Route
            path="/profile"
            component={() => (
              <Profile
                user={user}
                eachPostId={eachPostId}
                setEachPostId={setEachPostId}
                applyUser={applyUser}
                setApplyUser={setApplyUser}
              />
            )}
          />
          <Route path="/findpage" component={Findpage} />
          <Route path="/postpage" component={() => <Postpage user={user} />} />
        </Switch>
      </Router>
      <UserProvider></UserProvider>
    </>
  );
}

export default App;
