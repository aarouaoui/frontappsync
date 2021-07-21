import React , {Component} from "react";
import List from "./List"

import Amplify, {API,graphqlOperation} from 'aws-amplify';
import aws_exports from './aws-exports'; 
import {getAll} from './../graphql/query'

import {OnCreateCard} from './../graphql/subscriptions'
 
Amplify.configure({
    auth: {
        apiKey: aws_exports.apiKey,
        type: 'API_KEY',
    },
    aws_appsync_graphqlEndpoint: aws_exports.ENDPOINT,
    aws_appsync_region: aws_exports.REGION,
    aws_appsync_authenticationType: 'API_KEY',
    aws_appsync_apiKey: aws_exports.apiKey
  });

class AppSync extends Component {

    state = {
        cards : []
    }  

    async componentDidMount(){
        let cards = await  API.graphql(graphqlOperation(getAll));
        console.log(cards.data.getAll);
        this.setState({cards: cards.data.getAll})


        this.subscription = API.graphql(graphqlOperation(OnCreateCard)).subscribe({
            next: (event) => {
                this.setState({
                  cards: [...this.state.cards, event.value.data.newCard]
                });
              }
          });
    }

   
    render() {


        return (
            <List elements={this.state.cards} elementClass = "alert alert-warning"/>
        )
    }
}

export default AppSync;