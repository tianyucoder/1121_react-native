import React, { Component } from 'react'
import { Text, View, Dimensions,StyleSheet,Platform } from 'react-native'

export default class MyDimensions extends Component {
	render() {
		return (
			<View>
				<Text style={Mystyle.textStyle}>当前屏幕的宽是：{Dimensions.get('window').width}</Text>
				<Text style={Mystyle.textStyle}>当前屏幕的高是：{Dimensions.get('window').height}</Text>
				<Text style={Mystyle.textStyle}>当前操作系统是：{Platform.OS}</Text>
			</View>
		)
	}
}

const Mystyle = StyleSheet.create({
	textStyle:{
		fontSize:30
	}
})
