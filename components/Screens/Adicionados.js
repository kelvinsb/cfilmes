import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import firebase from 'firebase'
import db from '../Main'

export default class Adicionado extends Component<{}> {
  state = {
    data: []
  }

  componentWillMount(){
    var database = firebase.database();
    email = firebase.auth().currentUser.email
    emailsplit = email.split(".")
    caminho = ""
    for (i=0; i<emailsplit.length; i++){
      caminho += emailsplit[i]
    }

    firebase.database().ref(caminho).on("value", snapshot => {
      this.setState({data: snapshot.val()})
    })

  }

  onpress(){
    console.log(this.state.data)
  }

  render() {
    return (
      // <View style={styles.container}>
      //   <FlatList
      //       data={this.state.data}
      //       keyExtractor={(x,i) => i}
      //       renderItem={({ item }) => 
      //           <View style={styles.container}>
      //               <Image
      //                   style = {styles.image}
      //                   source={{uri: `https://image.tmdb.org/t/p/w500${item.imageURL}`}}
      //               />
      //               <Text style={styles.titulo}>
      //                 {`${item.titulo}`}
      //               </Text>
      //               <Text style={styles.titulo}>
      //                 {`${item.nota_usuario}`}
      //               </Text>
      //               <Text style={styles.titulo}>
      //                 {`${item.comentario_usuario}`}
      //               </Text>
      //           </View>
      //       }
      //   />
      // </View>

      <View>
        <TouchableOpacity onPress={()  => this.onpress()}>
          <Text> Lista de filmes adicionados </Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'center',
      padding:10,
      backgroundColor: '#f4f4f4',
      marginTop:3
  },
  titulo:
  {
    flex: 1,
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  image:
  {
    width: 200,
    height: 200
  }
});