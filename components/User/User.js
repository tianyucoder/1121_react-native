import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class User extends Component {
	render() {
		return (
			<View style={{flex:1,backgroundColor:'gray'}}>
				<Text style={{fontSize:30}}> User </Text>
			</View>
		)
	}
}
