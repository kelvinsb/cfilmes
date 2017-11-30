import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image, ListView } from 'react-native';
import firebase from 'firebase'
import db from '../Main'

export default class Adicionado extends Component<{}> {
  state = {
    data: []
  }

  lerbd = async () => {
    var database = firebase.database();
    email = firebase.auth().currentUser.email
    emailsplit = email.split(".")
    caminho = ""
    for (i=0; i<emailsplit.length; i++){
      caminho += emailsplit[i]
    }

    // this.dataRef = firebase.database().ref(caminho)
    await firebase.database().ref(caminho).child('346364').on("value", snapshot => {
      this.setState({data: snapshot.val()})
      // snapshot.forEach((idfilme) => {
      //   idfilme.forEach((child) =>{
      //     this.state.data.push({
      //       nota_usuario: child.val(),
      //       key: child.key
      //     })
      //   })
        
      // });
    })
  }

  // onpress(){
  //   console.log(this.state.data)
  // }
  // exibir(){
  //   <View style={styles.container}>
  //       {console.log("geral: ", this.state.data)}
  //       <Image
  //           style = {styles.image}
  //           source={{uri: `https://image.tmdb.org/t/p/w500${this.state.data.imageURL}`}}
  //       />
  //       <Text style={styles.titulo}>
  //         {`${this.state.data.comentario_usuario}`}
  //       </Text>
  //       <Text style={styles.titulo}>
  //         {`${this.state.data.nota_geral}`}
  //       </Text>
  //       <Text style={styles.titulo}>
  //         {`${this.state.data.titulo}`}
  //       </Text>
  //   </View>
  // }

  render() {
    return (
      <View style={styles.container}>
        {console.log("geral: ", this.state.data)}
        <Image
            style = {styles.image}
            source={{uri: `https://image.tmdb.org/t/p/w500${this.state.data.imageURL}`}}
        />
        <Text style={styles.titulo}>
          {`${this.state.data.comentario_usuario}`}
        </Text>
        <Text style={styles.titulo}>
          {`${this.state.data.nota_geral}`}
        </Text>
        <Text style={styles.titulo}>
          {`${this.state.data.titulo}`}
        </Text>
      </View>

      // <View>
      //   <ListView
      //     dataSource={this.state.dataSource}
      //     renderRow={(rowData) => 
      //       <Text>{rowData.nota_usuario}</Text>
      //     }
      //   />
      //   {this.onpress2}
      // </View>

      // <View style={styles.container}>
      //   {this.exibir()}
      // </View>

      // <View>
      //   {this.onpress()}
      //   <TouchableOpacity onPress={()  => this.onpress()}>
      //     <Text> Lista de filmes adicionados </Text>
      //   </TouchableOpacity>
      // </View>
    );
  }

  componentWillMount = async () => {
    this.lerbd()
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