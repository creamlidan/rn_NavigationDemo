import React,{ Component } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native'

export default class Home extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const { navigation } = this.props;
		const { state , setParams} = navigation;
		const { params } = state;
		return (
			<View>
				<Text>我是Home</Text>
		        <Button
		          title={'去商品详情'} 
		          onPress={()=>{
		            navigation.navigate('GoodsInfo',{title:'我是初始化title'})
		          }}
		        />
			</View>
		)
	}
}