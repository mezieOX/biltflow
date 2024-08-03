/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { s as tw } from 'react-native-wind';
import { Button, TopSection } from '../../components';
import { INavigationSetting } from '../../navigation/type';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { getCoinAddressWithQRCode } from '../../APIs/api';

type RouteParams = {
  params: {
    coinType: string;
  };
};

export const ReceiveCoinScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const route = useRoute<RouteProp<RouteParams, 'params'>>();
  const { coinType } = route.params;
  const [address, setAddress] = useState<string | null>(null);
  const [qrCode, setQRCode] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAddressAndQRCode = async () => {
      try {
        const data = await getCoinAddressWithQRCode(coinType);
        setAddress(data.address);
        setQRCode(data.qrCode);
      } catch (error) {
        console.error('Error fetching address and QR code:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAddressAndQRCode();
  }, [coinType]);

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
        title={`Receive ${coinType}`}
        searchIcon={false}
        settingsIcon={false}
      />
      <View style={tw`flex-column justify-center items-center pt-16`}>
        <Text style={tw`px-6 text-black text-base pb-4 text-xl`}>
          Scan QR Code
          </Text>
        {qrCode ? (
          <Image
            resizeMode="contain"
            style={tw`w-64 h-64`}
            source={{ uri: qrCode }}
          />
        ) : (
          <Text style={tw`text-black`}>QR code not available</Text>
        )}
        <Text style={tw`px-6 text-black text-base pb-4 text-xl`}>OR</Text>
        <View style={tw`flex-row min-w-full px-6 justify-between`}>
          <View>
            <Text style={tw`text-gray-500 text-base pb-4 text-lg`}>
              {coinType} Address
            </Text>
            <Text style={tw`text-black text-xs pb-4 text-lg`}>
              {address}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              // Logic to copy address to clipboard
            }}
            style={tw`w-20 text-center h-8 pt-1 text-black text-sm flex-row items-center justify-center border`}>
            <Text>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`px-4 pt-4`}>
        <Button
          onPress={() => {
            navigation.navigate('SendCryptoCoin');
          }}
          title={'Share Address'}
        />
      </View>
    </View>
  );
};
