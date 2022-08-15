import React from 'react';
import {Home, Explore, Market, Profile} from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const tabs = [
  {
    name: 'Home',
    title: 'Home',
    component: Home,
    isHeaderShown: false,
    iCons: ({color, size}) => (
      <Ionicons name="home" color={color} size={size} />
    ),
  },
  {
    name: 'Explore',
    title: 'Explore',
    component: Explore,
    isHeaderShown: false,
    iCons: ({color, size}) => (
      <FontAwesome name="question-circle" color={color} size={size} />
    ),
  },
  {
    name: 'Market',
    title: 'Market',
    component: Market,
    isHeaderShown: false,
    iCons: ({color, size}) => (
      <FontAwesome name="shopping-bag" color={color} size={size} />
    ),
  },
  {
    name: 'Profile',
    title: 'Profile',
    component: Profile,
    isHeaderShown: false,
    iCons: ({color, size}) => (
      <FontAwesome name="user" color={color} size={size} />
    ),
  },
];
export {tabs};
