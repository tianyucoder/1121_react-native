//引入“每一屏”
import React from 'react'
import Home from './Home/Home'
import Hot from './Hot/Hot'
import ShopCar from './ShopCar/ShopCar'
import User from './User/User'
import {Image} from 'react-native'
//引入createBottomTabNavigator，用于创建底部tab导航
import { createBottomTabNavigator } from 'react-navigation-tabs';
//引入createAppContainer，用于创建并包裹导航的App容器
import { createAppContainer } from 'react-navigation';

//创建一个底部tab导航，且配置好每一屏的key
const AppNavigator = createBottomTabNavigator(
	{
		//每一屏的配置都是一个对象
		Home: {screen: Home,navigationOptions:{title:'主页'}}, //配置主页面
		Hot: {screen: Hot,navigationOptions:{title:'热门'}}, //配置热门页面
		ShopCar: {screen: ShopCar,navigationOptions:{title:'购物车'}}, 
		User: {screen: User,navigationOptions:{title:'我的'}}, 
	},
	{
		//initialRouteName:'Home',//配置默认页面
		defaultNavigationOptions: ({navigation}) => ({
			tabBarIcon:({focused})=>{
				const { routeName } = navigation.state;//获取路由的key，例如：Home Hot
				let iconName = routeName.toLowerCase() //定义icon图片的名字
				if(routeName === 'ShopCar') iconName = 'fill'
				return (
					<Image 
						style={{width:40,height:40}} 
						source={{uri:focused ? iconName+'_active' : iconName}}
					/>
				)
			}
    }),
    tabBarOptions: {
      activeTintColor: 'blue', //选中的颜色
      inactiveTintColor: 'gray', //未选中的颜色
    },
	}
)
//创建AppContainer，用于创建并包裹导航的App容器
const AppContainer = createAppContainer(AppNavigator)

//暴露AppContainer
export default AppContainer