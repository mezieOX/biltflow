/* eslint-disable prettier/prettier */
<<<<<<< HEAD
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { s as tw } from 'react-native-wind';
import { useNavigation } from '@react-navigation/native';
import { INavigationSetting } from '../../navigation/type';
import { Button, TextInputComp } from '../../components';
import { addWithdrawal } from '../../APIs/api';
=======
import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {Button, TextInputComp} from '../../components';
// import { addWithdrawal } from '../../APIs/api';
>>>>>>> origin/bidemi-project

export const AddWithdrawalBank = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [accountNumber, setAccountNumber] = useState('');
  const [bankCode, setBankCode] = useState('');
  const [amount, setAmount] = useState('');

  const handleWithdraw = async () => {
    if (!accountNumber || !bankCode || !amount) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
<<<<<<< HEAD
      const response = await addWithdrawal(accountNumber, bankCode, parseFloat(amount));
=======
      // const response = await addWithdrawal(accountNumber, bankCode, parseFloat(amount));
>>>>>>> origin/bidemi-project
      Alert.alert('Success', 'Withdrawal successful.');
      navigation.navigate('AddBankWithdrawalCard'); // Navigate to the next screen after successful withdrawal
    } catch (error) {
      Alert.alert('Error', 'Failed to process withdrawal.');
    }
  };

  return (
    <View style={[tw`flex-1 bg-white`]}>
      <View style={tw`mx-4`}>
        <Text style={tw`text-black pt-8 pb-4 text-center text-2xl font-bold`}>
          Withdrawal
        </Text>
      </View>
      <Text style={tw`text-black pt-10 pb-6 px-6 font-medium text-lg`}>
        Recipient Account
      </Text>
      <View style={tw`mx-6 px-4 pb-10 border rounded-lg`}>
        <TextInputComp
          placeholder="Enter 10 digits Account Number"
          keyboardType="numeric"
<<<<<<< HEAD
          value={accountNumber}
          onChangeText={setAccountNumber}
        />
        <Text style={tw`text-black pt-4`}>Select Bank</Text>
        <TextInputComp
          placeholder="Enter Bank Code"
          value={bankCode}
          onChangeText={setBankCode}
        />
        <Text style={tw`text-black pt-4`}>Enter Amount</Text>
        <TextInputComp
          placeholder="Enter Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>
      <View style={tw`pt-20 px-6`}>
        <Button
          onPress={handleWithdraw}
          title={'Withdraw'}
        />
=======
        />
        <Text style={tw`text-black pt-4`}>Select Bank</Text>
        <TextInputComp placeholder="Enter Bank Code" />
        <Text style={tw`text-black pt-4`}>Enter Amount</Text>
        <TextInputComp placeholder="Enter Amount" keyboardType="numeric" />
      </View>
      <View style={tw`pt-20 px-6`}>
        <Button onPress={handleWithdraw} title={'Withdraw'} />
>>>>>>> origin/bidemi-project
      </View>
    </View>
  );
};
