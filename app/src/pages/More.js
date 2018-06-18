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


export default class More extends Component<{}> {

   
	render() {
		return(
            <ScrollView style={styles.container}>
                <View style={{flexDirection:'column'}}>
                    <TouchableWithoutFeedback >
                        <View style={styles.item}>
                            <Icon
                            name="md-key"
                            type='ionicon'
                            iconStyle={styles.iconStyle}
                            />
                            <View style={styles.itemView}>
                                <Text style={styles.itemText}>Account</Text>
                            </View>
                        
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => Actions.profile1()}>
                        <View style={styles.item}>
                            <Icon
                            name="md-person"
                            type='ionicon'
                            iconStyle={styles.iconStyle}
                            />
                            <View style={styles.itemView}>
                                <Text style={styles.itemText}>Profile</Text>
                            </View>
                        
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style={styles.item}>
                            <Icon
                            name="md-pricetag"
                            type='ionicon'
                            iconStyle={styles.iconStyle}
                            />
                            <View style={styles.itemView}>
                                <Text style={styles.itemText}>Coupons</Text>
                            </View>
                        
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style={styles.item}>
                            <Icon
                            name="md-analytics"
                            type='ionicon'
                            iconStyle={styles.iconStyle}
                            />
                            <View style={styles.itemView}>
                                <Text style={styles.itemText}>Reports</Text>
                            </View>
                        
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => Actions.staff()}>
                        <View style={styles.item}>
                            <Icon
                            name="md-people"
                            type='ionicon'
                            iconStyle={styles.iconStyle}
                            />
                            <View style={styles.itemView}>
                                <Text style={styles.itemText}>Staff</Text>
                            </View>
                        
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => Actions.customer()}>
                        <View style={styles.item}>
                            <Icon
                            name="md-contacts"
                            type='ionicon'
                            iconStyle={styles.iconStyle}
                            />
                            <View 
                            style={styles.itemView}>
                                <Text style={styles.itemText}>Customers</Text>
                            </View>
                        
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style={styles.item}>
                            <Icon
                            name="md-help-circle"
                            type='ionicon'
                            iconStyle={styles.iconStyle}
                            />
                            <View 
                            style={styles.itemView}>
                                <Text style={styles.itemText}>About</Text>
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
    item:{flexDirection:'row',paddingLeft:10,paddingRight:10, paddingBottom:3,backgroundColor:'white'},
    iconStyle:{color:'white', flexGrow:1,  fontSize:35, marginTop:2, color:'#56d5a1', padding:10, paddingHorizontal:35},
    itemView:{justifyContent:'center', borderBottomColor:'#e0e0e0', borderBottomWidth:1,flexGrow:2 },
    itemText:{fontWeight:'600', fontSize:16}
});