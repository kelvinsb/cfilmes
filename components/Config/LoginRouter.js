import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import LoginForm from '../LoginForm';
import Main from '../Main';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 1 }}>
      <Stack key="root">
        <Scene key='login' component={LoginForm} title='Login' initial />
        <Scene key='main' component={Main} title='cFilmes' />
      </Stack>
    </Router>
  );
};

export default RouterComponent;