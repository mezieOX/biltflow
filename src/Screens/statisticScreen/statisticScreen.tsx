/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import {s as tw} from 'react-native-wind';
import {SearchInputComp, TopSection} from '../../components';
import {TradingIconIndicator} from '../../../assets';
import {INavigationSetting} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';

export const StatisticsScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [marketData] = useState<Array<any>>([
    {
      id: 1,
    },
  ]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  if (loading) {
    return (
      <View style={[tw`flex-1 justify-center items-center`]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={[tw`flex-1 bg-white`, {backgroundColor: '#01041F'}]}>
      <TopSection title="Markets" />
      <View style={tw`flex-row px-4 items-center`}>
        <SearchInputComp placeholder="Search markets" />
        <Text style={[tw`text-lg px-8`]}>Futures</Text>
      </View>
      <View style={tw`px-4 pt-8 pb-4 flex-row items-center justify-between`}>
        <Text style={[tw`text-white`]}>Market</Text>
        <Text style={[tw`text-white`]}>
          Price
          <TradingIconIndicator />
        </Text>
      </View>

      <ScrollView style={tw`px-4 py-2`} showsVerticalScrollIndicator={false}>
        {marketData.map(({id}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('TransactionScreen')}
            key={id}
            style={tw`flex-row justify-between items-center mb-8`}>
            <View style={tw`flex-row items-center`}>
              <Image
                style={tw`h-10 w-10`}
                resizeMode="contain"
                source={require('../../../assets/images/bitcoin.png')}
              />
              <View style={tw`flex-column items-start mx-2`}>
                <Text style={[tw`text-white`]}>BTC-USDC</Text>
              </View>
            </View>
            <View
              style={[tw`flex-column items-center justify-center rounded-sm`]}>
              <Text style={tw`text-white text-base py-1 px-4`}>$0.0000</Text>
              <Text style={tw`text-white text-green-500 text-base py-1 px-4`}>
                -0.09%
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
