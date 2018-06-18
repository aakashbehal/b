/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//  import React, { Component } from 'react';
//  import { ImageBackground, StyleSheet, View, Text, Button, TouchableHighlight, FlatList } from 'react-native';
//  import {
//   StackNavigator,
// } from 'react-navigation';

// const BarderNavigation = StackNavigator({
//   Tutorial1: { screen: Tutorial1Screen },
//   Tutorial2: { screen: Tutorial2Screen },
// });


//  export default class App extends Component {
//   render() {
//     return (
//       <ImageBackground 
//       source={require('./images/tutorial.jpg')} style={s.backgroundImage}>
//       <View style={s.overlay}/>
//       <View style={s.textCenter}>
//         <Text style={s.center}>Welcome to Barber App</Text>
//         <FlatList
//             horizontal
//             data={[{key:''},{key: ''},{key: ''}]}
//             renderItem={({item}) => (
//               <Text style={s.items}>{item.key}</Text>
//             )}
//           />
        
//         <TouchableHighlight underlayColor="red">
//           <Text style={s.button}>Get Started</Text>
//         </TouchableHighlight>
       
//       </View>
      
//       </ImageBackground>
//       );
//     }
//   }

//   const s = StyleSheet.create({
//     backgroundImage: {
//       flex: 1,
//       width: null,
//       height: null,
//     },
//     items:{
//       width:13,
//       height:13,
//       backgroundColor:'white',//'#549383'
//       marginRight:10,
//       borderRadius:50
//     },
//     list:{
//       // justifyContent: 'center',
//       // flex: 1,
//       justifyContent: 'center',
//       // flexWrap:'wrap'
//     },
//     overlay: {
//       position: 'absolute',
//       top: 0,
//       right: 0,
//       bottom: 0,
//       left: 0,
//       backgroundColor: 'lightgreen',
//       opacity: 0.3
//     },
//     textCenter: {
//       // flex: 1,
//       position:'absolute',
//       bottom:70,
//       right:0,
//       left:0,
//       justifyContent: 'center',
//       alignItems: 'center'
//     },
//     button:{
//       backgroundColor:'white',
//       borderRadius:30,
//       textAlign:'center',
//       paddingLeft: 50,
//       marginTop:50,
//       fontSize:24,
//       color:'#549383',
//       fontWeight:'600',
//       paddingRight: 50,
//       paddingTop: 10,
//       paddingBottom: 10
//     },
//     center: {
//       fontSize:34,
//       marginTop:20,
//       marginBottom:50,
//       color:'white',
//       opacity: 1,
//       textAlign:'center',
//       fontWeight:'bold',

//     }
//   });


import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar 
} from 'react-native';


import Routes from './src/Routes';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});