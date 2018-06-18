import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput ,
  Image,
  TouchableOpacity,
  Picker,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements'
import Logo from '../components/Logo';

import {Actions} from 'react-native-router-flux';
import SmartPicker from 'react-native-smart-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'Men', value: 0 },
    {label: 'Women', value: 1 },
    {label: 'Both', value: 2 }
  ];


export default class Profile1 extends Component<{}> {

    

    // tutorial2() {
    //     Actions.tutorial2();
    // }
    state = {
        selected: "A",
    };

    handleChangeOption(val) {
        if (val !== 0) {
          this.state({selectedValue: val});
        }
      }

	render() {
		return(
            <ScrollView style={styles.container}>
                    <View style={styles.imageBack}>
                        <Image
                            style={{width: 120, height: 120}}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                        placeholderTextColor="#686868"
                        style={{flex:1, backgroundColor:'transparent',  fontWeight:'bold', fontSize:16, }}
                        placeholder="Business Name"
                        underlineColorAndroid="transparent"
                        />

                         

                    </View>
                    <View style={styles.SectionStyle}>
                        

                         <TextInput
                        placeholderTextColor="#686868"
                        style={{flex:1, backgroundColor:'transparent',  fontWeight:'bold', fontSize:16, }}
                        placeholder="Address"
                        underlineColorAndroid="transparent"
                        />

                         

                    </View>
                    <View style={styles.SectionStyle}>
                       

                         <TextInput
                        placeholderTextColor="#686868"
                        style={{flex:1, backgroundColor:'transparent',  fontWeight:'bold', fontSize:16, }}
                        placeholder="Landmark"
                        underlineColorAndroid="transparent"
                        />

                    </View>

                    <View style={styles.SectionStyle}>  
                        <Picker
                            mode={'dropdown'}
                            onValueChange={this.handleChangeOption}
                            style={{flex:1, backgroundColor:'transparent'}}>
                            <Picker.Item label='City' value='0'/>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                        <Icon
                        name='md-arrow-dropdown'
                        type='ionicon'
                        color='#56d5a1'
                        iconStyle={{paddingRight:10, fontSize:30}}
                        />
                    </View>
                    <View style={styles.SectionStyle}>  
                        
                        <Picker
                            mode={'dropdown'}
                            onValueChange={this.handleChangeOption}
                            style={{flex:1, backgroundColor:'transparent'}}>
                            <Picker.Item label='Country' value='0' />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                        <Icon
                        name='md-arrow-dropdown'
                        type='ionicon'
                        color='#56d5a1'
                        iconStyle={{paddingRight:10, fontSize:30}}
                        />
                    </View>
                    <View >  
                        <Text style={{padding:10, fontWeight:'bold', fontSize:16}}>Service Type</Text>
                    </View>
                    <View style={{padding:10}}> 
                        <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        buttonSize={10}
                        borderWidth={1}
                        buttonInnerColor={'#56d5a1'}
                        buttonOuterColor={'#56d5a1'}
                        buttonColor={'#56d5a1'}
                        selectedButtonColor={'#56d5a1'}
                        selectedLabelColor={'#686868'}
                        labelColor={'#686868'}
                        labelStyle={{fontSize: 16, fontWeight:'bold'}}
                        formHorizontal={true}
                        animation={true}
                        radioStyle={{paddingRight: 20}}
                        onPress={(value) => {this.setState({value:value})}}
                        />
                    </View>
                    <View style={{alignItems: 'flex-end'}} > 
                        <TouchableWithoutFeedback onPress={() => Actions.profile2()}>
                        <Icon
                            name="arrow-right"
                            type='simple-line-icon'
                            // color='black'
                            iconStyle={styles.iconSize}
                            />
                        </TouchableWithoutFeedback>
                    </View>
            </ScrollView>
			)
	}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // marginBottom:20
    },
    iconSize:{
        color:'#56d5a1',
        marginTop:5,
        paddingRight:20,
        fontSize:24,
        fontWeight:"600"
    },
    imageBack:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:20,
        paddingBottom:30
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff',
        borderWidth: 0,
        // color:'white',
        borderBottomWidth:1,
        borderColor: '#e0e0e0',
        height: 40,
        borderRadius: 0 ,
        margin: 3,
        
    },
});