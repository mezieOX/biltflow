import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {CommonActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  ScanIcon,
  SwapCryptoIcon,
  TradeCryptoIcon,
  WalletIcon,
} from '../../assets';
import {HomeScreen, MarketsScreen, WalletScreen} from '../Screens';
import {ScanScreen} from '../Screens/scanScreen/scanScreen';
import {Profile} from '../Screens/auth/profile/profile';

export type BottomStackParams = {
  HomeScreen: undefined;
  WalletScreen: undefined;
  SwapCryptoScreen: undefined;
  TradeCryptoScreen: undefined;
  ScanScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomStackParams>();

const BottomTabStack = () => {
  const homeIcon = (focused: boolean) => <HomeIcon isActive={focused} />;
  const walletIcon = (focused: boolean) => <WalletIcon isActive={focused} />;
  const swapCryptoIcon = (focused: boolean) => (
    <SwapCryptoIcon isActive={focused} />
  );
  const tradeCryptoIcon = (focused: boolean) => (
    <TradeCryptoIcon isActive={focused} />
  );
  const scanIcon = (focused: boolean) => <ScanIcon isActive={focused} />;

  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color}) => {
            const {options} = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({focused, color, size: 24});
            }

            return null;
          }}
          getLabelText={({route}) => {
            const {options} = descriptors[route.key];
            const label = options.tabBarLabel;
            return label as string;
          }}
          activeColor={'#000'}
          inactiveColor={'#fff'}
          activeIndicatorStyle={{
            width: 0,
            height: 4,
          }}
          style={{
            shadowOpacity: 0.9,
            shadowRadius: 4,
            shadowColor: '#fffff',
            backgroundColor: 'rgba(229, 119, 14, 1)',
            elevation: 20,
            shadowOffset: {height: 6, width: 6},
            borderTopWidth: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      )}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => homeIcon(focused),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="TradeCryptoScreen"
        component={MarketsScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => tradeCryptoIcon(focused),
          tabBarLabel: 'Market',
        }}
      />

      <Tab.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => scanIcon(focused),
          tabBarLabel: 'Scan',
        }}
      />
      <Tab.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => walletIcon(focused),
          tabBarLabel: 'Wallet',
        }}
      />
      <Tab.Screen
        name="SwapCryptoScreen"
        component={Profile}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => swapCryptoIcon(focused),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
