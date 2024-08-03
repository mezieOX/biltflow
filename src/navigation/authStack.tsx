import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  RegisterScreen,
  TwoFactorAuth,
  VerificationConfirmScreen,
  VerificationScreen,
} from '../Screens/auth';
import {VeryIdentityScreen} from '../Screens/auth/verifyIdentity/verifyIdentity';

export type AuthStackParams = {
  LoginScreen: undefined;
  VerificationScreen: undefined;
  VerificationConfirmScreen: undefined;
  RegisterScreen: undefined;
  VeryIdentityScreen: undefined;
  TwoFactorAuth: undefined;
};

const AuthStacks = createNativeStackNavigator<AuthStackParams>();
export const AuthStack = () => {
  return (
    <AuthStacks.Navigator screenOptions={{headerShown: false}}>
      <AuthStacks.Screen name="RegisterScreen" component={RegisterScreen} />
      <AuthStacks.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStacks.Screen
        name="VerificationScreen"
        component={VerificationScreen}
      />
      <AuthStacks.Screen
        name="VerificationConfirmScreen"
        component={VerificationConfirmScreen}
      />
      <AuthStacks.Screen name="TwoFactorAuth" component={TwoFactorAuth} />
      <AuthStacks.Screen
        name="VeryIdentityScreen"
        component={VeryIdentityScreen}
      />
    </AuthStacks.Navigator>
  );
};
