import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Logo from '../components/Logo';
import SignUpForm from '../components/SignUpForm';

import {Actions} from 'react-native-router-flux';
const window = Dimensions.get('window');
export default class Tutorial1 extends Component<{}> {

    tutorial2() {
        Actions.tutorial2();
    }

	render() {
		return(
            <ImageBackground 
            source={require('../images/tutorial.jpg')} style={styles.backgroundImage}>
            <View style={styles.overlay}/>
			<View style={styles.container}>
				<Text style={{color:'white', fontSize:26, marginTop:150, fontWeight:'bold'}}>Welcome To Barber App</Text>
                <View style={{flexDirection:'row', marginTop:60, flexWrap: 'wrap'}}>
                    <Text style={{width:13, height:13, backgroundColor:'#56d5a1', borderRadius:50, marginLeft:10}}></Text>
                    <Text style={{width:13, height:13, backgroundColor:'white', borderRadius:50,  marginLeft:10}}></Text>
                    <Text style={{width:13, height:13, backgroundColor:'white', borderRadius:50,  marginLeft:10}}></Text>
                </View>
                <TouchableOpacity onPress={this.tutorial2} style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity> 
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
    container : {
        //   flex:1,
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center',
        marginVertical:250
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
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'lightgreen',
        textAlign:'center'
      },
      button: {
        width:window.width/ 3,
        borderWidth:0,
        // borderColor:'lightgreen',
        backgroundColor:'white',
        borderRadius: 30,
        marginVertical: 50,
        paddingVertical: 10
      },
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