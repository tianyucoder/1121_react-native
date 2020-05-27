import React, { Component } from 'react'
import { Text, View,FlatList } from 'react-native'

export default class MyFlatList extends Component {

	state = {
		persons:[
			{id:'0',name:'tom',age:18},
			{id:'1',name:'peter',age:19},
			{id:'1',name:'peter',age:19},
			{id:'1',name:'peter',age:19},
			{id:'1',name:'peter',age:19},
			{id:'1',name:'peter',age:19},
			{id:'1',name:'peter',age:19},
			{id:'1',name:'peter',age:19},
			{id:'1',name:'peter',age:19},
			{id:'1',name:'peter',age:19},
			{id:'1',name:'peter',age:19},
			{id:'1',name:'peter',age:19},
			{id:'1',name:'peter',age:19},
		]
	}

	//注意：FlatList渲染数据时，每一个元素都要有唯一的key，且key值不能为数字

	render() {
		return (
			<View>
				 <FlatList
						data={this.state.persons} //配置列表中的数据
						renderItem={//渲染列表项
							({item,index}) => <Text style={{fontSize:20}}>{item.name},{item.age}</Text>
						}
						numColumns={2} //多列的配置
						keyExtractor={(item, index) => index.toString()} //用于指定每一个数据项的key
						ListHeaderComponent={<Text>我是列表的头部</Text>} //列表头部
						ListFooterComponent={<Text>xxxx版权所有</Text>} //列表尾部
					/>
			</View>
		)
	}
}
