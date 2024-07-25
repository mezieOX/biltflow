import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStartedScreen} from '../Screens/getStartedScreen';
import {WaitScreen} from '../Screens/waitScreen';

export type SplashStackParams = {
  WaitScreen: undefined;
  GetStartedScreen: undefined;
};

const SplashStacks = createNativeStackNavigator<SplashStackParams>();
export const SplashStack = () => {
  return (
    <SplashStacks.Navigator screenOptions={{headerShown: false}}>
      <SplashStacks.Screen name="WaitScreen" component={WaitScreen} />
      <SplashStacks.Screen
        name="GetStartedScreen"
        component={GetStartedScreen}
      />
    </SplashStacks.Navigator>
  );
};
