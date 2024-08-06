import React, {useState} from 'react';
import {TopSection} from '../../components';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation, useRoute} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';

const ListItems = [
  {
    id: 1,
    title: 'Data',
    image: require('../../../assets/images/b1.png'),
    route: 'DataScreen',
  },
  {
    id: 2,
    title: 'CableTV',
    image: require('../../../assets/images/b2.png'),
    route: 'TvSubscriptionScreen',
  },
  {
    id: 4,
    title: 'Electricity',
    image: require('../../../assets/images/b4.png'),
    route: 'ElectricityScreen',
  },
  {
    id: 5,
    title: 'Airtime',
    image: require('../../../assets/images/b5.png'),
    route: 'AirtimeScreen',
  },
  {
    id: 6,
    title: 'Betting',
    image: require('../../../assets/images/b6.png'),
    route: 'BettingScreen',
  },
];

const FeatureListItems = [
  {
    id: 1,
    title: 'Send & Receive',
    image: require('../../../assets/images/h2.png'),
    route: 'SendAndRecieveCryptoScreen',
  },
  {
    id: 2,
    title: 'Pay Bills',
    image: require('../../../assets/images/h3.png'),
    route: 'BillPaymentScreen',
  },
  {
    id: 3,
    title: 'Withdraw',
    image: require('../../../assets/images/h4.png'),
    route: 'WithdrawalScreen',
  },
  {
    id: 4,
    title: 'Swap',
    image: require('../../../assets/images/swap.png'),
  },
  {
    id: 5,
    title: 'Refer',
    image: require('../../../assets/images/refer.png'),
    route: 'ReferralScreen',
  },
  {
    id: 6,
    title: 'Buy & Sell',
    image: require('../../../assets/images/h1.png'),
    route: 'BuyAndSellScreen',
  },
];

export const BillPaymentScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const route = useRoute();
  const {features} = (route.params as any) || {};
  const [activeRoute, setActiveRoute] = useState(
    features === 'features' ? FeatureListItems : ListItems,
  );

  return (
    <View style={[tw`flex-1 bg-white`, {backgroundColor: '#01041F'}]}>
      <TopSection
        searchIcon={false}
        title={features === 'features' ? 'Features' : 'Bills Payment'}
      />
      <View style={[tw`mx-4 flex-row flex-wrap justify-between`]}>
        {activeRoute.map(({id, title, image, route}) => (
          <TouchableOpacity
            onPress={() => {
              if (route === 'BillPaymentScreen') {
                return setActiveRoute(ListItems);
              }
              navigation.navigate(route as any);
            }}
            key={id}
            style={tw`flex-col w-1/3 mb-10 items-center text-center`}>
            <Image source={image} style={tw`h-12 w-12`} resizeMode="contain" />
            <Text style={tw`text-white pt-1`}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
