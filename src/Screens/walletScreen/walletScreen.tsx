/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {Button} from '../../components';
import {useNavigation} from '@react-navigation/core';
import {INavigationSetting} from '../../navigation/type';

const recentTradingHistory = [
  {id: 1, title: 'Ethereum', description: '0.0004586 ETH'},
];

export const WalletScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <View style={{flex: 1, backgroundColor: '#01041F'}}>
      <TopSection title="Buy & Sell" searchIcon={false} />
      <View style={tw`mx-4`}>
        <Text style={tw`text-white pt-8 pb-4 text-center text-2xl font-bold`}>
          My wallet
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={tw``}>
        <View style={tw`mx-4`}>
          <View
            style={[
              tw`h-44 w-full rounded-3xl px-4 mt-8 mb-4 rounded-br-3xl`,
              {backgroundColor: 'rgba(229, 119, 14, 1)'},
            ]}>
            <Text style={tw`text-white text-center py-6 text-lg`}>
              Total portfolio balance
            </Text>
            <Text style={tw`text-white text-center text-2xl font-bold`}>
              $41, 000
            </Text>
            <View style={tw`flex-row items-center justify-center`}>
              <Text
                style={tw`text-white text-center py-1 text-base text-green-500`}>
                + $19.25 for today
              </Text>
            </View>
          </View>
          <View style={tw`mb-10 flex-row`}>
            <Button onPress={() => {}} login title={'Cards'} />
          </View>
          <Image
            source={require('../../../assets/images/credit-card-2.png')}
            resizeMode="contain"
            style={tw`h-60  w-full`}
          />
          <View style={tw`mb-10 flex-row`}>
            <Button onPress={() => {}} login title={'Add Card'} />
          </View>
          <View style={tw`pb-8 flex-row justify-between items-center`}>
            <Text style={tw`font-bold text-lg text-white`}>Your Coin</Text>
            <Text
              onPress={() => navigation.navigate('CreateCoinScreen')}
              style={[tw`text-orange-500`]}>
              Add Coin
            </Text>
          </View>
        </View>
        <View style={[tw`mb-24`]}>
          {recentTradingHistory.map(({id}) => (
            <View
              style={[
                tw`flex-column mb-8 py-4 rounded-xl justify-center mx-4 px-1 items-between text-center`,
                [
                  {
                    shadowOpacity: 2,
                    shadowRadius: 2,
                    shadowColor: '#000',
                    elevation: 2, // This is for Android
                    shadowOffset: {height: 0, width: 0},
                    backgroundColor: '#fff',
                  },
                ],
              ]}
              key={id}>
              <View style={tw`flex-row items-center justify-between `}>
                <View style={tw`px-2 flex-row items-center`}>
                  <Image
                    style={tw`h-10 w-10`}
                    resizeMode="contain"
                    source={require('../../../assets/images/bitcoin.png')}
                  />
                  <View>
                    <Text style={tw`text-black text-lg p-2`}>Ethereum</Text>
                    <Text style={tw`text-gray-400 text-sm text-medium`}>
                      0.0004586 ETH
                    </Text>
                  </View>
                </View>
                <View style={tw`px-2 flex-col items-end`}>
                  <Text
                    style={tw`text-gray-400 text-sm text-medium text-center py-2`}>
                    ₦1,085.18
                  </Text>
                  <Text
                    style={tw`text-red-500 text-sm text-medium text-center`}>
                    -21.00%
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
