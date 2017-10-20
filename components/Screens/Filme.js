import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Filme extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{width: "100%"}}>
          <View style={styles.filmeImagem}>
            <Image
                source={require('../Screens/images/movieExample.jpg')}
                style={styles.imagemFilmeCartaz}
              />
            <Text style={styles.nomeFilme}>
              Planeta dos Macacos: A Guerra
            </Text>
            <View style={styles.preBotao}>
              <View style={styles.botao}>
                <Text style={styles.botaoTxt}>
                  Assistido
                </Text>
              </View>
              <View style={styles.botao}>
                <Text style={styles.botaoTxt}>
                  Favorito
                </Text>
              </View>
            </View>


            
          </View>
          <View style={styles.sinopse}>
            <Text style={styles.sinopseTxt}>
              Humanos e macacos cruzam os caminhos novamente. César e seu grupo são forçados a entrar em uma guerra contra um exército de soldados liderados por um impiedoso coronel. Depois que vários macacos perdem suas vidas no conflito, César luta contra seus instintos e parte em busca de vingança. Dessa jornada, o futuro do planeta poderá estar em jogo.
            </Text>
            <View style={styles.preBotao}>
              <View style={styles.botao}>
                  <Text style={styles.botaoTxt}>
                    Drama
                  </Text>
                </View>
                <View style={styles.botao}>
                  <Text style={styles.botaoTxt}>
                    Ficção Científica
                  </Text>
                </View>
                <View style={styles.botao}>
                  <Text style={styles.botaoTxt}>
                    Guerra
                  </Text>
                </View>
              </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  filmeImagem:
  {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemFilmeCartaz:
  {
    flex: 1,
    flexDirection: 'row',
    resizeMode: 'contain',
    height: 400,
  },
  topBar:
  {
    backgroundColor: "#CCC",
    alignSelf: 'stretch',
  },
  nomeFilme:
  {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  botao:
  {
    backgroundColor: "green",
    borderColor: '#000000',
    borderWidth: 1,
    padding: 6,
    margin: 1,
    borderRadius: 10,
  },
  botaoTxt:
  {
    color: 'white',
    fontSize: 20,
  },
  preBotao:
  {
    flexDirection: 'row',
  },
  sinopse:
  {
    flex: 1,
    margin: 10,
  },
  sinopseTxt:
  {
    color: 'grey',
    fontSize: 20,
  },



  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  txtBig: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    flex: 3,
  },
  verMais: {
    fontSize: 15,
    textAlign: 'right',
    margin: 10,
    flex: 1,
    alignSelf: 'stretch',
  },
  
  imageMoviesHome:
  {
    flex: 1,
    flexDirection: 'row',
    resizeMode: 'contain',
    alignSelf: 'stretch',
  },
  filmeHome:
  {
    flex: 1,
    flexDirection: 'column',
  },
  recomendacoesFilmes:
  {
    flex: 3,
    alignSelf: 'stretch',
  },
  recomendacoes:
  {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#CCF",
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  ultimosFilmes:
  {
    flex: 5,
    backgroundColor: "#CFF",
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
