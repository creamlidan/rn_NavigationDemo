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

/*const HomeStackNavigator = createStackNavigator({
	Home:{
		screen:Home,
		navigationOptions:{
			headerTitle:'首页'
		}
	}
});
const ClassifyStackNavigator = createStackNavigator({
	Classify:{
		screen:Classify,
		navigationOptions:{
			headerTitle:'分类'
		}
	}
});
const ShopCarStackNavigator = createStackNavigator({
	ShopCar:{
		screen:ShopCar,
		navigationOptions:{
			headerTitle:'购物车'
		}
	}
});
const MeStackNavigator = createStackNavigator({
	Me:{
		screen:Me,
		navigationOptions:{
			headerTitle:'我的'
		}
	}
});*/

const AppBottomNavigator = createBottomTabNavigator({
  	Home:{
		screen:Home,//如果需要显示首页title 则将此次修改为HomeStackNavigator。一般情况都是自定义的
		navigationOptions:({navigation})=>({
			tabBarLabel:'首页',
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
	}
},{
	tabBarOptions:{
		activeTintColor:'#ff9500'
	}
})

export const AppStackNavigator = createStackNavigator({
	Home: {
		screen:AppBottomNavigator,
		navigationOptions:{
			header:null
		}
	},
	Login:{
		screen:Login,
			navigationOptions:({navigation})=>({
			title:navigation.state.params.title
		})
	},
	GoodsInfo:{
		screen:GoodsInfo,
		navigationOptions:({navigation})=>({
			title:navigation.state.params.title
		})
	}
},{
	transitionConfig:()=>({
		screenInterpolator: StackViewStyleInterpolator.forHorizontal,
	})
});




