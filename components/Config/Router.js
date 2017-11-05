import React from 'react'
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Recomendacao from '../Screens/Recomendacao';
import Adicionados from '../Screens/Adicionados';
import Busca from '../Screens/Busca';
import Filme from '../Screens/Filme';
import Detalhes from '../Screens/Detalhes';

export const Tabs = TabNavigator({
    Recomendacao: {
        navigationOptions: {
            tabBarLabel:'Home'
        },
        screen: Recomendacao
    },
    Busca: {
        screen: Busca,
        navigationOptions: {
            tabBarLabel : 'Buscar'
        }
    },
    Detalhes: {
        navigationOptions: {
            tabBarLabel : 'Detalhes',
        },
        screen: Detalhes
    },
    Adicionados: {
        screen: Adicionados,
        navigationOptions: {
            tabBarLabel : 'Lista'
        },
    },
    // Filme: {
    //     screen: Filme,
    //     navigationOptions: {
    //         tabBarLabel : 'Teste Filme'
    //     }
    // },
});