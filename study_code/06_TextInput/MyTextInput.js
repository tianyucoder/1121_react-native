import React, { Component } from 'react'
import { Text, View,TextInput } from 'react-native'

export default class MyTextInput extends Component {

	state = {
		userInput:''
	}

	render() {
		return (
			<View style={{padding:10}}>
				<TextInput
					keyboardType="email-address" //键盘类型
					//placeholder="请输入数字" //提示文字
					//placeholderTextColor="red" //提示文字的颜色
					//multiline={true} //可以换行
					onChangeText={(value)=>{this.setState({userInput:value})}}
					style={{
						borderWidth:1,
						paddingLeft:10,
						borderColor:'black',
						width:200,
						borderRadius:5,
						height:40
					}}
				/>
				<Text>{this.state.userInput}</Text>
			</View>
		)
	}
}
