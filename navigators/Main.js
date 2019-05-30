import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
//导入更改android所需
import StackViewStyleInterpolator from "react-navigation-stack/src/views/StackView/StackViewStyleInterpolator"
//导入所需Icon
import Ionicons from 'react-native-vector-icons/Ionicons'
//导入自定义字体
import { Iconfont } from "../font";
//导入页面
import Home from '../page/Home'
import Activity from '../page/Activity'
import Classify from '../page/Classify'
import Login from '../page/Login'
import Me from '../page/Me'
import ShopCar from '../page/ShopCar'
import GoodsInfo from '../page/GoodsInfo'

//定义底部tabbar
const AppBottomNavigator = createBottomTabNavigator({
  	Home:{
		screen:Home,
		navigationOptions:({navigation})=>({
			tabBarLabel:'首页',
			headerTitle:'首页',
			tabBarIcon:({tintColor,focused})=>{
				return(
					focused?
					<Iconfont
						name='icon-home_active'
						size={26}
						style={{color:tintColor}}
					/>:
					<Iconfont
						name='icon-home'
						size={26}
						style={{color:tintColor}}
					/>
				)
			}
		})
	},
	Classify:{
		screen:Classify,
		navigationOptions:({navigation}) => ({
			tabBarLabel:'分类',
			tabBarIcon:({tintColor,focused})=>{
				return(
					focused?
					<Iconfont
						name='icon-classify_active'
						size={26}
						style={{color:tintColor}}
					/>:
					<Iconfont
						name='icon-classify'
						size={26}
						style={{color:tintColor}}
					/>
				)
			}
		})
	},
	ShopCar:{
		screen:ShopCar,
		navigationOptions:({navigation})=>({
			tabBarLabel:'购物车',
			tabBarIcon:({tintColor,focused})=>{
				return(
					focused?
					<Iconfont
						name='icon-shopcar_active'
						size={26}
						style={{color:tintColor}}
					/>:
					<Iconfont
						name='icon-shopcar'
						size={26}
						style={{color:tintColor}}
					/>
				)
			}
		})
	},
	Me:{
		screen:Me,
		navigationOptions:({navigation})=>({
			tabBarLabel:'我的',
			tabBarIcon:({tintColor,focused})=>{
				return(
					focused?
					<Iconfont
						name={'icon-me_active'}
						size={26}
						style={{color:tintColor}}
					/>:
					<Iconfont
						name={'icon-me'}
						size={26}
						style={{color:tintColor}}
					/>
				)
			}
		})
	},
},{
	lazy: true,
	tabBarOptions:{
		activeTintColor:'#ff9500'
	}
});

/*AppBottomNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  return {
    headerTitle,
  };
};*/


export const AppStackNavigator = createStackNavigator({
  Home: AppBottomNavigator,
  Login:{
  	screen:Login,
  }
});

const route = (navigation) => {
    if (!navigation.isFocused()) {
        navigation.navigate(navigation.state.routeName,{
        	title: navigation.state.routeName
        })
    }
    return navigation.state.routeName
};
