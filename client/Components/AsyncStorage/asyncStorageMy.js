import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, AsyncStorage } from 'react-native';

export default (props) =>{

    const [items, setItems] = useState('loading...')
    const storeData = async (value) => {
        try {
            // alert('e')
            await AsyncStorage.setItem('myKey1', 'value of myKey1')
            // alert(await AsyncStorage.getItem('myKey1'))
            setItems(await AsyncStorage.getItem('myKey1'))
            // alert(items)  
        } catch (e) {
          console.log(e)
        }
      }

    const deleteItems = async () => {
        try {
          const value = await AsyncStorage.removeItem('myKey1')
        //   alert(value)
          if(value === null) {
        //    console.log(value)
           setItems('loading...')
          }
        } catch(e) {
          console.log(e)
        }
      }

    useEffect(  ()=>{
      async function getTheItems(){
        setItems(await AsyncStorage.getItem('myKey1'))
       } 
       getTheItems(); 
    },[items]);  
      
    return (
        <View  >
            <Text>
                {items}
            </Text>
            <View style= {{flexDirection: 'row', justifyContent: 'space-evenly', width: 250}}>
                <Button 
                    title= "Store-Data"
                    onPress = {()=>storeData()}
                />
                <Button 
                    title= "Delete-Data"
                    onPress = {deleteItems}
                />
            </View>
        </View>

    )

}