import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR, FONTSIZE} from '../../constants';
import {tabs} from '../constants/tab';

const Tab = createBottomTabNavigator();
export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: COLOR.bgColor__White},
        tabBarActiveTintColor: COLOR.txtColor__Main,
      }}
      initialRouteName="Home"
    >
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index.toString()}
          name={item.name}
          component={item.component}
          options={{
            title: item.title,
            headerTintColor: COLOR.bgColor__White,
            headerTitleStyle: {
              fontSize: FONTSIZE.textFontTertiary,
              fontWeight: '400',
            },
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLOR.bgColor__Main,
            },
            headerShown: item.isHeaderShown,
            tabBarLabel: item.title,
            tabBarIcon: item.iCons,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
