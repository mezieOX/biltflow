/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { s as tw } from 'react-native-wind';
import { TopSection } from '../../components';
import { INavigationSetting } from '../../navigation/type';
import { useNavigation } from '@react-navigation/native';
import { getTransactions } from '../../APIs/api';

export const TransactionScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <View style={[tw`flex-1 bg-white`]}>
      <TopSection title="Transactions" settingsIcon={false} searchIcon />

      <ScrollView style={tw`px-4 py-6`} showsVerticalScrollIndicator={false}>
        {transactions.map(({ id, gain, loss, num, profit, type, vol, percent, date, status }) => (
          <React.Fragment key={id}>
            <Text style={tw`font-bold pb-4 text-black`}>March</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChooseCryptoScreen')}
              style={tw`flex-row justify-between bg-gray-100 p-4 rounded-lg items-center mb-2`}>
              <View style={tw`flex-row items-center`}>
                <Image
                  source={require('../../../assets/images/receive-transaction.png')}
                  style={tw`w-9 h-9`}
                  resizeMode="contain"
                />
                <View style={tw`flex-column items-start px-2`}>
                  <Text style={[tw`text-black font-bold`]}>{status}</Text>
                  <Text style={[tw``]}>{date}</Text>
                </View>
              </View>
              <View>
                <View style={tw`flex-column items-start`}>
                  <Text style={[tw`font-bold text-black`]}>{loss}</Text>
                  <Text style={[tw``]}>{gain}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};
