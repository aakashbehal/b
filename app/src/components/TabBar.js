import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { Icon } from 'react-native-elements'
import {Actions} from 'react-native-router-flux';

export default class CustomTabBarComponent extends React.Component {
    dashboard() {
        Actions.dashboard();
    }
    appointment() {
        Actions.appointment();
    }
    services() {
        Actions.services();
    }
    notifications() {
        Actions.notifications();
    }
    more() {
        Actions.more();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <TouchableOpacity onPress={this.dashboard} >
                        <Icon
                        name='md-speedometer'
                        type='ionicon'
                        color='white'
                        iconStyle={styles.iconSize}
                        />
                        <Text style={styles.itemInner}>Dashboard</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity onPress={this.appointment} >
                    <Icon
                        name='md-calendar'
                        type='ionicon'
                        color='white'
                        iconStyle={styles.iconSize}
                        />
                        <Text style={styles.itemInner}>Appointment</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity onPress={this.services} >
                    <Icon
                        name='md-cut'
                        type='ionicon'
                        color='white'
                        iconStyle={styles.iconSize}
                        />
                        <Text style={styles.itemInner}>Services</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity onPress={this.notifications} >
                    <Icon
                        name='md-notifications'
                        type='ionicon'
                        color='white'
                        iconStyle={styles.iconSize}
                        />
                        <Text  style={styles.itemInner}>Notifications</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity onPress={this.more} >
                    <Icon
                        name='md-menu'
                        type='ionicon'
                        color='white'
                        iconStyle={styles.iconSize}
                        />
                        <Text style={styles.itemInner}>More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{flexDirection: 'row', height:60, justifyContent: 'center', backgroundColor:'#56d5a1'},
    item:{
        flexBasis:0,
        flexGrow:1,
        paddingTop:10,
        height: 60, 
        // borderWidth:1,
        backgroundColor: '#56d5a1',
        alignItems:'center',
    },
    iconSize:{fontSize:30},

    itemInner:{
        color:'white',
        fontSize:12
    }
})