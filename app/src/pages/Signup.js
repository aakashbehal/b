import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import SignUpForm from '../components/SignUpForm';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}> {

  goBack() {
      Actions.pop();
  }

	render() {
		return(
            <ImageBackground 
            source={require('../images/tutorial.jpg')} style={styles.backgroundImage}>
            <View style={styles.overlay}/>
			<View style={styles.container}>
				{/* <Logo/> */}
				<SignUpForm type="Signup"/>
				{/* <View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				</View> */}
			</View>	
            </ImageBackground>
			)
	}
}

const styles = StyleSheet.create({
backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'lightgreen',
        opacity: 0.3
      },
//   container : {
//     backgroundColor:'#455a64',
//     flex: 1,
//     alignItems:'center',
//     justifyContent :'center'
//   },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});