import React, { Component } from 'react'
import { Text, View, TextInput,TouchableOpacity,StyleSheet } from 'react-native'

export default class Todo extends Component {

	state = {
		todos:['吃饭','睡觉','学习'],
		userInput:''
	}

	handlePress = ()=>{
		const {todos,userInput} = this.state
		this.setState({todos:[userInput,...todos],userInput:''})
	}

	render() {
		return (
			<View>
				<View style={{flexDirection:'row',padding:10}}>
					<TextInput
						value={this.state.userInput}
						onChangeText={(value)=>{this.setState({userInput:value})}}
						style={bannerStyle.mainStyle}
					/>
					<TouchableOpacity onPress={this.handlePress} style={btnStyle.wrapStyle}>
						<Text style={btnStyle.textStyle}>
							点我
						</Text>
					</TouchableOpacity>
				</View>
				{
					this.state.todos.map((todo,index)=>{
						return <Text key={index} style={{marginLeft:20,fontSize:20}}>{todo}</Text>
					})
				}
			</View>
		)
	}
}

const btnStyle=  StyleSheet.create({
	wrapStyle:{
		width:100,
		height:40,
		backgroundColor:'orange',
		borderRadius:10,
		marginLeft:5
	},
	textStyle:{
		textAlign:'center',
		lineHeight:40,
		color:'white',
		fontWeight:'bold',
		fontSize:19
	}
})
const bannerStyle = StyleSheet.create({
	mainStyle:{
		borderWidth:1,
		paddingLeft:10,
		borderColor:'black',
		width:200,
		borderRadius:5,
		height:40
	}
})
