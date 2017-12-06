import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import firebase from 'firebase'

add = "Adicionar a lista"

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
    
    salvarbd(){
        console.log(item)
        firebase.database().ref(caminho+'/'+item.id).set({
            "imageURL" : item["poster_path"],
            "titulo" :item["title"],
            "nota_geral" :item["vote_average"],
            "nota_usuario" : "",
            "comentario_usuario" : "",
        }) 
        add = "Adicionado"
    }

    render() {
        if (this.props.navigation.state.params) {
            item = this.props.navigation.state.params.item
            return (
                <View style={styles.container}>
                    <ScrollView style={styles.containerScroll}>
                        <View style={styles.containerIn}>
                            <TouchableOpacity onPress={()  => this.salvarbd(item)}>
                                <Text style={styles.botaoAdicionar}>
                                    {add}
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
                                {`Nota: ${item.vote_average}`}
                            </Text>

                            <Text style={styles.texto}>
                                {`Titulo Original: ${item.original_title}`}
                            </Text>

                            <Text style={styles.texto}>
                                {`Data de lancamento: ${item.release_date}\n`}
                            </Text>
                                    
                            <Text style={styles.sinopse}>
                                {`Sinopse: ${item.overview}`}
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
      fontSize: 15,
      textAlign: 'left',
      paddingBottom: 35
    },
    texto:
    {
      flex: 1,
      flexDirection: 'row',
      fontSize: 15,
      textAlign: 'left',
    },
    image:
    {
      width: 350,
      height: 600
    }
  });