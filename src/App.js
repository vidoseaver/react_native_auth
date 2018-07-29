import React, {Component} from 'react'
import { View, StyleSheet } from "react-native";
import Firebase  from "firebase";

import { Header, Button, Spinner, CardSection } from "./components/common";
import LoginForm from "./components/LoginForm";

export default class App extends Component{
    state = {
        loggedIn: null
    }

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

        Firebase.auth().onAuthStateChanged((user) =>{
            if (user) {
                this.setState({
                    loggedIn: true
                })
            } else {
                this.setState({
                    loggedIn: false
                })
            }
        })
    }

    renderContent(){   
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => Firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                )
            case false:
                return <LoginForm />
            default:
                return(
                  <View styles={styles.spinnerStyle} >
                        <Spinner size='large' />
                  </View>  
                ) 
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    spinnerStyle: {
        alignItems:'center',
        alignSelf: 'center',
        justifyContent: 'center'
    }
})