import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

export default class Busca extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value,
    }
  }

  state = {
    data: []
  }  

  static defaultProps = {
    value : '',
  }

  onChangeText(value){
    this.setState({value: value});
  }

  onSubmitEditing(e){
    this.fetchSearchMovies(e);
  }

  fetchSearchMovies = async (e) => {
    const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=6abb71108d7275bf8fea16bd041e6c31&language=pt-BR&query='+e+'&page=1&include_adult=false')
    const json = await response.json();
    this.setState({ data: json.results});
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Image
          style = {styles.image}
          source = {{uri: 'https://image.tmdb.org/t/p/original/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg'}}
        /> */}
        <TextInput
          placeholder="Buscar..."
          value={this.state.value}
          maxLength={25}
          selectTextOnFocus={true}
          selectionColor='gray'
          autoFocus={true}
          onChangeText = {(value) => this.onChangeText(value)}
          onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
        />
        <Text>{`\n\n`}</Text>

        <FlatList
          data={this.state.data}
          keyExtractor={(x,i) => i}
          renderItem={({ item }) => 
              <View>
                <TouchableOpacity onPress={this._onPress} onPress={() => this.props.navigation.navigate('Detalhes', {item})} >
                  <Image
                  style = {styles.image}
                  source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                  />
                </TouchableOpacity>
                <Text style={styles.titulo}>
                {`${item.title}\n\n`}
                </Text>  

                {/* <Text style={styles.sinopse}>
                {`Nota: ${item.vote_average}\n`}
                </Text>

                <Text style={styles.sinopse}>
                {`Titulo Original: ${item.original_title}\n`}
                </Text>

                <Text style={styles.sinopse}>
                {`Data de lancamento: ${item.release_date}\n`}
                </Text>
                          
                <Text style={styles.sinopse}>
                {`Sinopse: ${item.overview}\n\n\n `}
                </Text> */}
              </View>
          }
        />

      </View>
    );
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
    height: 550
  }
});