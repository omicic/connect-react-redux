import React from "react";
import {connect} from "react-redux"

function Accounts(props) {
   // console.log(props)
    return (
        <div>
            <h1>Accounts</h1>
             <h2>{props.accounts[0].name}</h2> 
        </div>
    )
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        accounts : state.accounts
    }
}

export default connect(mapStateToProps)(Accounts);