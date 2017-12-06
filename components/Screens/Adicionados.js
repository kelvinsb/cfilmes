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
        <View style={styles.contItem}>
          {console.log("geral: ", this.state.data)}
          <View style={styles.vImage}>
            <Image
                style = {styles.image}
                source={{uri: `https://image.tmdb.org/t/p/w500${this.state.data.imageURL}`}}
            />
          </View>
          <View style={styles.filmeInfos}>
            <Text style={styles.titulo}>
              {`${this.state.data.nota_geral}`}
            </Text>
            <Text style={styles.titulo}>
              {`${this.state.data.titulo}`}
            </Text>
            <Text style={styles.coment}>
              {`${this.state.data.comentario_usuario}`}
            </Text>
          </View>
        </View>
        <View style={styles.contItem}>
          {console.log("geral: ", this.state.data)}
          <View style={styles.vImage}>
            <Image
                style = {styles.image}
                source={{uri: `https://image.tmdb.org/t/p/w500/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg`}}
            />
          </View>
          <View style={styles.filmeInfos}>
            <Text style={styles.titulo}>
              7.5
            </Text>
            <Text style={styles.titulo}>
              Thor: Ragnarok
            </Text>
            <Text style={styles.coment}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </View>
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
      flexDirection: "column",
      justifyContent:'center',
      height: 300,
      padding:10,
      backgroundColor: '#f4f4f4',
  },
  contItem: {
    flex:1,
    flexDirection: "row",
    padding:10,
    backgroundColor: '#f4f4f4',
    marginTop:3
},
  titulo:
  {
    flex: 1,
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent:'center',
  },
  coment:
  {
    flex: 7,
    flexDirection: 'row',
    fontSize: 13,
  },
  image:
  {
   flex: 1,
    flexDirection: "row",
    resizeMode: 'contain'
  },
  vImage: {
    flex: 1,
    flexDirection: "row",
  },
  filmeInfos: {
    flex: 1,
    flexDirection: "column"
  },
});