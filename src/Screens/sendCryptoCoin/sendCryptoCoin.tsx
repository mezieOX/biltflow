/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View, Alert } from 'react-native';
import { s as tw } from 'react-native-wind';
import { Button, TextInputComp, TopSection } from '../../components';
import { INavigationSetting } from '../../navigation/type';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { getWalletBalance, sendCrypto } from '../../APIs/api';

type RouteParams = {
  params: {
    coinType: string;
  };
};

export const SendCryptoCoin = () => {
  const navigation = useNavigation<INavigationSetting>();
  const route = useRoute<RouteProp<RouteParams, 'params'>>();
  const { coinType } = route.params;
  const [balance, setBalance] = useState<number>(0);
  const [recipientAddress, setRecipientAddress] = useState<string>('');
  const [amount, setAmount] = useState<number | string>('');
  const [note, setNote] = useState<string>('');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const fetchedBalance = await getWalletBalance(coinType);
        setBalance(fetchedBalance);
      } catch (error) {
        console.error('Error fetching wallet balance:', error);
      }
    };

    fetchBalance();
  }, [coinType]);

  const handleSend = async () => {
    if (!recipientAddress || !amount || isNaN(Number(amount))) {
      Alert.alert('Error', 'Please enter valid recipient address and amount.');
      return;
    }

    try {
      await sendCrypto(coinType, recipientAddress, Number(amount), note);
      navigation.navigate('CongratulationScreen', {
        title: 'You’ve Successfully',
        description:
          'You have sent cryptocurrency from your wallet to the recipient address entered.',
        btnText: 'Go to account',
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to send cryptocurrency.');
      console.error('Error sending crypto:', error);
    }
  };

  return (
    <View style={[tw`flex-1 bg-white`]}>
      <TopSection
        title={`Send ${coinType}`}
        searchIcon={false}
        settingsIcon={false}
      />
      <ScrollView style={tw`px-6`}>
        <Text style={tw`text-black py-2 text-base`}>Recipient</Text>
        <TextInputComp
          support
          placeholder={`${coinType} address`}
          value={recipientAddress}
          onChangeText={setRecipientAddress}
          iconRight={require('../../../assets/images/minus.png')}
        />
        <Text style={tw`text-black py-2 text-base`}>Sending From</Text>
        <TextInputComp
          support
          placeholder={coinType}
          iconRight={require('../../../assets/images/binance-coin.png')}
        />
        <Text style={tw`text-black py-2 text-base text-right font-bold`}>
          =₦ {balance}
        </Text>
        <View style={tw`flex-row justify-between items-end`}>
          <View style={tw`w-1/3`}>
            <Text style={tw`text-black py-2 text-base`}>Amount</Text>
            <TextInputComp
              support
              placeholder="0.00 ₦"
              value={amount.toString()}
              onChangeText={setAmount}
            />
          </View>
          <View style={tw`w-1/3`}>
            <TextInputComp support placeholder={`0.00 ${coinType}`} />
          </View>
        </View>
        <Text style={tw`text-black py-2 text-base`}>Note</Text>
        <TextInputComp
          support
          placeholder="Write an optional message"
          value={note}
          onChangeText={setNote}
        />
        <View style={tw`flex-row justify-between items-center py-5`}>
          <Text style={tw`text-black py-2 text-base text-right font-bold`}>
            Network Fee
          </Text>
          <Text style={tw`text-black py-2 text-base text-right font-bold`}>
            ₦ 00.00
          </Text>
        </View>
        <View style={tw`pt-4 pb-8`}>
          <Button
            onPress={handleSend}
            title={'Send'}
          />
        </View>
      </ScrollView>
    </View>
  );
};
