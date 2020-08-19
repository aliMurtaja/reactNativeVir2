import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer'
// import DrawerColapsIcon from './../../drawerColapsIcon'

// import the All Screen
import Home from './Home';
import Contact from './contact';
import About from './about'

const DrawerNavigationMy =(props) => {

    const Drawer = createDrawerNavigator();
   
    return(
      <> 
        
        {/* <DrawerColapsIcon toggleDrawer = "ali" /> */}
        <Drawer.Navigator 
          initialRouteName ="Home"
          // screenOptions = {{
          //   headerStyle: {
          //     backgroundColor: 'red'
          //   },
          //   headerTintColor: 'green',
          //   headerTitleStyle: {
          //     fontSize: 30
          //   }
          // }}
          
          // screenOptions property is't work in drawer navigation
        >

            <Drawer.Screen 
              name ="Home" 
              initialParams ={{num: 0}} 
              component= {Home}
              options = { {
                title: "This Is Home Page",
                // headerTitle: (props)=> <Image {...props} style= {{ height: 23, width: 34}} source= {require("https://leafletjs.com/docs/images/logo.png")}
              //  />
              }  }
            />
            
            <Drawer.Screen 
              name= "Contact" 
              component= {Contact}
              options = { {
                title: "This Is Contact Page",
              }  }
            />
            <Drawer.Screen 
              name = "About" 
              component= {About}
              options = { {
                title: "This Is About Page",
              }  }
            />
        </Drawer.Navigator>
      </>  
    )
}


export default DrawerNavigationMy;