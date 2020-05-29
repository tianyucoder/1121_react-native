import React, { Component } from 'react'
import { Text,ScrollView, View,Button } from 'react-native'
import MySwiper from '../../study_code/11_Swiper/MySwiper'
import MyPictureWall from '../../study_code/5_PictureWall/PictureWall'
import front from '../../assets/json/front_end.json'
import bigData from '../../assets/json/big_data.json'

export default class Home extends Component {

	render() {
		return (
			<ScrollView style={{flex:1}}>
				<MySwiper/>
				<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
					<Text style={{fontSize:20}}>前端课程</Text>
					<Button title="更多..."/>
				</View>
				<MyPictureWall data={front}/>
				<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
					<Text style={{fontSize:20}}>大数据课程</Text>
					<Button title="更多..."/>
				</View>
				<MyPictureWall data={bigData}/>
			</ScrollView>
		)
	}
}

