import React, { Component } from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Tutorial1 from './pages/Tutorial1';
import Tutorial2 from './pages/Tutorial2';
import Tutorial3 from './pages/Tutorial3';
import Profile1 from './pages/Profile1';
import Profile2 from './pages/Profile2';
import Staff from './pages/Staff';
import Customer from './pages/Customer';
import CustomTabBarComponent from './components/TabBar';
import NavBar from './components/NavBar';
import NavBarStaff from './components/NavBarStaff';
import NavBarCustomer from './components/NavBarCustomer';
import More from './pages/More';
import {Actions} from 'react-native-router-flux';

const onBackAndroid = () => {
	if (Actions.state.index === 0) {
		return false
	  }
	  Actions.pop()
	  return true
};

  export default class Routes extends Component<{}> {
	render() {
		return(
			<Router backAndroidHandler={onBackAndroid}>
				<Stack key="root" tabs={true} tabBarPosition="bottom" tabBarComponent={CustomTabBarComponent}>
					<Scene  key="tutorial1"  component={Tutorial1} title="tutorial"  initial  hideNavBar hideTabBar/>
					<Scene  key="tutorial2" component={Tutorial2} title="tutorial"  hideNavBar hideTabBar/>
					<Scene  key="tutorial3" component={Tutorial3} title="tutorial" hideNavBar hideTabBar/>
					<Scene  key="login" component={Login} title="Login" hideNavBar hideTabBar/>
					<Scene  key="signup" component={Signup} title="Register" hideNavBar hideTabBar/>
					<Scene  key="profile1" component={Profile1} title="Profile"   navBar={NavBar}/>
					<Scene  key="profile2" component={Profile2} title="Profile"   navBar={NavBar}/>
					<Scene  key="more" component={More} title="More" activeTintColor='red'   navBar={NavBar}/>
					<Scene  key="staff" component={Staff} title="Staff" navBar={NavBarStaff}/>
					<Scene  key="customer" component={Customer} title="Customer"  navBar={NavBarCustomer}/>
				</Stack>
			 </Router>
			)
	}
}

