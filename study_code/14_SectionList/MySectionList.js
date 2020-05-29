import React, { Component } from 'react'
import { Text, View,SectionList } from 'react-native'

export default class MySectionList extends Component {

	state = {
		news:[
			{ title: "国内新闻", data: ["尚硅谷又发钱了", "中国抗疫取得阶段性胜利"] },
			{ title: "国外新闻", data: ["mg又完了", "川建国加入我们了"] },
			{ title: "本地新闻", data: ["麻辣烫关门了", "烧烤摊营业了"] }
		]
	}

	//渲染每一个数据项
	renderItem = ({item,index}) => <Text style={{ fontWeight: "bold",fontSize:20}} key={index}>{item}</Text>

	//渲染每一个分组的头部
	renderHeader = ({section:{title}}) => <Text style={{ fontWeight: "bold",fontSize:30 }}>{title}</Text>

	render() {
		return (
			<SectionList
				renderItem={this.renderItem} //渲染每一个数据项
				renderSectionHeader={this.renderHeader} //渲染每一个分组的头部
				sections={this.state.news} //数据源
				keyExtractor={(item, index) => item + index} //生成一个唯一的key
			/>
		)
	}
}
