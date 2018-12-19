import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export class AsmensGebejimai extends Component {
  render() {
    return(
      <View style={{flex:1,backgroundColor:'steelblue'}}>
        <Text style={styles.text1}>Gimtoji kalba: Lietuviu;</Text>
        <Text style={styles.text1}>Uzsienio kalbos: Anglu</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text1: {margin: 2, fontSize: 15, textAlign: 'center', }

})
export default AsmensGebejimai;
