import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image, ListView, Button, ToastAndroid} from 'react-native';
import firebase from 'firebase'
import db from '../Main'

export default class Adicionado extends Component<{}> {
  state = {
    data: []
  }
  constructor(props){
    super(props);

    var database = firebase.database();
    caminho = firebase.auth().currentUser.uid + "/" + "assistidos" + "/"

    this.itemAtual = database.ref(caminho);
    this.state = { filmes: [], modalVisible: false,};
  }
  verificarFilmesAdicionados(itemAtual) {
    itemAtual.on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        items.push({
          id: child.key,
          comentario_usuario: child.val().comentario_usuario,
          imageUrl: child.val().imageURL,
          nota_geral: child.val().nota_geral,
          nota_usuario: child.val().nota_usuario,
          sinopse: child.val().sinopse,
          data_adicionado: "Adicionado em: " + child.val().data_adicionado,
          titulo: child.val().titulo,
        });
      });
  
      this.setState({filmes: items });
    });
  }
  removerFilme(oCaminho, nomeFilme){
    aDeletar = caminho + oCaminho
    firebase.database().ref(aDeletar).remove()
    ToastAndroid.show(nomeFilme + " removido com sucesso", ToastAndroid.SHORT);
  }

  keyExtractor = (item) => item.id;
  renderItem = ({item}) =>
  <View style={styles.contItem}>
    <View style={styles.vImage}>
      <View style={styles.imageT}>
        <Button
            title="Remover"
            onPress = {() => this.removerFilme(item.id, item.titulo)}
          />
        <Image
            style = {styles.image}
            source={{uri: `https://image.tmdb.org/t/p/w500${item.imageUrl}`}}
        />
      </View>
    </View>
    <View style={styles.filmeInfos}>
      <Text style={styles.titulo}>
          {`${item.titulo}`}
        </Text>
      <Text style={styles.texto}>
        {`${item.nota_geral}`}
      </Text>
      <Text style={styles.texto}>
        {`${item.data_adicionado}`}
      </Text>
      <Text style={styles.coment}>
        {`${item.sinopse}`}
      </Text>
    </View>
  </View>;

  componentDidMount() {
    this.verificarFilmesAdicionados(this.itemAtual);
  }

  render() {
    return (
      <View style={styles.container}>
          <FlatList
            data = {this.state.filmes}
            keyExtractor = {this.keyExtractor}
            renderItem = {this.renderItem}
            style={{marginTop: 20}}
            />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listcontainer: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
      flex:1,
      flexDirection: "column",
      justifyContent:'center',
      height: 300,
      padding:10,
      backgroundColor: '#f4f4f4',
  },
  contHeader: {
    flex:1,
    flexDirection: "column",
    justifyContent:'center',
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
    textAlign: 'center',
  },
  texto:
  {
    flex: 1,
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent:'center',
    textAlign: 'center',
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
    marginRight: 5,
  },
  imageT: {
    flex: 1,
    flexDirection: "column",
  },
  filmeInfos: {
    flex: 1,
    flexDirection: "column"
  },
});