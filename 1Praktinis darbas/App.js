import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    color1: 'blue',
    color2: 'blue',
    color3: 'blue',
    color4: 'blue'
  }
}
  onPress1 = () => {
    if(this.state.color1 == 'blue'){
      this.setState({
        color1: 'green'
      })
    }
    else{
      this.setState({
        color1: "blue"
      })
    }
  }
  
  onPress2 = () => {
    if(this.state.color2 == 'blue'){
      this.setState({
        color2: 'green'
      })
    }
    else{
      this.setState({
        color2: "blue"
      })
    }
  }
  onPress3 = () => {
    if(this.state.color3 == 'blue'){
      this.setState({
        color3: 'green'
      })
    }
    else{
      this.setState({
        color3: "blue"
      })
    }
  }
  onPress4 = () => {
    if(this.state.color4 == 'blue'){
      this.setState({
        color4: 'green'
      })
    }
    else{
      this.setState({
        color4: "blue"
      })
    }
  }
render() {
  return (

<View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'stretch', backgroundColor: '#F5FCFF'}}>
<View style={{flex:1, justifyContent: 'space-around', backgroundColor:"yellow"}}>
<Button
 onPress={this.onPress1}
title="Button"
color="#841584"
accessibilityLabel="Learn more about this blue button"
/>
<Button
 onPress={this.onPress2}
title="Button2"
color="#841584"
accessibilityLabel="Learn more about blue button"
/>
<Button
 onPress={this.onPress3}
title="Button3"
color="#841584"
accessibilityLabel="Learn more about this blue button"
/>
<Button
 onPress={this.onPress4}
title="Button4"
color="#841584"
accessibilityLabel="Learn more about this blue button"
/>
</View>
 <View style={{flex:1, justifyContent: 'space-around', alignItems:'center', backgroundColor:"black"}}>
      <View style={styles.boxas} backgroundColor={this.state.color1} />
      <View style={styles.boxas} backgroundColor={this.state.color2} />
      <View style={styles.boxas} backgroundColor={this.state.color3} />
      <View style={styles.boxas} backgroundColor = {this.state.color4}  />
</View>
</View>   
  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  flexDirection: 'column',

  justifyContent: 'center',
  alignItems: "flex-start"
},
boxas: {
  width: 50,
  height: 50,
  backgroundColor: 'blue'
},
button: {
  alignItems: 'center',
  backgroundColor: '#DDDDDD',
  padding: 10
},
countContainer: {
  alignItems: 'center',
  padding: 10
},
countText: {
  color: '#FF00FF'
}
});