import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Button,
  Alert, StyleSheet,Image,
  } from 'react-native';

const data = require('./data/data.json');

export default class AsmensGebejimai extends Component {

  json_function = () => {
// pull request is json atsidaryk /data/data.sjon
    var json_fragment = data.asmduomenys.Vardas;
     Alert.alert(
       //button name
      'Asmenine informacija',
      json_fragment
    );
  }
  render() {
    return (
      <View>
          <Image
          style={{
            width: 200,
            height: 300, marginTop:24
          }}
          source={require('./ft.png')} />
         <Button
          title="asmenine informacija"
          onPress={this.json_function}
        />

      </View>
    );
  }
}
