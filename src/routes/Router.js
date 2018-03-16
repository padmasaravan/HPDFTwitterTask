import React from 'react';
import { Router, Scene, Actions, Drawer } from 'react-native-router-flux';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';

import ProfileMenu from '../components/ProfileMenu';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' >
               <Scene key='home' component={HomeScreen} initial hideNavBar />
                   
               <Scene key='search' component={SearchScreen} hideNavBar />
               
            </Scene>
        </Router>
    );
};

export default RouterComponent;

/*
 <Scene key='homeTab'component={HomeTab} hideNavBar />
                </Scene>
*/                