import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';


// this is function component example
const App = () => {
  
  var [AppVal1, setAppVal1] = useState(100)
  // alert(AppVal1)
  // its weired, bcs its work like setInterVal bcs in function components, whenever is called, called all function and its true
  setTimeout(()=>{ 
    setAppVal1(AppVal1-1);
   }, 1000);
  //  alert(AppVal1)
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>this is text from App(fun)!</Text>
      <Text style = {styles.text}>this is text from App(fun)!sds</Text>
      
      <Class1  AppVal1 ={AppVal1}/>
    </View>
  );
}

// class componet example 
export class Class1 extends React.Component{

  render(){
    return( 
      <View >
        <Text style = {styles.text}>this is text from class1(class)!</Text>
        <Text style = {styles.text}>this is text from class1(class)!</Text>
        <Text style = {styles.text}>{this.props.AppVal1}</Text>
        <App2 ><Text style = {styles.text}>this is children!</Text></App2 >
      </View>
    )
  }
}

// this is function component example
const App2 = (props) => {

  return (
    <View >
      <Text style = {styles.text}>this is text from App2(fun)!</Text>
      <Text style = {styles.text}>this is text from App2(fun)!sds</Text>
      <Text style = {styles.text}>{props.children}</Text>
      {/* <Class1  AppVal1 ={AppVal1}/> */}
    </View>
  );
}

// for making the style in the react native we use styleSheet module, and give their value as a key-value pair in a form of object

// inheritance of property of the class is no longer supported by react native

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // fontSize: 44   
  },
  text: {
    fontSize: 22,
    color: "red" 
  }

});


export default App;