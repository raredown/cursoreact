import React from 'react';
import {Text,View} from 'react-native';
class MyComponent extends React.Component {

   constructor(){
 super()
 this.state = {
 year: 2016
 }
 }
  updateYear() {
 this.state.year = 2017
 }
update() {
 this.forceUpdate()
 }
 render() {
 return (
 <View>
 <Text onPress={ () => this.updateYear() }>
 The year is: { this.state.year }
 </Text>
 <Text
 onPress={ () => this.update() }>Force Update
 </Text>
 </View>
 )
 }
}
export default MyComponent
;