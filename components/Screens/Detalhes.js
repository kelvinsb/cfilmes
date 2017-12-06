import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity, Button, ToastAndroid} from 'react-native';
import firebase from 'firebase'

export default class Adicionado extends Component<{}> {
    constructor(){
        super()

        this.state = {
            textoADicionar: "Adicionar"
        }
    }

    componentWillMount(){
        var database = firebase.database();
        caminho = firebase.auth().currentUser.uid + "/" + "assistidos" + "/"

    }
    
    salvarbd(item, nomeFilme){
        console.log(item)
        dateAtual = new Date();
        dataAtual = dateAtual.getDate() + "/" + (dateAtual.getMonth()+1) + "/" + dateAtual.getFullYear();
        firebase.database().ref(caminho+'/'+item.id).set({
            "imageURL" : item["poster_path"],
            "titulo" :item["title"],
            "nota_geral" :item["vote_average"],
            "nota_usuario" : "",
            "comentario_usuario" : "",
            "sinopse" :item["overview"],
            "data_adicionado" : dataAtual,
        }) 
        this.atualizarAdicionar()
        ToastAndroid.show(nomeFilme + " adicionado com sucesso", ToastAndroid.SHORT);
    }
    atualizarAdicionar = () => {
        this.setState({textoADicionar: "Adicionado"})
    }
    render() {
        if (this.props.navigation.state.params) {
            item = this.props.navigation.state.params.item
            return (
                <View style={styles.container}>
                    <ScrollView style={styles.containerScroll}>
                        <View style={styles.containerIn}>
                            <TouchableOpacity onPress={()  => this.salvarbd(item, item.title)}>
                            <Text style={styles.botaoAdicionar}>
                                    {this.state.textoADicionar}
                                </Text>
                            </TouchableOpacity>
                            <Image
                                style = {styles.image}
                                source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                            />
                            <Text style={styles.titulo}>
                                {`${item.title}`}
                            </Text>  

                            <Text style={styles.texto}>
                                <Text style={styles.textoNegrito}>Nota: </Text>{`${item.vote_average}`}
                            </Text>

                            <Text style={styles.texto}>
                                <Text style={styles.textoNegrito}>Titulo Original: </Text>{`${item.original_title}`}
                            </Text>

                            <Text style={styles.texto}>
                                <Text style={styles.textoNegrito}>Data de lançamento: </Text>{`${item.release_date}\n`}
                            </Text>
                                    
                            <Text style={styles.sinopse}>
                                <Text style={styles.textoNegrito}>Sinopse :</Text>{`${item.overview}`}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            );
        } else {
            return (
                <Text></Text>
            );
        }
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f4f4f4',
    },
    botaoAdicionar :
    {
        borderWidth: 1,
        borderRadius: 4,
        padding: 5,
        backgroundColor: "#6495ed",
        color: "#FFFFFF",
        borderColor: "#000000",
        margin: 5,
        flex: 1,
        flexDirection: "row",
        textAlign: 'center',
    },
    botaoAdd :
    {
        padding: 5,
        margin: 5,
    },
    containerIn: {
        flex:1,
        flexDirection: "column",
        backgroundColor: '#f4f4f4',
        height: "100%"
    },
    containerScroll: {
        flex:1,
        padding:20,
        backgroundColor: '#f4f4f4',
        marginTop:1,
    },
    titulo:
    {
      flex: 1,
      flexDirection: 'row',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      color: "#000000"
    },
    sinopse:
    {
      flex: 1,
      flexDirection: 'row',
      fontSize: 16,
      textAlign: 'left',
      paddingBottom: 35,
      color: "#000000",
    },
    texto:
    {
      flex: 1,
      flexDirection: 'row',
      fontSize: 16,
      textAlign: 'left',
      color: "#000000",
    },
    textoNegrito:
    {
      fontSize: 16,
      textAlign: 'left',
      fontWeight: 'bold',
      color: "#000000",
    },
    image:
    {
      marginTop: 10,
      width: 350,
      height: 600
    }
  });