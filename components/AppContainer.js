//引入“每一屏”
import React from 'react'
import Home from './Home/Home'
import Hot from './Hot/Hot'
import {Text} from 'react-native'
//引入createStackNavigator，用于创建栈式导航
import { createStackNavigator } from 'react-navigation-stack';
//引入createAppContainer，用于创建并包裹导航的App容器
import { createAppContainer } from 'react-navigation';

//创建一个栈式导航，且配置好每一屏的key
const AppNavigator = createStackNavigator(
	{
		//每一屏的配置都是一个对象
		Hot: {screen: Hot}, //配置热门页面
		Home: {screen: Home}, //配置主页面
	},
	{
		initialRouteName:'Home',//配置默认页面
		defaultNavigationOptions:{
			headerStyle: { //头部导航的样式
				backgroundColor: 'orange',
			},
			headerTintColor: 'white',//头部标题颜色
			headerTitleStyle: { //头部标题样式
				fontWeight: 'bold',
				textAlign:'center'
			},
		}
	}
)
//创建AppContainer，用于创建并包裹导航的App容器
const AppContainer = createAppContainer(AppNavigator)

//暴露AppContainer
export default AppContainer