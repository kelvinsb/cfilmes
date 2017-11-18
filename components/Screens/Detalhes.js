import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
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
    
    salvarbd(){
        console.log(item)
        firebase.database().ref(caminho+'/'+item.id).set({
            "imageURL" : item["poster_path"],
            "nota_usuario" : "",
            "comentario_usuario" : "",
        }) 
    }

    render() {
        if (this.props.navigation.state.params) {
            item = this.props.navigation.state.params.item
            return (
                <ScrollView style={styles.container}>
                    <TouchableOpacity onPress={()  => this.salvarbd(item)}>
                        <Text>
                            Adicionar a lista{'\n'} {/*botao para add*/}
                        </Text>
                    </TouchableOpacity>
                    <Image
                        style = {styles.image}
                        source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                    />
                    <Text style={styles.titulo}>
                         {`${item.title}`}
                    </Text>  

                    <Text style={styles.sinopse}>
                         {`Nota: ${item.vote_average}`}
                    </Text>

                    <Text style={styles.sinopse}>
                        {`Titulo Original: ${item.original_title}`}
                    </Text>

                    <Text style={styles.sinopse}>
                        {`Data de lancamento: ${item.release_date}\n`}
                    </Text>
                            
                    <Text style={styles.sinopse}>
                        {`Sinopse: ${item.overview}`}
                    </Text>
                </ScrollView>
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
        padding:20,
        backgroundColor: '#f4f4f4',
        marginTop:1
    },
    titulo:
    {
      flex: 1,
      flexDirection: 'row',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
    },
    sinopse:
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