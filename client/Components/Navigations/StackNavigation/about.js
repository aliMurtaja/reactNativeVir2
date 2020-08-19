import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const About =(props) => {
  const {user} = props.route.params
    return( 
      <View style ={ { justifyContent: "center", alignItems: "center",flex: 1 } }>
        <Text style = {{fontSize : 30}}>hello {user? user: ''} this is About Page</Text>

        <View style ={ {flexDirection: 'row', justifyContent: "space-evenly", alignItems: "center", width: 300} }>
          <Button style ={{ }} title ="Home" onPress ={ ()=> {props.navigation.navigate('Home')} }/>
          <Button title ="Contact" onPress ={ ()=> {props.navigation.navigate('Contact')} }/>
          <Button title ="Back" onPress ={ ()=> {props.navigation.goBack()} }/>
          <Button title ="Go_To_Home" onPress ={ ()=> {props.navigation.popToTop()} }/>

        </View>

      </View>
    )
}


export default About;