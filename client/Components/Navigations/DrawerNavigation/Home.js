import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import DrawerColapsIcon from './../../drawerColapsIcon'

const Home =(props) => {

  const [myText, setMytext] = useState('ai');
// this num comes from their initials value of the params
  const {num} = props.route.params;

  // console.log(props.navigation)
    return( 
      <>
        <View style ={{ padding: 33 }}>
          <DrawerColapsIcon toggleDrawer = {props.navigation} /> 
        </View>
        <View style ={ {flex: 1 , justifyContent: "center", alignItems: "center"} }>
          <View >
            <Text style = {{fontSize : 30}}>this is home Page</Text>
          </View>
          <View style ={ {flexDirection: 'row', justifyContent: "space-evenly", alignItems: "center", width: 300} }>
            <Button style ={{ }} title ="About" onPress ={ ()=> {props.navigation.navigate('About', {user: myText})} }/>
            <Button title ="Contact" onPress ={ ()=> {props.navigation.navigate('Contact', {user: myText})} }/>

            {/* <Button title ="Back" onPress ={ ()=> {props.navigation.goBack()} }/> */}
    
          </View>

            {/* diffrece between refresh and navigate on the same screen */}
            <View>
              <Text>
                {num}
              </Text>
            </View>

          <View style ={{padding: 3, margin: 5}}>
            <Button title ="RefreNav" onPress ={ ()=> {props.navigation.navigate('Home', {num: Math.floor(Math.random()*100) })} }/>
            <Button title ="RefrekPus" onPress ={ ()=> {props.navigation.push('Home', {num: Math.floor(Math.random()*100)})} }/>
          </View>

          <TextInput 
            placeholder ="Enter Somethings"
            style ={{height :40, width :240, padding: 10, margin: 20, borderStyle: "solid", borderWidth: 2, backgroundColor: "navy", color: "white"}}
            value = {myText}
            onChangeText = { (text)=>{setMytext(text)} }  
          />

        </View>
      </>
    )
}


export default Home;