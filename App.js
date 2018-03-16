
import React, { Component } from 'react';
import {Header, Button, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Router from './src/routes/Router';
import HomeScreen from './src/routes/HomeScreen';
import SearchScreen from './src/routes/SearchScreen';


type Props = {};

export default class App extends Component<Props> {

 
  render() {
    return (
      <View style={styles.container}>
        
        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
});
