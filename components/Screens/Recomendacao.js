import React, { Component } from 'react';
import { FlatList, AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight, TouchableOpacity, Image } from 'react-native';

export default class Recomendacao extends Component<{}> {
    state = {
        data: []
    }    

    fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6abb71108d7275bf8fea16bd041e6c31&language=pt-BR&page=1')
        const json = await response.json();
        this.setState({ data: json.results});
    };

    render() {
      return (
        <View style={styles.container}>
            <FlatList
                data={this.state.data}
                keyExtractor={(x,i) => i}
                renderItem={({ item }) => 
                    <View style={styles.container}>
                        <TouchableOpacity onPress={this._onPress} onPress={() => this.props.navigation.navigate('Detalhes', {item})} >
                            <Image
                                style = {styles.image}
                                source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                            />
                        </TouchableOpacity>
                        <Text style={styles.titulo}>
                        {`  ${item.title} \n\n`}
                        </Text>

                         
                        {/* <Text style={styles.sinopse}>
                        {` - ${item.overview}\n\n `}
                        </Text> */}
                    </View>
                }
            />
        </View>
      );
    }

    componentWillMount(){
        this.fetchMovies();
    }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'center',
      padding:5,
      backgroundColor: '#f4f4f4',
      marginTop:3
  },
  titulo:
  {
    flex: 1,
    flexDirection: 'row',
    fontWeight: 'bold',
    paddingTop: 10,
    color: "#000000",
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
    height: 550
  }
});