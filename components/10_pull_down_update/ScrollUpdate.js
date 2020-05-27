import React, { Component } from 'react'
import { Text, View,ScrollView,RefreshControl} from 'react-native'

export default class MyScroll extends Component {

	state = {
		news:Array.from(new Array(40)).map((item,index)=>{
			return {id:index,content:'新闻'+index}
		}),
		isLoading:false
	}

	handleRefresh = ()=>{
		this.setState({isLoading:true})
		const {news} = this.state
		setTimeout(()=>{
			this.setState({news:[{id:news.length,content:'新闻'+news.length},...news],isLoading:false})
		},1000)
	}

	render() {
		return (
			<ScrollView
				refreshControl={
					<RefreshControl
            refreshing={this.state.isLoading}//是否展示loading图标
						onRefresh={this.handleRefresh}//真正用于执行刷新的函数
						colors={['red','blue','yellow']} //加载条的颜色
          />
				}
				style={{flex:1}}
				showsVerticalScrollIndicator={false} //控制垂直滚动时的进度条
			>
				{
					this.state.news.map((newsObj,index)=>{
						return <Text style={{fontSize:20,backgroundColor:index % 2 ? 'orange':'green'}} key={index}>{newsObj.content}</Text>
					})
				}
			</ScrollView>
		)
	}
}
