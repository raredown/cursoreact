import React from 'react';
import {Text,View} from 'react-native';
class MyComponent extends React.Component {
state = {
 year: 2016,
 name: 'Nader Dabit',
 colors: ['blue']
 }
  updateYear() {
this.setState({
 year: 2017
 })
 }
 render() {
 return (
 <View>
 <Text
 onPress={() => this.updateYear()}>
 The year is: { this.state.year }
 </Text>
 </View>
 )
 }
}
export default MyComponent
;