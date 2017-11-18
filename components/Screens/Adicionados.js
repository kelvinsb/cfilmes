import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase'

export default class Adicionado extends Component<{}> {
  componentWillMount(){
    var database = firebase.database();
    email = firebase.auth().currentUser.email
    emailsplit = email.split(".")
    caminho = ""
    for (i=0; i<emailsplit.length; i++){
      caminho += emailsplit[i]
    }
  }

  render() {
    return (
      <View>
        <Text> Lista de filmes adicionados </Text>
      </View>
    );
  }
}