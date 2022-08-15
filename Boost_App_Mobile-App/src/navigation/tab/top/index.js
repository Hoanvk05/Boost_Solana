import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {topTabs} from '../../constants/toptab';
import {COLOR, COMMON} from '~constants';

const Tab = createMaterialTopTabNavigator();
export default function TopBarNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
        tabBarActiveTintColor: COLOR.bgColor__White,
        tabBarInactiveTintColor: COLOR.bgColor__Black,
        tabBarStyle: {
          borderRadius: COMMON.radiusPrimary,
          borderWidth: 2,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: 'transparent',
          borderBottomWidth: 2,
          backgroundColor: COLOR.bgColor__Main,
          height: '80%',
          width: '30%',
          borderRadius: 25,
          top: 5,
          left: '1%',
        },
      }}
    >
      {topTabs.map((item, index) => (
        <Tab.Screen
          key={index.toString()}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
}
