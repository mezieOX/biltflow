/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { s as tw } from 'react-native-wind';
import { TopSection } from '../../components';
import { ArrowRightIcon, TradingIconIndicator } from '../../../assets';
import { INavigationSetting } from '../../navigation/type';
import { useNavigation } from '@react-navigation/native';
import { getMarketData } from '../../APIs/api';

export const ChooseCryptoScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [marketData, setMarketData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMarketData();
        setMarketData(data);
      } catch (error) {
        console.error('Error fetching market data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCryptoPress = (crypto) => {
    setSelectedCrypto(crypto);
    navigation.navigate('BuyAndSellCryptoScreen', { crypto });
  };

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={[tw`flex-1 bg-white`]}>
      <TopSection
        title="Choose Crypto"
        searchIcon={false}
        settingsIcon={false}
      />
      <Text style={tw`px-6 text-black text-base pb-4`}>
        What kind of Coins would you like to buy or sell today
      </Text>
      <ScrollView style={tw`px-4 py-6`} showsVerticalScrollIndicator={false}>
        {marketData.map((item) => (
          <TouchableOpacity
            onPress={() => handleCryptoPress(item)}
            key={item.id}
            style={tw`flex-row justify-between p-4 rounded-lg items-center mb-2`}
          >
            <View style={tw`flex-row items-center`}>
              <Image
                source={{uri: item.imageUrl}} // Assuming your API provides an image URL for each item
                style={tw`w-9 h-9`}
                resizeMode="contain"
              />
              <View style={tw`flex-column items-start px-4`}>
                <Text style={[tw`text-black font-medium text-base`]}>
                  {item.type}
                </Text>
              </View>
            </View>
            <View>
              <View style={tw`flex-column items-start`}>
                <ArrowRightIcon />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
