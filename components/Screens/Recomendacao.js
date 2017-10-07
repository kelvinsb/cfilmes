import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet } from 'react-native';

export default class Recomendacao extends Component<{}> {
    constructor(){
        super();
        const ms = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            movieDataSource: ms,
        };
    }

    fetchMovies(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=6abb71108d7275bf8fea16bd041e6c31&language=pt-BR&page=1')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    movieDataSource: this.state.movieDataSource.cloneWithRows(response)
                });
            });
    }

    render() {
      return (
        // <Text> Pagina inicial. Recomendar filmes segundo algum criterio </Text>
        <ListView 
            dataSource={this.state.movieDataSource}
            renderRow={this.renderRow.bind(this)}
        />
      );
    }

    componentDidMount(){
        this.fetchMovies();
    }


    renderRow(movie, sectionId, rowId, highlightRow){
        return(
            <View style={styles.row}>
                <Text style={styles.rowText}>{rowId}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  row: {
      flexDirection:'row',
      justifyContent:'center',
      padding:10,
      backgroundColor: '#f4f4f4',
      marginBottom:3
  },
  rowText: {
      flex:1
  }
});