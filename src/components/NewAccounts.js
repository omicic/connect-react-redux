import React from "react";
import {connect} from "react-redux"
import { DELETE_ACCOUNT_ACTION } from "./accounts/accountsActionCreators";
import {useSelector, useDispatch} from "react-redux"

function NewAccounts(props) {

const accounts = useSelector((state)=>
    state.accounts
);

const dispatch = useDispatch();

   // console.log(props)
const allAccounts = accounts.map(account => {
    return(
        <h2 key={account.id}>{account.name}&nbsp;<button onClick={()=>{
            dispatch(DELETE_ACCOUNT_ACTION(account.id))
        }}>Delete</button></h2>
    )
})

    return (
        <div>
            <h1>Accounts</h1>
             {allAccounts}
        </div>
    )
}



export default NewAccounts;