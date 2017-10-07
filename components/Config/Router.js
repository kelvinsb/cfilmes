import React from 'react'
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Recomendacao from '../Screens/Recomendacao';
import Adicionados from '../Screens/Adicionados';
import Busca from '../Screens/Busca';

export const Tabs = TabNavigator({
    Recomendacao: {
        screen: Recomendacao,
        navigationOptions: {
            tabBarLabel:'Home'
        },
    },
    Adicionados: {
        screen: Adicionados,
        navigationOptions: {
            tabBarLabel : 'Lista'
        },
    },
    Busca: {
        screen: Busca,
        navigationOptions: {
            tabBarLabel : 'Buscar'
        }
    },
});