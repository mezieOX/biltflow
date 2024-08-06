import React from 'react';
import {TopSection} from '../../../components';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation, useRoute} from '@react-navigation/native';
import {INavigationSetting} from '../../../navigation/type';

const ListItems = [
  {
    id: 1,
    title: 'Buy & Sell',
    image: require('../../../../assets/images/h1.png'),
    route: 'BuyAndSellCryptoScreen',
  },
  {
    id: 2,
    title: 'Send & Receive',
    image: require('../../../../assets/images/h2.png'),
    route: 'SendAndRecieveCryptoScreen',
  },
  {
    id: 3,
    title: 'Pay Bills',
    image: require('../../../../assets/images/h3.png'),
    route: 'ChooseCardScreen',
  },
  {
    id: 4,
    title: 'Withdraw',
    image: require('../../../../assets/images/h4.png'),
    route: 'AddBankWithdrawalCard',
  },
  {
    id: 5,
    title: 'Swap',
    image: require('../../../../assets/images/swap-logo.png'),
    route: 'SwapAndExchangeScreen',
  },
  {
    id: 6,
    title: 'Refer',
    image: require('../../../../assets/images/refer-logo.png'),
    route: 'ReferralProgramScreen',
  },
];

export const FeatureScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const route = useRoute();

  return (
    <View
      style={[
        tw`flex-1 bg-white`,
        {backgroundColor: '#01041F', paddingTop: 20},
      ]}>
      <View style={{paddingHorizontal: 16}}>
        <TopSection searchIcon={false} title={'Features'} />
      </View>
      <View
        style={[
          tw`flex-row flex-wrap justify-between`,
          {
            marginTop: 15,
          },
        ]}>
        {ListItems.map(({id, title, image, route}) => (
          <TouchableOpacity
            onPress={() => {
              if (route) navigation.navigate(route);
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
