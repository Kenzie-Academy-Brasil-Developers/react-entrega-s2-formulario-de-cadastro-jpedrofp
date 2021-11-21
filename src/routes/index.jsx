import { Switch, Route, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "../components/pages/Login";
import Form from "../components/pages/Form";
import Home from "../components/pages/Home";
import Users from "../components/pages/Users";
import Profile from "../components/pages/Profile";

const Routes = () => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setAuthentication] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    if (!token) {
      setAuthentication(false);
    }
  }, [history, isAuthenticated]);

  console.log(isAuthenticated);
  
  if (!isAuthenticated) {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Form setUser={setUser} />
          </Route>

          <Route path="/login">
            <Login setAuthentication={setAuthentication} setUser={setUser}/>
          </Route>

          <Route path="/users">
            <Home />
          </Route>

          <Route path="/profile">
            <Home />
          </Route>
        </Switch>
      </>
    );
  }

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <Form setUser={setUser} />
      </Route>

      <Route path="/login">
        <Login setAuthentication={setAuthentication} setUser={setUser}/>
      </Route>

      <Route path="/users">
        <Users />
      </Route>

      <Route path="/profile">
        <Profile user={user}/>
      </Route>
    </Switch>
  );
};

export default Routes;












  /*  api. 
  get("./users", {
    headers: { Authorization: token },
  })
  .then(() => {
    setAuthentication(true);
    history.push("/users");
  })
  .catch(() => {
    setAuthentication(false);
  });
  if (!isAuthenticated) {
    localStorage.removeItem("authToken");
    history.push("/");
  }
   */