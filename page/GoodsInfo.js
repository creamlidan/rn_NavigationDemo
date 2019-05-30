import React,{ Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'

export default class GoodsInfo extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const { navigation } = this.props;
	    const { state , setParams} = navigation;
	    const { params } = state;
		return (
			<View>
				<Text onPress={()=>{
					setParams({
						title:"我是动态改变的title"
					})
				}}>点我动态改变title</Text>
				<Button
		          title={'去登录'} 
		          onPress={()=>{
		            navigation.navigate('Login',{title:'登录/注册'})
		          }}
		        />
			</View>
		)
	}
}