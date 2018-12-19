import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

export class Pradinis extends Component {
  render() {
    return(
      <View style={{flex:1,backgroundColor:'steelblue'}}>


        <Button  onPress={() => this.props.navigation.navigate('DarbasScreen')}
        title="animacija"/>
        <Text style={styles.text1}></Text>
        <Button  onPress={() => this.props.navigation.navigate('AsmensGebejimaiScreen')}
        title="Asmenine Informacija is json"/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text1: {margin: 2, fontSize: 15, textAlign: 'center'},
  button1:{
    backgroundColor: '#ffe6e6'

  }

})
export default Pradinis;
