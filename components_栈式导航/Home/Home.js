import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class Home extends Component {
	static navigationOptions = {
		title: '主页', //控制导航的标题内容
	};
	
	toHot = ()=>{
		this.props.navigation.push('Hot',{name:'tom',age:19}) 
	}

	render() {
		return (
			<View style={{flex:1,backgroundColor:'skyblue'}}>
				<Text style={{fontSize:20}}> 我是主页 </Text>
				<Button title="点我去热门页面" onPress={this.toHot}/>
			</View>
		)
	}
}

