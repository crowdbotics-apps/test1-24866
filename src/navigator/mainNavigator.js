import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Tutorial212090Navigator from '../features/Tutorial212090/navigator';
import NotificationList212062Navigator from '../features/NotificationList212062/navigator';
import Settings212061Navigator from '../features/Settings212061/navigator';
import Settings212053Navigator from '../features/Settings212053/navigator';
import UserProfile212051Navigator from '../features/UserProfile212051/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Tutorial212090: { screen: Tutorial212090Navigator },
NotificationList212062: { screen: NotificationList212062Navigator },
Settings212061: { screen: Settings212061Navigator },
Settings212053: { screen: Settings212053Navigator },
UserProfile212051: { screen: UserProfile212051Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
