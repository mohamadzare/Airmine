import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/home';
import Login from './src/login';
import Splash from './src/Splash';
import results from './src/results';


 

const Start = createStackNavigator({
    Splash: { screen: Splash },
    Home: { screen: Home },
    Login: { screen: Login },
    results: { screen: results },
}, {
    initialRouteName: 'Splash',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}

);

export default createAppContainer(Start);