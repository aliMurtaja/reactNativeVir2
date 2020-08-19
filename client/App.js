import 'react-native-gesture-handler';

import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

// // Stack Navigation 
// import RoutingMy from './Components/Navigations/StackNavigation';
// // Bottom Nabi
// import BottomNavigation from './Components/Navigations/BottomTabNavigation';
// // Drawer Navigation
// import DrawerNavigationMy from './Components/Navigations/DrawerNavigation';

// // Async Storage
// import AsyncStorageMy from './Components/AsyncStorage/asyncStorageMy';

// Todo App using react-native-papper
// import TodoApp from './Components/TodoApp';

// To Do App2
import TodoApp2 from './Components/TodoApp2';

export class App extends React.Component{

  render(){
    return( 
      <>
        <NavigationContainer>
          {/* Stack Navigation  */}
          {/* <RoutingMy /> */}
        </NavigationContainer>
        
        <NavigationContainer>
          {/* Bottom Navigation  */}
          {/* <BottomNavigation /> */}
        </NavigationContainer>
        
        <NavigationContainer>
          {/* Drawer Navigation  */}
          {/* <DrawerNavigationMy /> */}
        </NavigationContainer>
      
        {/* <View style ={styles.container}> */}
          {/* <AsyncStorageMy /> */}
        {/* </View> */}

        {/* <View > */}
          {/* <TodoApp /> */}
        {/* </View> */}

        <NavigationContainer>
          <TodoApp2 />
        </NavigationContainer>
      
      </>
    )
  }
}

// for making the style in the react native we use styleSheet module, and give their value as a key-value pair in a form of object

// inheritance of property of the class is no longer supported by react native

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  }
});


export default App;