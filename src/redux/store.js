
import { configureStore } from "@reduxjs/toolkit";
//import {createStore} from "redux";
import accountsReducer from "../components/accounts/accountsReducer";

//const store =  createStore(accountsReducer);
const store =  configureStore({
    reducer: accountsReducer
});


export default store;