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

import {Actions} from 'react-native-router-flux';


export default class Customer extends Component<{}> {

   
	render() {
		return(
            <ScrollView style={styles.container}>
                <View style={{ backgroundColor:'#56d5a1', padding:5, paddingBottom:10}}>
                    <View style={{flexDirection:'row',backgroundColor:'white'}}>
                        <Icon
                            name='md-search'
                            type='ionicon'
                            color='#56d5a1'
                            iconStyle={{paddingLeft:20, marginRight:10}}
                            />
                        <TextInput
                        placeholderTextColor="#e0e0e0"
                        style={{flex:1, color:'red', fontWeight:'bold', fontSize:16, lineHeight:24}}
                        placeholder="Search Customer"
                        secureTextEntry={true}
                        underlineColorAndroid="transparent"
                        />
                    </View>

                    

                </View>
                <View style={{flexDirection:'column'}}>
                    <TouchableWithoutFeedback >
                    <View style={styles.listView}>
                            <Image  style={{width:60, height: 60, borderRadius:50,  marginRight:20}}
          			        source={require('../images/tutorial.jpg')}/>
                            <View style={{justifyContent:'center', flexGrow:2 }}>
                                <Text style={styles.listText}>Anthony Giannoti</Text>
                                <Text style={styles.listText}>345-854-3098</Text>
                            </View>
                        
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback >
                    <View style={styles.listView}>
                            <Image  style={{width:60, height: 60, borderRadius:50,  marginRight:20}}
          			        source={require('../images/tutorial.jpg')}/>
                            <View style={{justifyContent:'center', flexGrow:2 }}>
                                <Text style={styles.listText}>Anthony Giannoti</Text>
                                <Text style={styles.listText}>345-854-3098</Text>
                                
                            </View>
                        
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback >
                        <View style={styles.listView}>
                            <Image  style={{width:60, height: 60, borderRadius:50,  marginRight:20}}
          			        source={require('../images/tutorial.jpg')}/>
                            <View style={{justifyContent:'center', flexGrow:2 }}>
                                <Text style={styles.listText}>Anthony Giannoti</Text>
                                <Text style={styles.listText}>345-854-3098</Text>
                                
                            </View>
                        
                        </View>
                    </TouchableWithoutFeedback>
                    
                </View>
                
            </ScrollView>
			)
	}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    listView:{
        flexDirection:'row',
        paddingLeft:30,
        paddingRight:10,
         paddingBottom:5, 
         paddingTop:5,
         backgroundColor:'white', 
        },
    listText:{fontWeight:'400', fontSize:16, fontWeight:'600'}
});