import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from '~navigation/constants/stack';
import GameContext from '~context/gameContext';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <GameContext>
      <Stack.Navigator initialRouteName="Tab">
        {Main.map((item, index) => (
          <Stack.Screen
            key={index.toString()}
            name={item.name}
            component={item.component}
            options={{headerShown: item.isHeaderShown}}
          />
        ))}
      </Stack.Navigator>
    </GameContext>
  );
}
