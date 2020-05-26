import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class MyText extends Component {
	render() {
		return (
			<View>
				<Text 
					numberOfLines={1}
					ellipsizeMode="middle"
					style={MyTextStyle.mainStyle}
					onPress={()=>{alert(1)}}
				> 
					今天是我学习RN的第一天，见识到了他的威力！
					今天是我学习RN的第一天，见识到了他的威力！ 
					今天是我学习RN的第一天，见识到了他的威力！ 
					今天是我学习RN的第一天，见识到了他的威力！ 
					今天是我学习RN的第一天，见识到了他的威力！ 
				</Text>
			</View>
		)
	}
}

const MyTextStyle = StyleSheet.create({
	mainStyle:{
		fontSize:30,
		backgroundColor:'blue'
	}
})
