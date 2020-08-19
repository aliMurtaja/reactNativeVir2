import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Contact =(props) => {
  // const {user} = props.route.params
    return( 
      <View style ={ {flex: 1 , justifyContent: "center", alignItems: "center"} }>
        <Text style = {{fontSize : 30}}>hello
         {/* {user? user: ''} */}
          this is Contact Page</Text>

        <View style ={ {flexDirection: 'row', justifyContent: "space-evenly", alignItems: "center", width :300} }>
          <Button style ={{ }} title ="Home" onPress ={ ()=> {props.navigation.navigate('Home')} }/>
          <Button title ="About" onPress ={ ()=> {props.navigation.navigate('About')} }/>
          <Button title ="Back" onPress ={ ()=> {props.navigation.goBack()} }/>
          <Button title ="Go_To_Home" onPress ={ ()=> {props.navigation.popToTop()} }/>

        </View>

      </View>
    )
}


export default Contact;