import React from 'react';
import {Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {TopSection} from '../../components';

export const AboutScreen = () => {
  return (
    <View style={[tw`flex-1 bg-white`]}>
      <TopSection title="About" searchIcon={false} settingsIcon={false} />
      <Text style={tw`px-6 text-black text-base pb-4`}>
        Rigzo is a versatile crypto app designed to streamline cryptocurrency
        trading and investment. It offers a user-friendly interface, allowing
        users to buy, sell, and manage their digital assets with ease. With
        features like real-time market data, customizable alerts, and secure
        wallet integration, Rigzo empowers both novice and experienced traders
        to navigate the complexities of the crypto market confidently.
        Additionally, Rigzo provides educational resources and analysis tools to
        help users make informed decisions. Its commitment to security ensures
        that users' funds and personal information are safeguarded against cyber
        threats. Whether you're looking to diversify your investment portfolio
        or simply explore the world of cryptocurrencies, Rigzo serves as a
        reliable companion on your financial journey.
      </Text>
    </View>
  );
};
