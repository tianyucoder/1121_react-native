import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Button, StyleSheet } from 'react-native'

export default class MyButton extends Component {
	render() {
		return (
			<View>
				<Button color="red"  title="点我"/>
				<Text>{'\n'}</Text>
				<TouchableOpacity onPress={()=>{alert('你点我了')}} style={btnStyle.wrapStyle}>
					<Text style={btnStyle.textStyle}>
						点我
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const btnStyle=  StyleSheet.create({
	wrapStyle:{
		width:200,
		height:40,
		backgroundColor:'orange',
		borderRadius:10
	},
	textStyle:{
		textAlign:'center',
		lineHeight:40,
		color:'white',
		fontWeight:'bold',
		fontSize:19
	}
})
