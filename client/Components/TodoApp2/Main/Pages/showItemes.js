import React, { Component, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator,Text, FlatList, ScrollView } from 'react-native';
import { FAB, DefaultTheme } from 'react-native-paper';
import ActionSheet from 'react-native-actionsheet';
import { connect } from 'react-redux';

import { fetchItemesAction } from './../Store/Actions/TodoAction';
import  ListItem  from './../../Components/listings';
// import { deleteTweetAction } from '../actions/auth.actions';

import { whiteColor, blueColor } from './../../AllConfigs/colors';


const ShowItems = (props) =>{
    
    const { container, fabContainer, fabStyle, loadingContainer } = styles;
    const { loading, fetchItemesAction, tweets } = props;
    
    useEffect( ()=>{
        const getItems = async ()=>{
            await fetchItemesAction()
        }
        getItems();
        // console.log('useEff')
    },[]);

    const tweetActions = id => {
		this.id = id;
		this.ActionSheet.show();
	};

    const returnComponent =loading ? (
        <View style={loadingContainer}>
            <ActivityIndicator size="large" />
        </View>
    ): 

    <View style={container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={tweets}
                renderItem={({ item }) => <ListItem tweetActions={tweetActions} data={item} />}
                keyExtractor={(item, index) => `${index}`}
            />

            <View style={{ height: 70 }} />
        </ScrollView>
    </View>   

    return returnComponent;
    
    
    // return (
    //     <View>
    //         <Text>show items</Text>
    //     </View>
    // )
    
}

const fabTheme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, accent: blueColor } };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: whiteColor
	},
	fabContainer: {
		alignItems: 'center'
	},
	fabStyle: {
		width: 130,
		position: 'absolute',
		bottom: 15
	},
	text: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	loadingContainer: {
		justifyContent: 'center',
		flex: 1,
		backgroundColor: whiteColor
	}
});


function mapStateToProps(state){
    return {
        loading: state.auth.loading,
        tweets: state.auth.tweets
    }
}

export default connect(mapStateToProps, { fetchItemesAction  })(ShowItems);