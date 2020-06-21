import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Hello extends Component {
	render() {
		const {containerStyle,textStyle} = helloStyle
		return (
			<View 
				style={containerStyle}>
				<Text style={textStyle}> hello,ReactNative! </Text>
			</View>
		)
	}
}

//样式
const helloStyle = StyleSheet.create({
	containerStyle:{
		flex:1,
		backgroundColor:'orange',
		justifyContent:'center'
	},
	textStyle:{
		fontSize:30,
		textAlign:'center'
	}
})
