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


export default class Staff extends Component<{}> {

   
	render() {
		return(
            <ScrollView style={styles.container}>
                <View style={{flexDirection:'column'}}>
                    <TouchableWithoutFeedback >
                        <View style={{flexDirection:'row',paddingLeft:30,paddingRight:10, paddingBottom:5, paddingTop:5,backgroundColor:'white', borderBottomColor:'#e0e0e0', borderBottomWidth:1,}}>
                            <Image  style={{width:60, height: 60, borderRadius:50,  marginRight:20}}
          			        source={require('../images/tutorial.jpg')}/>
                            <View style={{justifyContent:'center', flexGrow:2 }}>
                                <Text style={{fontWeight:'400', fontSize:16}}>Anthony Giannoti</Text>
                            </View>
                        
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback >
                        <View style={{flexDirection:'row',paddingLeft:30,paddingRight:10, paddingBottom:5, paddingTop:5,backgroundColor:'white', borderBottomColor:'#e0e0e0', borderBottomWidth:1,}}>
                            <Image  style={{width:60, height: 60, borderRadius:50,  marginRight:20}}
          			        source={require('../images/tutorial.jpg')}/>
                            <View style={{justifyContent:'center', flexGrow:2 }}>
                                <Text style={{fontWeight:'400', fontSize:16}}>Anthony Giannoti</Text>
                            </View>
                        
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback >
                        <View style={{flexDirection:'row',paddingLeft:30,paddingRight:10, paddingBottom:5, paddingTop:5,backgroundColor:'white', borderBottomColor:'#e0e0e0', borderBottomWidth:1,}}>
                            <Image  style={{width:60, height: 60, borderRadius:50,  marginRight:20}}
          			        source={require('../images/tutorial.jpg')}/>
                            <View style={{justifyContent:'center', flexGrow:2 }}>
                                <Text style={{fontWeight:'400', fontSize:16}}>Anthony Giannoti</Text>
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
    }
});