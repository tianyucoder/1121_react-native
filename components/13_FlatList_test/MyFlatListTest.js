import React, { Component } from 'react'
import { Text, View,FlatList,Image,Dimensions } from 'react-native'
import phones from '../../assets/json/phone.json'

export default class MyFlatList extends Component {

	state = {
		phones:phones
	}

	renderItem = ({item,index})=>{
		return (
			<View style={{flexDirection:'row',alignItems:'center',paddingRight:110,height:150}}>
				<Image resizeMode="stretch" style={{width:100,height:100}} source={{uri:item.url}}/>
				<View style={{justifyContent:'space-around'}}>
					<Text numberOfLines={2} style={{fontSize:17}}>{item.name}</Text>
					<Text style={{fontSize:17,color:'orange'}}>￥{item.price}</Text>
				</View>
			</View>
		)
	}

	render() {
		return (
			<View>
				 <FlatList
						data={this.state.phones} //配置列表中的数据
						renderItem={this.renderItem}
						//numColumns={2} //多列的配置
						keyExtractor={(item, index) => index.toString()} //用于指定每一个数据项的key
						ListHeaderComponent={
							<Image style={{height:200,width:Dimensions.get('window').width}} resizeMode="cover"  source={require('../../assets/imgs/banner.jpg')}/>
						} //列表头部
						ListFooterComponent={<Text style={{backgroundColor:"gray",textAlign:'center'}}>atguigu版权所有</Text>} //列表尾部
					/>
			</View>
		)
	}
}
