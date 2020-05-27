import React,{Component} from 'react';
import {
  SafeAreaView, //安全可视区域
  //StyleSheet, //专门用于写样式的内置对象
	StatusBar, //状态栏
	//Text //专门用于呈现文字的组件
} from 'react-native';
import Demo from './components/11_Swiper/MySwiper'

export default class App extends Component{
	render(){
		return (
			<>
				<StatusBar barStyle="dark-content"/>
				<SafeAreaView style={{flex:1,backgroundColor:'skyblue'}}>
					<Demo/>
				</SafeAreaView>
			</>
		)
	}
}


