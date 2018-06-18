import {
    View, Image, StatusBar, TouchableWithoutFeedback, Text
   } from 'react-native';
   import React, { Component } from 'react';
   import { Actions, Router, Scene } from 'react-native-router-flux';
   import { Icon } from 'react-native-elements'
   
   class NavBarCustomer extends Component {
     render() {
       return (
          <View style={styles.backgroundStyle}>
              
              <View style={{flexDirection:'row'}}>
              <TouchableWithoutFeedback onPress={() => Actions.more()}>
                  <Icon
                      name="arrow-left"
                      type='simple-line-icon'
                      // color='black'
                      iconStyle={styles.iconSize}
                      />
                </TouchableWithoutFeedback>
                <Text style={styles.title}>{this.props.title}</Text>
                <Icon
                      name="md-add"
                      type='ionicon'
                      // color='black'
                      iconStyle={styles.iconSizeAdd}
                      />
              </View>
          </View>
       );
     }
   
   }
   const styles = {
     backgroundStyle: {
       backgroundColor: '#56d5a1',
       height:70,
       paddingTop:10,
      paddingBottom:20,
      paddingLeft:20,
      paddingRight:20, 
     },
     iconSize:{
       color:'white',
       marginTop:10,
      fontSize:20
     },
     iconSizeAdd:{
        color:'white',
        marginTop:10,
       fontSize:30
      },
     title:{
      fontWeight:'bold',
        color:'#fff',
        width:330,
        paddingTop:5,
        textAlign:'center',
        fontSize:30,
        // marginBottom:10
     }
   };
   
   
   export default NavBarCustomer;