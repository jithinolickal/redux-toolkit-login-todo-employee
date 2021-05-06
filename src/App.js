import React from "react";
// import "./App.css";
import Todolist from "./components/todo/Todolist";
import Employee from "./components/employee/Employee";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Login from "./components/login/Login";
import { useSelector } from "react-redux";
import { loginSelector } from "./redux-slice/loginSlice";

function App() {
  const userData = useSelector(loginSelector);
  const history = useHistory();

  const handleLoginDeniedMessage = () => {
    // alert("Invalid username or password")
    return <Login />;
  };
  console.log("aa", userData[0].id);
  console.log("aa", userData[0].length);
  console.log("aa", userData[0].length > 0);
  return (
    <div className="App">
      {userData[0].id ? (history.push('/Employee')) :(history.push('/login'))}

      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/ToDo" exact>
          <Todolist />
        </Route>
        <Route path="/Employee">
          <Employee />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
