import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class Hot extends Component {
	static navigationOptions = ({navigation})=>(
		{
			title: `hello,${navigation.getParam('name')},热门`, //控制导航的标题文字内容
			//headerTitle: ()=><Button title="点我"/>, //控制导航的标题组件内容
			headerRight:()=><Text></Text>,
			headerLeft:()=><Button title="扫一扫"/>
		}
	)
	render() {
		return (
			<View style={{flex:1,backgroundColor:'pink'}}>
				<Text style={{fontSize:40}}> 
					我是热门页面,{this.props.navigation.getParam('name')}
					{'\n'}
					{this.props.navigation.state.params.name}
					{'\n'}
					{this.props.navigation.state.params.age}
					{'\n'}
					{this.props.navigation.state.routeName}
				</Text>
				<Button color="green" title="点我去热门页面" onPress={()=> this.props.navigation.navigate('Hot') }/>
				<Text>{'\n'}</Text>
				<Button color="green" title="点我去主页" onPress={()=> this.props.navigation.navigate('Home') }/>
			</View>
		)
	}
}
