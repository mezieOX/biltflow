import React from 'react';
import {Image, Text, View} from 'react-native';
import {TopSection} from '../../components';
import {s as tw} from 'react-native-wind';

export const ScanScreen = () => {
  return (
    <View style={[tw`flex-1`, {backgroundColor: '#01041F'}]}>
      <TopSection settingsIcon={false} title="Scan" searchIcon={true} />
      <Text style={tw`text-white text-center`}>
        Align QR Code within the frame area to scan.
      </Text>
      <View style={tw`mx-4 my-20 flex-col justify-center items-center`}>
        <Image
          source={require('../../../assets/images/scan-qrcode.png')}
          resizeMode="contain"
          style={tw`h-60  w-full`}
        />
        <Text style={tw`text-white text-center mt-20`}>
          Scanning will start automatically.
        </Text>
        <Text
          style={[
            tw`w-1/2 py-4 text-center my-8 text-white`,
            {backgroundColor: 'rgba(84, 94, 83, 1)'},
          ]}>
          Cancel
        </Text>
      </View>
    </View>
  );
};
