import React from "react";
// import "./App.css";
import Todolist from "./components/todo/Todolist";
import Employee from "./components/employee/Employee";
import { Redirect, Route, Switch } from "react-router";
import Login from "./components/login/Login";
import { useSelector } from "react-redux";
import { loginSelector } from "./redux-slice/loginSlice";

function App() {
  const user = useSelector(loginSelector);

  const handleLoginDeniedMessage = () => {
    // alert("Invalid username or password")
    return <Login />;
  };
  console.log("aa", user[0].id);
  console.log("aa", user[0].length);
  console.log("aa", user[0].length > 0);
  return (
    <div className="App">
      {/* {user[0].id ? <Employee /> :handleLoginDeniedMessage()} */}

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
