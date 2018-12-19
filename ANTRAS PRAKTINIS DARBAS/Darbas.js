import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export class Darbas extends Component {
  render() {
    return(
      <View style={{flex:1,backgroundColor:'steelblue'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'center'}}>Issilavinimas: Vidurinis</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'center'}}>Darbo patirtis:</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'center'}}>          MTG Group: 2016 balandis - 2018 Vasaris</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'center'}}>          All Media Baltic: 2018 Vasaris - Dabar</Text>
      </View>
    )
  }
}


export default Darbas;
