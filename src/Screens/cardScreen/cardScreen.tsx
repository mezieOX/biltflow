/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {s as tw} from 'react-native-wind';
import {INavigationSetting} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import {Button, TopSection} from '../../components';

const tradingHistory = [
  {
    id: 1,
    title: 'Hello',
    image: require('../../../assets/images/h1.png'),
    amount: '30',
    currency: '20',
    vol: '20%',
  },
];

const ListItems = [
  {
    id: 1,
    title: 'Buy & Sell',
    image: require('../../../assets/images/h1.png'),
  },
  {
    id: 2,
    title: 'Send & Receive',
    image: require('../../../assets/images/h2.png'),
    route: 'SendAndRecieveCryptoScreen',
  },
  {
    id: 3,
    title: 'Pay Bills',
    image: require('../../../assets/images/h3.png'),
  },
  {
    id: 4,
    title: 'Withdraw',
    image: require('../../../assets/images/h4.png'),
    navigation: 'BillPaymentScreen',
  },
];

export const CardScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator size="large" color="rgba(229, 119, 14, 1)" />
      </View>
    );
  }

  return (
    <ScrollView style={[tw``, {backgroundColor: '#01041F'}]}>
      <TopSection settingsIcon={false} title="Wallet" searchIcon={true} />
      <View style={tw`px-4`}>
        <View
          style={[
            tw`h-40 w-full rounded-3xl px-4 py-4 rounded-br-3xl`,
            {backgroundColor: 'rgba(229, 119, 14, 1)'},
          ]}>
          <Text style={tw`text-white text-center pt-5 text-lg`}>
            Total portfolio balance
          </Text>
          <Text style={tw`text-white text-center text-2xl font-bold`}>
            $41, 000
          </Text>
          <Text style={tw`text-green-500 text-center`}>+ $19.25 for today</Text>

          <Image
            style={tw`h-6 w-6 absolute top-4 left-5`}
            resizeMode="contain"
            source={require('../../../assets/images/code.png')}
          />
        </View>
      </View>
      <View style={tw`pt-4 px-4`}>
        <Button
          onPress={() => {
            navigation.navigate('StatisticsScreen');
          }}
          login
          title={'Market Statistics'}
        />
      </View>
      <ScrollView style={tw`mx-4 py-4`} horizontal>
        <View
          style={[
            tw`border mr-4 border-orange-500 px-4 pt-4 pb-20 flex-row  rounded-xl`,
            {backgroundColor: 'rgba(229, 119, 14, 0.26)', minwidth: '200px'},
          ]}>
          <View style={tw``}>
            <Image
              style={tw`h-10 w-10`}
              resizeMode="contain"
              source={require('../../../assets/images/bitcoin.png')}
            />
            <Text style={tw`text-white py-1`}>Ethereum</Text>
          </View>

          <View>
            <Text style={tw`text-white font-bold text-lg`}>355.01ETH</Text>
            <Text style={tw`text-green-500 text-right`}>+11.75%</Text>
          </View>
        </View>
        <View
          style={[
            tw`border min-w-1/2 border-orange-500 px-4 pt-4 pb-20 flex-row  rounded-xl`,
            {backgroundColor: 'rgba(229, 119, 14, 0.26)'},
          ]}>
          <View>
            <Image
              style={tw`h-10 w-10`}
              resizeMode="contain"
              source={require('../../../assets/images/bitcoin.png')}
            />
            <Text style={tw`text-white py-1`}>Ethereum</Text>
          </View>

          <View>
            <Text style={tw`text-white font-bold text-lg`}>355.01ETH</Text>
          </View>
        </View>
      </ScrollView>
      <View style={tw`px-4 py-8 flex-row px-4 justify-between items-center`}>
        <Text style={tw`font-bold text-lg text-white`}>Features</Text>
        <Text
          onPress={() =>
            navigation.navigate('BillPaymentScreen', {
              features: 'features',
            })
          }
          style={[tw``, {color: '#Ffffff'}]}>
          View all
        </Text>
      </View>
      <ScrollView style={tw`mx-4`} horizontal showsHorizontalScrollIndicator>
        {ListItems.map(({id, title, image, route}) => (
          <TouchableOpacity
            onPress={() => {
              if (route) {
                navigation.navigate(route as any);
              }
              // navigation.navigate('BillPaymentScreen', {
              //   features: 'bill-payment',
              // });
            }}
            key={id}
            style={tw`flex-col mr-10 items-center text-center`}>
            <Image source={image} style={tw`h-12 w-12`} resizeMode="contain" />
            <Text style={tw`text-white pt-1`}>{title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View
        style={[
          tw`px-4 py-2 flex-row px-4 my-8 mx-4 rounded-xl justify-between items-center`,
          {backgroundColor: 'rgba(150, 111, 74, 1)'},
        ]}>
        <Text style={tw`font-bold text-lg text-white`}>
          Recent Transactions
        </Text>
        <Text style={[tw``, {color: '#Ffffff'}]}>See more</Text>
      </View>
      <ScrollView style={tw``} showsVerticalScrollIndicator={true}>
        {tradingHistory.map(({id}) => (
          <View
            style={tw`flex-column  mb-8 justify-center items-between text-center px-4`}
            key={id}>
            <View style={tw`flex-row items-center justify-between`}>
              <View style={tw`px-2`}>
                <Text style={tw`text-white text-base text-medium  py-2`}>
                  ETH
                </Text>
                <Text
                  style={tw`text-green-500 py-1 px-1.5 max-w-min text-xs bg-white rounded-full text-right`}>
                  Succeed
                </Text>
                <Text
                  style={tw`text-white text-base  text-medium text-center py-2`}>
                  ID 83983
                </Text>
              </View>
              <View>
                <Text style={tw`text-white text-sm py-2`}>Amount 4030.32</Text>
                <Text style={tw`text-white text-sm py-2`}>
                  Type <Text style={tw`text-orange-500`}>Transfer</Text>
                </Text>
              </View>

              <View style={tw`px-2 flex-col items-end`}>
                <Text
                  style={tw`text-white text-sm font-bold text-medium text-center py-2`}>
                  18-06-20
                </Text>
                <Text
                  style={tw`text-white text-sm font-bold text-medium text-center py-2`}>
                  12:37:42
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};
