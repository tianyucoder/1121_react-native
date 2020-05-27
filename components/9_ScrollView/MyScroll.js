import React, { Component } from 'react'
import { Text, View,ScrollView,Dimensions} from 'react-native'

export default class MyScroll extends Component {

	state = {
		colors:['red','orange','yellow','green','blue','gray','cyan']
	}

	render() {
		return (
			<ScrollView
				style={{flex:1}}
				pagingEnabled={true} //是否滚动整数倍，最好配合horizontal={true}使用
				horizontal={true}//是否水平滚动
				//scrollEnabled={false}//是否可以滚动
				showsHorizontalScrollIndicator={false} //控制水平滚动时的进度条
				//showsVerticalScrollIndicator={false} //控制垂直滚动时的进度条
			>
				{
					this.state.colors.map((c,index)=>{
						return <View key={index} style={{width:Dimensions.get("window").width,height:300,backgroundColor:c}}>
							<Text style={{fontSize:50}}>{index}</Text>
						</View>
					})
				}
			</ScrollView>
		)
	}
}
