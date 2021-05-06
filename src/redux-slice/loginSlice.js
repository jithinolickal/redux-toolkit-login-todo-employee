import { createSlice } from "@reduxjs/toolkit";
import LoginData from "../components/login/LoginData/LoginData.json";

const initialState = {
  userData: [{}],
  invalidLogin: false,
};

const loginSlice = createSlice({
  name: "login slice",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const loggedInUser = {};
      LoginData.map((item) => {
        // console.log("item", item);
        // console.log("item", payload);
        if (
          item.email === payload.email &&
          item.password === payload.password
        ) {
        //   console.log("item", item);
          loggedInUser.id = item.id;
          loggedInUser.name = item.name;
          loggedInUser.email = payload.email;
          loggedInUser.password = payload.password;
          loggedInUser.isLoggedIn = true;
        }
      });
    //   console.log("payload", loggedInUser);
      // return loggedInUser
      state.userData[0] = loggedInUser;

      //Failed Login
      if (!loggedInUser.id) {
        state.invalidLogin = true;
      } else {
        state.invalidLogin = false;
      }
    },

    signUp: (state, {payload}) => {
        console.log("Before",LoginData);
        const loggedInUser = {};
        loggedInUser.id = Date.now();
        loggedInUser.name = payload.name;
        loggedInUser.email = payload.email;
        loggedInUser.password = payload.password;
        loggedInUser.isLoggedIn = false;
        LoginData.push(loggedInUser);
        alert("Registered Successfully. Redirecting to LogIn page!")

        console.log("After",LoginData);

        //Saving to local storage - Optional
        window.localStorage.setItem( 
            "LOCALSTORAGE_KEY", 
            JSON.stringify(LoginData)
        ) 

    },
  },
});

export const { login, signUp } = loginSlice.actions;

export const loginSelector = (state) => state.login.userData;
export const invalidLoginSelector = (state) => state.login.invalidLogin;

export default loginSlice.reducer;
