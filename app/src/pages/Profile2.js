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
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Actions} from 'react-native-router-flux';
import SmartPicker from 'react-native-smart-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'Men', value: 0 },
    {label: 'Women', value: 1 },
    {label: 'Both', value: 2 }
  ];


export default class Profile2 extends Component<{}> {

    

    // tutorial2() {
    //     Actions.tutorial2();
    // }
    state = {
        selected: "A",
        isDateTimePickerVisible: false,
    };

    handleChangeOption(val) {
        if (val !== 0) {
          this.state({selectedValue: val});
        }
      }
      
    
      _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    
      _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    
      _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
      };

	render() {
		return(
            <ScrollView style={styles.container}>
                    
                    <View style={styles.SectionStyle}>
                        <TextInput
                        placeholderTextColor="#686868"
                        style={{flex:1, backgroundColor:'transparent',  fontWeight:'bold', fontSize:16, lineHeight:30}}
                        placeholder="Business Description"
                        underlineColorAndroid="transparent"
                        />

                         

                    </View>
                    <View style={styles.SectionStyle}>
                        

                         <TextInput
                        placeholderTextColor="#686868"
                        style={{flex:1, backgroundColor:'transparent',  fontWeight:'bold', fontSize:16, lineHeight:30}}
                        placeholder="Service Offering"
                        underlineColorAndroid="transparent"
                        />

                         

                    </View>
                    <View style={styles.tileStyle}>
                        <View style={{flexDirection:'row', paddingRight:10, marginTop:10, justifyContent:'space-between'}}>
                            <TouchableWithoutFeedback onPress={() => Actions.homeScreen()}>
                                <View style={{flexDirection:'row', borderRadius:5, borderColor:'red',paddingLeft:10,paddingRight:10, paddingBottom:3,backgroundColor:'#56d5a1'}}>
                                    <Text style={{color:'white', fontSize:20}}>Haircut</Text>
                                    <Icon
                                    name="md-close"
                                    type='ionicon'
                                    iconStyle={{color:'white', marginLeft:10, marginTop:2}}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{flexDirection:'row', paddingRight:10, marginTop:10}}>
                            <TouchableWithoutFeedback onPress={() => Actions.homeScreen()}>
                                <View style={{flexDirection:'row', borderRadius:5, borderWidth:1, borderColor:'#56d5a1',paddingLeft:10,paddingRight:10, paddingBottom:3,backgroundColor:'white'}}>
                                    <Text style={{color:'#56d5a1', fontSize:20}}>Shave</Text>
                                    <Icon
                                    name="md-close"
                                    type='ionicon'
                                    iconStyle={{color:'#56d5a1', marginLeft:10, marginTop:2}}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        
                    </View>

                    <View >  
                        <Text style={{padding:10, fontWeight:'bold', fontSize:16}}>
                            Working Hours
                        </Text>
                    </View>

                    <View >  
                        <View>  
                            <Text style={{padding:10,paddingTop:5, paddingLeft:20, fontSize:16}}>
                                Monday to Friday Time
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent:'space-between' , paddingHorizontal:20, width:250}}>
                                <TouchableOpacity onPress={this._showDateTimePicker}>
                                    <Text style={{textDecorationLine:'underline', fontSize:16}}>8:30 AM</Text>
                                </TouchableOpacity>
                                    <DateTimePicker
                                    mode={'time'}
                                    is24Hour={false}
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this._handleDatePicked}
                                    onCancel={this._hideDateTimePicker}
                                    />
                                <Text style={{ fontSize:20}}>To</Text>
                                <TouchableOpacity onPress={this._showDateTimePicker}>
                                    <Text style={{textDecorationLine:'underline', fontSize:16}}>10:00 PM</Text>
                                </TouchableOpacity>
                                    <DateTimePicker
                                    mode={'time'}
                                    is24Hour={false}
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this._handleDatePicked}
                                    onCancel={this._hideDateTimePicker}
                                    />
                            </View>
                        </View>
                        <View >  
                            <Text style={{padding:10,paddingLeft:20, fontSize:16}}>
                                Saturday Time
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent:'space-between' , paddingHorizontal:20, width:250}}>
                                <TouchableOpacity onPress={this._showDateTimePicker}>
                                    <Text style={{textDecorationLine:'underline', fontSize:16}}>8:30 AM</Text>
                                </TouchableOpacity>
                                    <DateTimePicker
                                    mode={'time'}
                                    is24Hour={false}
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this._handleDatePicked}
                                    onCancel={this._hideDateTimePicker}
                                    />
                                <Text style={{ fontSize:20}}>To</Text>
                                <TouchableOpacity onPress={this._showDateTimePicker}>
                                    <Text style={{textDecorationLine:'underline', fontSize:16}}>10:00 PM</Text>
                                </TouchableOpacity>
                                    <DateTimePicker
                                    mode={'time'}
                                    is24Hour={false}
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this._handleDatePicked}
                                    onCancel={this._hideDateTimePicker}
                                    />
                            </View>
                        </View>
                    </View>

                    <View style={{padding:10}}>  
                        <Text style={{padding:10, fontWeight:'bold', fontSize:16}}>Add Photos</Text>
                        <View style={{flexDirection:'row', paddingRight:10, marginTop:5, justifyContent:'space-between'}}>
                            <TouchableWithoutFeedback onPress={() => Actions.homeScreen()}>
                                <View style={{flexDirection:'row', borderRadius:5}}>
                                <Image
                                    style={{width: 120, height: 75}}
                                    source={require( '../images/tutorial.jpg')}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => Actions.homeScreen()}>
                                <View style={{flexDirection:'row', borderRadius:5}}>
                                <Image
                                    style={{width: 120, height: 75}}
                                    source={require( '../images/tutorial.jpg')}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => Actions.homeScreen()}>
                                <View style={{flexDirection:'row', borderRadius:5, borderWidth:1, borderColor:'#56d5a1',paddingLeft:10,paddingRight:10, paddingBottom:3,backgroundColor:'white'}}>
                                    <Icon
                                    name="md-add-circle"
                                    type='ionicon'
                                    iconStyle={{color:'white', fontSize:30, marginTop:2, color:'#56d5a1', padding:20, paddingHorizontal:35}}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                        <View style={{flex:1, alignItems: 'flex-start', paddingLeft:10}} > 
                            <TouchableWithoutFeedback onPress={() => Actions.profile1()}>
                            <Icon
                                name="arrow-left"
                                type='simple-line-icon'
                                // color='black'
                                iconStyle={styles.iconSize}
                                />
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{flex:1, alignItems: 'flex-end'}} > 
                            <TouchableWithoutFeedback onPress={() => Actions.more()}>
                            <Icon
                                name="arrow-right"
                                type='simple-line-icon'
                                // color='black'
                                iconStyle={styles.iconSize}
                                />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    
            </ScrollView>
			)
	}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:20
    },
    iconSize:{
        color:'#56d5a1',
        marginTop:10,
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
    tileStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap:'wrap',
        alignItems: 'center',
        // backgroundColor: '#fff',
        // borderWidth: 0,
        // color:'white',
        // borderBottomWidth:1,
        borderColor: '#e0e0e0',
        // height: 50,
        borderRadius: 0 ,
        margin: 10,
    },

    // flex-start
});