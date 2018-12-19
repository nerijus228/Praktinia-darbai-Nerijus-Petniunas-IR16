import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Pradinis from './Pradinis';
import Darbas from './Darbas';
import AsmensGebejimai from './AsmensGebejimai';

const AppNavigator = StackNavigator({
  PradinisScreen: { screen: Pradinis},
  DarbasScreen: { screen: Darbas },
  AsmensGebejimaiScreen: { screen: AsmensGebejimai}
});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
