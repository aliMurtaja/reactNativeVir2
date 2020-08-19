import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Image, AsyncStorage, ScrollView, TouchableWithoutFeedback } from 'react-native';
import {blueColor, whiteColor } from './../../AllConfigs/colors';
import { connect } from 'react-redux';
import {tweetChange, createTweetAction} from './../Store/Actions/TodoAction';
import { Button, DefaultTheme } from 'react-native-paper';

const AddItems = (props) =>{
    let myInput = null;
    const { container, inputContainer, buttonContainer, button } = styles;
    
    useEffect(()=>{
        
    })

    const addTweet = async () => {
		if (props.tweet !== '') {
			await props.createTweetAction({ user: 'user', tweet: props.tweet });
			props.navigation.navigate('ShowItemes');
		}
	};
   
    return (
        <ScrollView 
            style={{ backgroundColor: whiteColor }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
        >

            <View>
                
            <TouchableWithoutFeedback 
                onPress={() => myInput.focus()}
            >
						<View style={inputContainer}>
							<TextInput
								onChangeText={value =>{
                                    props.tweetChange({ value, prop: 'tweet' })
                                } }
								value={props.tweet}
								autoFocus
								placeholderTextColor="#888"
								placeholder="What's happening?"
								underlineColorAndroid="transparent"
								multiline
								ref={input =>{
                                    myInput = input
                                } }
							/>
						</View>
				</TouchableWithoutFeedback>    
                
                <View style={buttonContainer}>
                    <Button
                        color={blueColor}
                        theme={{ ...DefaultTheme, roundness: 100 }}
                        style={button}
                        onPress={() => addTweet()}
                        raised
                    >
                        add
                    </Button>
				</View>

            </View>  

        </ScrollView>
    )
    
}

const styles = StyleSheet.create({
	button: {
		width: 100
	},
	buttonContainer: {
		alignItems: 'center',
		paddingTop: 15
	},
	// textInput: {},
	container: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: whiteColor
	},
	inputContainer: {
		minHeight: 150,
		backgroundColor: '#eee',
		borderRadius: 10,
		padding: 10
	},
	text: {
		fontSize: 22,
		fontWeight: 'bold'
	}
});

const mapStateToProps = state =>{
    // console.log(state.auth.tweet)
    return {
        tweet: state.auth.tweet
    }
}

export default connect(mapStateToProps, {tweetChange, createTweetAction} )(AddItems);