import React from 'react';

import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import Feed from './pages/Feed';

import { Image } from 'react-native';

import logo from './assets/instagram.png';

const Routes = createAppContainer(
    createStackNavigator({
        Feed
    },
    {
        headerLayoutPreset:'center',
        defaultNavigationOptions:{
        headerTitle:<Image source={logo}/>,
        headerStyle:{
            backgroundColor:'#f5f5f5'
        },
    },
    })
);

export default Routes;