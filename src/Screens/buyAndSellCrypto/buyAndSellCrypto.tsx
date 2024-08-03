/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { s as tw } from 'react-native-wind';
import { useNavigation, useRoute } from '@react-navigation/native';
import { INavigationSetting } from '../../navigation/type';
import { Button, TopSection } from '../../components';
import { getCryptoPrice, buyCrypto, sellCrypto } from '../../APIs/api'; // Import API functions

const ListItems = [
  {
    id: 1,
    text: 'Current price',
  },
  {
    id: 2,
    text: 'Market price',
  },
  {
    id: 3,
    text: 'Volume 24h',
  },
  {
    id: 4,
    text: 'Available supply',
  },
  {
    id: 5,
    text: 'Max supply',
  },
  {
    id: 6,
    text: 'Volume 1d',
  },
];

const TimeFrame = [
  {
    id: 1,
    title: '1h',
  },
  {
    id: 2,
    title: '1d',
  },
  {
    id: 3,
    title: '1w',
  },
  {
    id: 4,
    title: '1m',
  },
  {
    id: 5,
    title: '1y',
  },
];

export const BuyAndSellCryptoScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const route = useRoute();
  const { crypto } = route.params;

  const [currentPrice, setCurrentPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchCryptoPrice = async () => {
      try {
        const priceData = await getCryptoPrice(crypto.type);
        setCurrentPrice(priceData.price);
      } catch (error) {
        console.error('Error fetching crypto price:', error);
      }
    };

    fetchCryptoPrice();
  }, [crypto.type]);

  const handleBuyCrypto = async () => {
    try {
      const userId = 'user123'; // Replace with the actual user ID
      const amount = 1; // Replace with the actual amount
      const response = await buyCrypto(userId, crypto.type, amount);
      Alert.alert('Success', 'Crypto bought successfully');
    } catch (error) {
      console.error('Error buying crypto:', error);
      Alert.alert('Error', 'Failed to buy crypto');
    }
  };

  const handleSellCrypto = async () => {
    try {
      const userId = 'user123'; // Replace with the actual user ID
      const amount = 1; // Replace with the actual amount
      const response = await sellCrypto(userId, crypto.type, amount);
      Alert.alert('Success', 'Crypto sold successfully');
    } catch (error) {
      console.error('Error selling crypto:', error);
      Alert.alert('Error', 'Failed to sell crypto');
    }
  };

  return (
    <View style={[tw`flex-1 bg-white`]}>
      <TopSection title={crypto.type} searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={[tw`text-2xl px-4 font-bold text-black font-medium`]}>
            {currentPrice ? `₦${currentPrice}` : 'Loading...'}
          </Text>
        </View>
        <View style={tw`flex-row items-center mt-2 justify-start`}>
          {TimeFrame.map(({ id, title }) => (
            <Text
              key={id}
              style={[tw`text-base px-3 font-bold text-black font-medium`]}
            >
              {title}
            </Text>
          ))}
        </View>

        <View style={tw`px-4`}>
          <Image
            resizeMode="contain"
            style={tw`h-60 w-full`}
            source={require('../../../assets/images/trading-chart.png')}
          />
        </View>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={[tw`text-xl px-4 font-black text-black font-medium`]}>
            Statics
          </Text>
        </View>
        <View style={tw`pb-6 px-4`}>
          {/* Replace with actual stat items */}
        </View>
        <View style={tw`py-10 px-4 flex-row items-center`}>
          <Text
            style={[
              tw`border rounded-lg flex-1 mr-2 flex-row justify-center text-center py-3 text-lg`,
              {
                color: '#0A352C',
                borderColor: '#0A352C',
              },
            ]}
            onPress={handleSellCrypto}
          >
            Sell
          </Text>
          <Text
            style={[
              tw`border rounded-lg flex-1 ml-1 flex-row justify-center text-center py-3 text-lg`,
              {
                color: '#ffffff',
                backgroundColor: '#0A352C',
              },
            ]}
            onPress={handleBuyCrypto}
          >
            Buy
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
