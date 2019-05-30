import React,{ Component } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native'

export default class Login extends Component{
	render(){
		const { navigation } = this.props;
		return (
			<View>
				<Text>我是Login</Text>
				<Button
					title={'去首页'}
					onPress = {()=>{
						navigation.navigate('Home');
					}}></Button>
			</View>
		)
	}
}