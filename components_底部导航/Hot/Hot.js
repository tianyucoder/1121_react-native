import React, { Component } from 'react'
import { Text,Button,View } from 'react-native'
import HotList from '../../study_code/13_FlatList_test/MyFlatListTest'

export default class Hot extends Component {
	static navigationOptions = {
		title:'热门'
	}
	render() {
		return (
			<View style={{flex:1}}>
				<HotList/>
			</View>
		)
	}
}
