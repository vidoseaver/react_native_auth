import React, {Component} from 'react'
import { View } from "react-native";
import Firebase  from "firebase";

import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

export default class App extends Component{
    UNSAFE_componentWillMount(){
        Firebase.initializeApp(
            {
                apiKey: "AIzaSyCT731JzmKSwCzD13Nu4cmyHGwCrezNBlo",
                authDomain: "auth-e905a.firebaseapp.com",
                databaseURL: "https://auth-e905a.firebaseio.com",
                projectId: "auth-e905a",
                storageBucket: "auth-e905a.appspot.com",
                messagingSenderId: "488639024817"
            }
        )
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}