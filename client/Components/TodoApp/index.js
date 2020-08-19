import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Image, AsyncStorage } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

export default (props) =>{

    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');

    const [name, setText] = React.useState('');
    const [address, setText] = React.useState('');
    const [allItems, setAllItems] = React.useEffect([{id: 1, name: 'ali', add: 'add1'}]);

    const addItems = async (value) => {
        try {
            // alert('e')
            await AsyncStorage.setItem('myKey1', JSON.stringify())
            // alert(await AsyncStorage.getItem('myKey1'))
            setItems(await AsyncStorage.getItem('myKey1'))
            // alert(items)  
        } catch (e) {
          console.log(e)
        }
      }

  return (
      <View >
            
            <Appbar.Header>
                <Appbar.BackAction onPress={_goBack} />
                <Appbar.Content title="To Do List" subtitle="Subtitle" />
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
                <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            </Appbar.Header>
            
            <TextInput
                label="Add Name"
                value={name}
                onChangeText={text => setText(name)}
            />

            <TextInput
                label="Add Address"
                value={address}
                onChangeText={text => setText(address)}
            />

            <Button  
                mode="contained" 
                onPress={() => addItems()}
            >
                Add Items
            </Button>   
      </View>     
    )

}