import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements'

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import {Actions} from 'react-native-router-flux';

var radio_props = [
    {label: 'Barber', value: 0 },
    {label: 'Barber Shop', value: 1 }
  ];

export default class SignUpForm extends Component<{}> {
    signup() {
		Actions.signup()
	}
	render(){
		return(
            
			<View style={styles.container}>
            
             <View style={styles.SectionStyle}>
                <Icon
                    name='md-mail'
                    type='ionicon'
                    color='white'
                    iconStyle={{paddingRight:20}}
                    />
                <TextInput
                placeholderTextColor="white"
                style={{flex:1, backgroundColor:'transparent', color:'white', fontWeight:'bold', fontSize:20, lineHeight:30}}
                placeholder="Email Address"
                underlineColorAndroid="transparent"
                />

            </View>
            <View style={styles.SectionStyle}>
                <Icon
                    name='md-key'
                    type='ionicon'
                    color='white'
                    iconStyle={{paddingRight:20}}s
                    />
                <TextInput
                placeholderTextColor="white"
                style={{flex:1, backgroundColor:'transparent', color:'white', fontWeight:'bold', fontSize:20, lineHeight:24}}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                />

            </View>
            <View style={styles.SectionStyle}>
                <Icon
                    name='md-key'
                    type='ionicon'
                    color='white'
                    iconStyle={{paddingRight:20}}s
                    />
                <TextInput
                placeholderTextColor="white"
                style={{flex:1, backgroundColor:'transparent', color:'white', fontWeight:'bold', fontSize:20, lineHeight:24}}
                placeholder="Confirm Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                />

            </View>
            {/* <Text style={{color:'white', fontSize:20, fontWeight:'100', paddingTop:20, paddingBottom:20}}>Forgot Password?</Text>
            <RadioForm
                radio_props={radio_props}
                initial={0}
                buttonInnerColor={'white'}
                buttonOuterColor={'white'}
                buttonColor={'white'}
                selectedButtonColor={'white'}
                selectedLabelColor={'white'}
                labelColor={'white'}
                labelStyle={{fontSize: 20, fontWeight:'bold'}}
                formHorizontal={true}
                animation={true}
                radioStyle={{paddingRight: 20}}
                onPress={(value) => {this.setState({value:value})}}
                /> */}
            {/* <TouchableOpacity  style={styles.button}>
                <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>  */}
            <TouchableOpacity onPress={() => Actions.profile1()} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity> 
           
            </View> 
           
            
			)
	}
}

const styles = StyleSheet.create({
    searchIcon: {
        padding: 10,
    },
  container : {
    //   flex:1,
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
    marginVertical:250
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
    borderWidth: 0,
    // color:'white',
    borderBottomWidth:1,
    borderColor: 'white',
    height: 50,
    borderRadius: 0 ,
    margin: 10,
    
},
 
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    borderWidth:2,
    borderColor:'lightgreen',
    backgroundColor:'white',
    borderRadius: 25,
    marginVertical: 50,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:20,
    fontWeight:'500',
    color:'lightgreen',
    textAlign:'center'
  }
  
});