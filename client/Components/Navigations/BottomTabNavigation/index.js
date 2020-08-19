import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


// import the All Screen
import Home from './Home';
import Contact from './contact';
import About from './about'

const BottomNavigation =() => {

    const Bottom = createBottomTabNavigator();

    return( 
      <Bottom.Navigator 
        initialRouteName ="Home"

        screenOptions ={ props => ({
          headerStyle: {
            backgroundColor: 'red'
          },
          headerTintColor: 'green',
          headerTitleStyle: {
            fontSize: 30
          },
          // tabBarIcones: ({focused, color, size}) =>({
            
          // } )  //PANDING
        }) }

        // screenOptions = {{
          
        // }}
      >

          <Bottom.Screen 
            name ="Home" 
            initialParams ={{num: 0}} 
            component= {Home}
            options = { {
              title: "This Is Home Page",
              // headerTitle: (props)=> <Image {...props} style= {{ height: 23, width: 34}} source= {require("https://leafletjs.com/docs/images/logo.png")}
            //  />
            }  }
          />
          
          <Bottom.Screen 
            name= "Contact" 
            component= {Contact}
            options = { {
              title: "This Is Contact Page",
            }  }
          />
          <Bottom.Screen 
            name = "About" 
            component= {About}
            options = { {
              title: "This Is About Page",
            }  }
          />
      </Bottom.Navigator>
    )
}


export default BottomNavigation;