import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from 'firebase';
import Spinner from './Utils/Spinner';
import TitledInput from './Utils/TitledInput';
import { StackNavigator, } from 'react-navigation';

import TabsHome from './TabsHome';

const App = StackNavigator({
    TabsHome: { screen: TabsHome },
});
export default class Login extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "xxx",
            authDomain: "xxx.firebaseapp.com",
            databaseURL: "https://xxx.firebaseio.com",
            storageBucket: "xxx.appspot.com",
        });
    }
    
    //Estados podem mudar(ou fazer renderizar todo o resto do app) quando seus dados são alterados
    state = { email: 'teste@teste.com.br', password: 'qwe123456', error: '', loading: false };
    quandoBotaoPressionado()
    {
        this.setState({ error: '', loading: true});
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => { this.setState({ error: 'Autenticado.', loading: false }); } )
        .catch(() => {
            this.setState({ error: 'Autenticação falhada.', loading: false });
          });
    }
    renderBotao()
    {
        if (this.state.loading)
        {
            return <Spinner />;
        }
        return <Button onPress={this.quandoBotaoPressionado.bind(this)} title="Autenticar" />;
    }
    render() {
      return (
        <View>
            <TitledInput
                label='Endereço de email'
                placeholder='email@dominio.com.br'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
            />
            <TitledInput
                label='Senha'
                autoCorrect={false}
                placeholder='****'
                secureTextEntry
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
            />
            <Text style={styles.erroTextoStyle}>
                {this.state.error}
            </Text>
            {this.renderBotao()}
        </View>
      );
    }
  }
const styles = 
{
    erroTextoStyle:
    {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    }
};