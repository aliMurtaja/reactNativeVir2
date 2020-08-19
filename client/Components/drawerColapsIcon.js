import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default (props) =>{
    const {toggleDrawer} = props
    console.log(props)
    return (
        <TouchableOpacity onPress ={() => toggleDrawer.toggleDrawer()}>
            <Text >
                <Ionicons 
                    name= "md-menu"
                    size ={32}
                    color ="green"
                />
            </Text>
        </TouchableOpacity>
    )
}