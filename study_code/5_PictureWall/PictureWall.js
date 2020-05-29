import React, { Component } from 'react'
import { Text, View,Image,StyleSheet,Dimensions } from 'react-native'
// from '../../assets/json/x.json'

export default class PictureWall extends Component {

	state = {
		itemWidth:120,
		itemHeight:80,
		//imgs:frontEnd
	}

	renderItem = ()=>{
		const {itemWidth} = this.state //获取所有图片的个数、每个图片的宽度
		const imgs = this.props.data
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
					style={{width:this.state.itemWidth,height:this.state.itemHeight,marginBottom:5}} 
					source={{uri:item.url}}
				/>
			)
		})
	
	}

	render() {
		const {imgContainer} =  PictureWallStyle
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
