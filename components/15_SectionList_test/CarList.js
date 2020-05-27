import React, { Component } from 'react'
import { Text, View,SectionList,Image } from 'react-native'
import cars from '../../assets/json/car.json'

export default class MySectionList extends Component {

	state = {
		cars:cars.total
	}

	//渲染每一个数据项
	renderItem = ({item,index}) => (
		<View>
			<Image style={{width:100,height:100}} resizeMode="stretch" source={{uri:item.icon}}/>
			<Text style={{ fontWeight: "bold",fontSize:20}} key={index}>{item.name}</Text>
		</View>
	)

	//渲染每一个分组的头部
	renderHeader = ({section:{title}}) => <Text style={{ fontWeight: "bold",fontSize:30 }}>{title}</Text>

	render() {
		return (
			<SectionList
				renderItem={this.renderItem} //渲染每一个数据项
				renderSectionHeader={this.renderHeader} //渲染每一个分组的头部
				sections={this.state.cars} //数据源
				keyExtractor={(item, index) => item + index} //生成一个唯一的key
			/>
		)
	}
}
