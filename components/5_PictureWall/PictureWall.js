import React, { Component } from 'react'
import { Text, View,Image,StyleSheet,Dimensions } from 'react-native'
import frontEnd from '../../assets/json/front_end.json'

export default class PictureWall extends Component {

	state = {
		itemWidth:100,
		itemHeight:150,
		imgs:frontEnd
	}

	renderItem = ()=>{
		const {imgs,itemWidth} = this.state //1.获取所有图片的个数、每个图片的宽度
		const currentWidth = Dimensions.get('window').width //当前屏幕的宽度
		const oneRowCount = Math.floor(currentWidth/itemWidth)//一行能展示几个
		const rows = Math.ceil(imgs.length / oneRowCount) //一共需要多少行
		const addCount = rows * oneRowCount - imgs.length //需要补充几个
		const formatImgs = imgs
		for (let index = 0; index < addCount; index++) {
			formatImgs.push({name:'',url:'demo'})
		}
		return formatImgs.map((item,index)=>{
			return (
				<Image 
					key={index} 
					resizeMode="contain"
					style={{width:this.state.itemWidth,height:this.state.itemHeight,backgroundColor:'pink',marginBottom:5}} 
					source={{uri:item.url}}
				/>
			)
		})
	
	}

	render() {
		const {imgContainer} =  PictureWallStyle
		console.log(frontEnd);
		return (
			<View style = {imgContainer}>
				{this.renderItem()}
			</View>
		)
	}
}

const PictureWallStyle = StyleSheet.create({
	imgContainer:{
		paddingTop:10,
		flexDirection:'row',
		flexWrap:"wrap",
		justifyContent:'space-around'
	}
})
