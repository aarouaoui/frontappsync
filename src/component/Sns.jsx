import React , {Component} from "react";
import List from "./List"
class Sns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards : [{content:"under constraction"}]
        }  
    }

    render() {
        return (
            <List elements={this.state.cards} elementClass = "alert alert-warning"/>
        )
    }
}
export default Sns;