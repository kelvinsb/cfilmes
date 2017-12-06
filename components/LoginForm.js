import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Button, Input, Spinner } from './common';

import {
  changeLoginEmail,
  changeLoginPassword,
  loginUser,
  registerUser
} from './actions';

class LoginForm extends Component {
  onLoginPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  onRegisterPress() {
    const { email, password } = this.props;
    this.props.registerUser({ email, password });
  }

  renderMessage() {
    if (this.props.error) {
      return (
        <Text style={{ color: 'red', paddingBottom: 15, alignSelf: 'center' }}>
          {this.props.error}
        </Text>
      );
    }
    else if (this.props.success) {
      return (
        <Text style={{ color: 'green' }}>
          {this.props.success}
        </Text>
      );
    }
  }

  renderButtons() {
    if (this.props.loading) {
      return <Spinner />;
    }
    else {
      return (
        <View>
          <Button onPress={this.onLoginPress.bind(this)}>
            Entrar
          </Button>

          <Button onPress={this.onRegisterPress.bind(this)}>
            Cadastrar
          </Button>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={this.container}>
        <Input
          label='Email'
          value={this.props.email}
          onChangeText={(text) => this.props.changeLoginEmail(text)}
        />

        <Input
          label='Senha'
          value={this.props.password}
          onChangeText={(text) => this.props.changeLoginPassword(text)}
          secureTextEntry
        />

        {this.renderMessage()}

        {this.renderButtons()}
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, success, loading } = auth;

  return {
    email,
    password,
    error,
    success,
    loading
  };
};

export default connect(
  mapStateToProps,
  {
    changeLoginEmail,
    changeLoginPassword,
    loginUser,
    registerUser
  }
)(LoginForm);

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingTop: 50,
    backgroundColor: "#000000",
  }
});