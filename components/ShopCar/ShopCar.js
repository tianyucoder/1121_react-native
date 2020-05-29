import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Shopcar extends Component {
	render() {
		return (
			<View style={{flex:1,backgroundColor:'cyan'}}>
				<Text style={{fontSize:30}}> 购物车 </Text>
			</View>
		)
	}
}
