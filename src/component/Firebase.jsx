import React , {Component} from "react";
import List from "./List"
import firebase from "firebase/app";
import "firebase/messaging";
class Firebase extends Component {

    state = {
        cards : []
    } 



    render() {
       
        return (
            <List elements={this.state.cards} elementClass = "alert alert-primary" />
        )
    }
}

export default Firebase;