import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {TopSection} from '../../components';
import {useNavigation} from '@react-navigation/core';
import {INavigationSetting} from '../../navigation/type';

const SendAndReceiveCryptoScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <View style={{flex: 1, backgroundColor: '#01041F'}}>
      <TopSection title="Send & Receive" searchIcon={false} />
      <View
        style={{
          paddingHorizontal: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20, color: '#ffff'}}>Select</Text>
        <Text
          onPress={() => navigation.navigate('CreateCoinScreen')}
          style={{color: '#E5770E', fontSize: 16}}>
          Add Coins
        </Text>
      </View>
      <ScrollView
        style={{
          paddingHorizontal: 24,
          marginTop: 28,
          flex: 1,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SendAndReceiveOptionCryptoScreen')
          }>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            <Image
              source={require('../../../assets/images/ethereum-logo.png')}
            />
            <View style={{justifyContent: 'space-between'}}>
              <Text style={{color: '#212529', fontSize: 16}}>Ethereum</Text>
              <Text style={{color: '#6C757D', fontSize: 10}}>
                0.0000000001 ETH
              </Text>
            </View>
            <Image
              source={require('../../../assets/images/trade-graph.png')}
              style={{marginHorizontal: 'auto'}}
            />
            <View style={{justifyContent: 'space-between', marginLeft: 'auto'}}>
              <Text style={{color: '#212529', fontSize: 16}}>₦1,085.18</Text>
              <Text style={{color: '#D90429', fontSize: 10}}>-21.00%</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SendAndReceiveCryptoScreen;
