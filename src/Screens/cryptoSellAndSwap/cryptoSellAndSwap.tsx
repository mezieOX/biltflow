/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, ScrollView, Text, View, Alert} from 'react-native';
import {Button, TopSection} from '../../components';
import {s as tw} from 'react-native-wind';
import {ArrowFillDownIcon} from '../../../assets/svgIcons';
import {INavigationSetting} from '../../navigation/type';
import {useNavigation, useRoute} from '@react-navigation/native';

interface ICryptoSwap {
  title?: string;
  btnText?: string;
  crypto: string;
}

export const CryptoSellAndSwap = () => {
  const route = useRoute();
  const navigation = useNavigation<INavigationSetting>();
  const {title, btnText = '', crypto} = (route.params as ICryptoSwap) || {};
  const [swapAmount] = useState<string>('0.0000');

  const handleSwapCrypto = async () => {
    try {
      Alert.alert('Success', 'Crypto swapped successfully');
      navigation.navigate('CongratulationScreen', {
        title: 'Swap Successful',
        description: `${swapAmount} ${crypto}`,
        btnText: 'Go to account',
        path: 'AddMoneyScreen',
      });
    } catch (error) {
      console.error('Error swapping crypto:', error);
      Alert.alert('Error', 'Failed to swap crypto');
    }
  };

  return (
    <View style={[tw`flex-1 bg-white`]}>
      <TopSection title={title ? title : 'Swap Crypto'} searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[tw`font-bold text-2xl px-4 text-black`]}>
          Choose your crypto
        </Text>
        <View
          style={[
            tw`flex-row justify-between rounded-xl items-center py-6 m-4 pr-5`,
            {backgroundColor: '#E5E5E5'},
          ]}>
          <View style={tw`flex-row justify-between items-center`}>
            {/* <Image
              resizeMode="contain"
              style={tw`h-10 w-10 mx-4`}
              source={require(`../../../assets/images/crypto-swap.png`)}
            /> */}
            <Text style={[tw`font-bold text-2xl text-black`]}>{crypto}</Text>
          </View>
          <ArrowFillDownIcon />
        </View>
        <Text style={[tw`font-bold text-xl px-4 text-black`]}>Amount</Text>
        <View
          style={[
            tw`flex-row justify-between rounded-xl items-center py-6 m-4 pr-5`,
            {backgroundColor: '#E5E5E5'},
          ]}>
          <View style={tw`flex-row justify-between items-center`}>
            {/* <Image
              resizeMode="contain"
              style={tw`h-10 w-10 mx-4`}
              source={require(`../../../assets/images/crypto-swap.png`)}
            /> */}
            <Text style={[tw`font-bold text-2xl text-black`]}>{crypto}</Text>
          </View>
          <Text style={[tw`font-semibold text-lg`]}>
            0.0000
            <Text style={[tw`font-bold text-lg`]}>32.157</Text>
          </Text>
        </View>
        <Text style={[tw`font-semibold text-lg px-4`]}>
          Available Balance:{' '}
          <Text style={[tw`font-bold text-lg text-black`]}>1,247.30 USDT</Text>
        </Text>
        <View style={tw`flex-row justify-center my-5`}>
          <Image
            resizeMode="contain"
            style={tw`h-16 w-16 mx-4`}
            source={require('../../../assets/images/transact.png')}
          />
        </View>

        <View
          style={[
            tw`flex-row justify-between items-center  rounded-xl py-6 m-4 pr-5`,
            {backgroundColor: '#E5E5E5'},
          ]}>
          <View style={[tw`flex-row justify-between items-center`]}>
            <Image
              resizeMode="contain"
              style={tw`h-10 w-10 mx-4`}
              source={require(`../../../assets/images/transact-btc.png`)}
            />
            <Text style={[tw`font-bold text-2xl text-black`]}>BTC</Text>
          </View>
          <Text style={[tw`font-semibold text-lg`]}>
            0.0000
            <Text style={[tw`font-bold text-lg text-black`]}>32.157</Text>
          </Text>
        </View>
        <View style={tw`py-10 px-4`}>
          <Button
            onPress={handleSwapCrypto}
            title={btnText ? btnText : 'Swap Crypto'}
          />
        </View>
      </ScrollView>
    </View>
  );
};
