import React, { Component } from 'react';
import { FlatList, AppRegistry, Text, View, ListView, StyleSheet } from 'react-native';

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
                    <Text>
                        {`${item.title} - ${item.overview}\n`}
                    </Text>
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
      padding:10,
      backgroundColor: '#f4f4f4',
      marginTop:3
  },
});