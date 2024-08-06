import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashStack, SplashStackParams} from './splashStack';
import {AuthStack, AuthStackParams} from './authStack';
import {
  AboutScreen,
  AddBankCardScreen,
  AddBankWithdrawalCard,
  AddMoneyScreen,
  AddWithdrawalBank,
  BuyAndSellCryptoScreen,
  ChangePasswordScreen,
  ChatScreen,
  ChooseCryptoScreen,
  CongratulationScreen,
  CryptoSellAndSwap,
  HelpCenterScreen,
  NotificationScreen,
  ProfileInfoScreen,
  ProfileScreen,
  ReceiveCoinScreen,
  SendCryptoCoin,
  SettingsScreen,
  TransactionScreen,
} from '../Screens';
import BottomTabStack, {BottomStackParams} from './bottomStack';
import {StatisticsScreen} from '../Screens/statisticScreen/statisticScreen';
<<<<<<< HEAD
import {BillPaymentScreen} from '../Screens/auth/billPayment/billPayment';
import {AccountScreen} from '../Screens/accountScreen/accountScreen';
=======

import {AccountScreen} from '../Screens/accountScreen/accountScreen';
import AirtimeScreen from '../Screens/airtime/airtime';
import DataScreen from '../Screens/data/data-sub';
import TvSubscriptionScreen from '../Screens/tvSubscription/TvSubscriptionScreen';
import SendAndReceieveCryptoScreen from '../Screens/sendAndRecieveScreen.tsx/sendAndRecieveScreen';
import SucessScreen from '../Screens/successScreen.tsx/successScreen';
import {ChooseCard} from '../Screens/fundScreen/fundScreen';
import {TopUpScreen} from '../Screens/topUpScreen.tsx/topUpScreen';
import SellCryptoScreen from '../Screens/sellCrypto/sellCrypto';
import ReferralProgramScreen from '../Screens/referralProgram/referralProgram';
import SwapAndExchangeScreen from '../Screens/swapAndExchange/swapAndExchange';
import LanguageScreen from '../Screens/Languages/LanguageScreen';
import SendAndRecieveCredScreen from '../Screens/sendAndRecieveScreen.tsx/sendAndRecieveCredScreen';
import {BillPaymentScreen} from '../Screens/featureScreen/featureScreen';
import {FeatureScreen} from '../Screens/auth/billPayment/billPayment';
>>>>>>> origin/bidemi-project

export type RootStackParams = {
  SplashStack: NavigatorScreenParams<SplashStackParams>;
  AuthStack: NavigatorScreenParams<AuthStackParams>;
  CongratulationScreen: {
    title: string;
    description?: string;
    path?: string;
    btnText?: string;
  };
  BottomStack: NavigatorScreenParams<BottomStackParams>;
  NotificationScreen: undefined;
  ProfileScreen: undefined;
  CryptoSellAndSwap: {
    title?: string;
    btnText?: string;
  };
  AddMoneyScreen: {
    title?: string;
    subTitle?: string;
    firstItemTitle?: string;
    firstItemDescription?: string;
    secondItemTitle?: string;
    secondItemDescription?: string;
  };
  AddBankCardScreen: undefined;
  BuyAndSellCryptoScreen: undefined;
  SettingsScreen: undefined;
  ProfileInfoScreen: undefined;
  ChangePasswordScreen: undefined;
  ChooseCryptoScreen: undefined;
  TransactionScreen: undefined;
  AboutScreen: undefined;
  ReceiveCoinScreen: undefined;
  SendCryptoCoin: undefined;
  HelpCenterScreen: undefined;
  ChatScreen: undefined;
  AddWithdrawalBank: undefined;
  AddBankWithdrawalCard: undefined;
  StatisticsScreen: undefined;
  AccountScreen: undefined;
  BillPaymentScreen: {
    features: string;
  };
<<<<<<< HEAD
=======
  AirtimeScreen: undefined;
  TvSubscriptionScreen: undefined;
  DataScreen: undefined;
  SendAndRecieveCryptoScreen: undefined;
  SuccessScreen: undefined;
>>>>>>> origin/bidemi-project
};

const RootStack = createNativeStackNavigator<RootStackParams>();
export const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="SplashStack" component={SplashStack} />
      <RootStack.Screen name="AuthStack" component={AuthStack} />
      <RootStack.Screen name="BottomStack" component={BottomTabStack} />
      <RootStack.Screen
        name="CongratulationScreen"
        component={CongratulationScreen}
      />
      <RootStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
      <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <RootStack.Screen
        name="CryptoSellAndSwap"
        component={CryptoSellAndSwap}
      />
      <RootStack.Screen name="AddMoneyScreen" component={AddMoneyScreen} />
      <RootStack.Screen
        name="AddBankCardScreen"
        component={AddBankCardScreen}
      />
      <RootStack.Screen
        name="BuyAndSellCryptoScreen"
        component={BuyAndSellCryptoScreen}
      />
      <RootStack.Screen name="SettingsScreen" component={SettingsScreen} />

      <RootStack.Screen
        name="ProfileInfoScreen"
        component={ProfileInfoScreen}
      />
      <RootStack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <RootStack.Screen
        name="ChooseCryptoScreen"
        component={ChooseCryptoScreen}
      />
      <RootStack.Screen
        name="TransactionScreen"
        component={TransactionScreen}
      />
      <RootStack.Screen name="AboutScreen" component={AboutScreen} />
      <RootStack.Screen
        name="ReceiveCoinScreen"
        component={ReceiveCoinScreen}
      />
      <RootStack.Screen name="SendCryptoCoin" component={SendCryptoCoin} />
      <RootStack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
      <RootStack.Screen name="ChatScreen" component={ChatScreen} />
      <RootStack.Screen
        name="AddWithdrawalBank"
        component={AddWithdrawalBank}
      />
      <RootStack.Screen
        name="AddBankWithdrawalCard"
        component={AddBankWithdrawalCard}
      />
      <RootStack.Screen name="StatisticsScreen" component={StatisticsScreen} />
      <RootStack.Screen
        name="BillPaymentScreen"
        component={BillPaymentScreen}
      />
      <RootStack.Screen name="AccountScreen" component={AccountScreen} />
<<<<<<< HEAD
=======
      <RootStack.Screen name="AirtimeScreen" component={AirtimeScreen} />
      <RootStack.Screen name="DataScreen" component={DataScreen} />
      <RootStack.Screen
        name="TvSubscriptionScreen"
        component={TvSubscriptionScreen}
      />
      <RootStack.Screen
        name="SendAndRecieveCryptoScreen"
        component={SendAndReceieveCryptoScreen}
      />
      <RootStack.Screen name="SuccessScreen" component={SucessScreen} />
      <RootStack.Screen name="ChooseCardScreen" component={ChooseCard} />
      <RootStack.Screen name="TopUpScreen" component={TopUpScreen} />
      <RootStack.Screen name="SellCryptoScreen" component={SellCryptoScreen} />
      <RootStack.Screen
        name="ReferralProgramScreen"
        component={ReferralProgramScreen}
      />
      <RootStack.Screen
        name="SwapAndExchangeScreen"
        component={SwapAndExchangeScreen}
      />
      <RootStack.Screen name="LanguageScreen" component={LanguageScreen} />
      <RootStack.Screen
        name="sendAndRecieveCredScreen"
        component={SendAndRecieveCredScreen}
      />
      <RootStack.Screen name="FeatureScreen" component={FeatureScreen} />
>>>>>>> origin/bidemi-project
    </RootStack.Navigator>
  );
};
