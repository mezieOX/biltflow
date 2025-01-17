import React from 'react';
import {TopSection} from '../../../components';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation, useRoute} from '@react-navigation/native';
import {INavigationSetting} from '../../../navigation/type';

const ListItems = [
  {
    id: 1,
    title: 'Data',
    image: require('../../../../assets/images/b1.png'),
  },
  {
    id: 2,
    title: 'CableTV',
    image: require('../../../../assets/images/b2.png'),
  },
  {
    id: 3,
    title: 'Education',
    image: require('../../../../assets/images/b3.png'),
  },
  {
    id: 4,
    title: 'Electricity',
    image: require('../../../../assets/images/b4.png'),
  },
  {
    id: 5,
    title: 'Airtime',
    image: require('../../../../assets/images/b5.png'),
  },
  {
    id: 6,
    title: 'Betting',
    image: require('../../../../assets/images/b6.png'),
  },
];

export const BillPaymentScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const route = useRoute();
  const {features} = route.params as any;

  return (
    <View style={[tw`flex-1 bg-white`, {backgroundColor: '#01041F'}]}>
      <TopSection
        title={features === 'features' ? 'Features' : 'Bills Payment'}
      />
      <View style={[tw`mx-4 flex-row flex-wrap justify-between`]}>
        {ListItems.map(({id, title, image}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('AddBankCardScreen')}
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
