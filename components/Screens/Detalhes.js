import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableHighlight} from 'react-native';

export default class Adicionado extends Component<{}> {
    onPress(){
        //mecher com banco aqui
    }

    render() {
        if (this.props.navigation.state.params) {
            item = this.props.navigation.state.params.item
            return (
                <ScrollView style={styles.container}>
                    <TouchableHighlight onPress={this.onPress}>
                        <Text>
                            Adicionar a lista{'\n'} {/*botao para add*/}
                        </Text>
                    </TouchableHighlight>
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