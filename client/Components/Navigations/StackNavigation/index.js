import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'


// import the All Screen
import Home from './Home';
import Contact from './contact';
import About from './about'

const RoutingMy =() => {

    const Stack = createStackNavigator();

    return( 
      <Stack.Navigator 
        initialRouteName ="Home"
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
            name ="Home" 
            initialParams ={{num: 0}} 
            component= {Home}
            options = { {
              title: "This Is Home Page",
              // headerTitle: (props)=> <Image {...props} style= {{ height: 23, width: 34}} source= {require("https://leafletjs.com/docs/images/logo.png")}
            //  />
            }  }
          />
          
          <Stack.Screen 
            name= "Contact" 
            component= {Contact}
            options = { {
              title: "This Is Contact Page",
            }  }
          />
          <Stack.Screen 
            name = "About" 
            component= {About}
            options = { {
              title: "This Is About Page",
            }  }
          />
      </Stack.Navigator>
    )
}


export default RoutingMy;