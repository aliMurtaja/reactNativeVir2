import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'


// import the All Screen
import AddItemes from './addItemes';
import ShowItemes from './showItemes';

const AllScreens =() => {
    const Stack = createStackNavigator();
    return (
        
        <Stack.Navigator 
            initialRouteName ="AddItemes"
            screenOptions = {{
              headerStyle: {
                backgroundColor: 'red'
              },
              headerTintColor: 'green',
              headerTitleStyle: {
                fontSize: 30
              }
            }}
         
         >

      <Stack.Screen 
            name ="AddItems" 
            // initialParams ={{num: 0}} 
            component= {AddItemes}
            options = { {
              title: "Make A Items",
            }  }
          />  
      
        <Stack.Screen 
                name= "ShowItemes" 
                component= {ShowItemes}
                options = { {
                title: "Your Items",
                }  }
        />


     </Stack.Navigator>       
    
    )
    
}


export default AllScreens;