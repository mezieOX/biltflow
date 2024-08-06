/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import {s as tw} from 'react-native-wind';
import {INavigationSetting} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import {Button, TopSection} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScanIcon} from '../../../assets';
import BellIcon from '../../components/icons/BellIcon';
import QrCodeIcon from '../../components/icons/QrCodeIcon';
import {color} from '@rneui/base';
import TriangleUpIcon from '../../components/icons/TriangleUp';

const tradingHistory = [
  {
    id: 1,
    title: 'Hello',
    image: require('../../../assets/images/h1.png'),
    amount: '30',
    currency: '20',
    vol: '20%',
  },
];

const ListItems = [
  {
    id: 1,
    title: 'Buy & Sell',
    image: require('../../../assets/images/h1.png'),
    navigation: 'BuyAndSellCryptoScreen',
  },
  {
    id: 2,
    title: 'Send & Receive',
    image: require('../../../assets/images/h2.png'),
    navigation: 'SendAndRecieveCryptoScreen',
  },
  {
    id: 3,
    title: 'Pay Bills',
    image: require('../../../assets/images/h3.png'),
    navigation: 'BillPaymentScreen',
  },
  {
    id: 4,
    title: 'Withdraw',
    image: require('../../../assets/images/h4.png'),
    navigation: 'AddBankWithdrawalCard',
  },
];

export const HomeScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView
      style={[
        tw``,
        {backgroundColor: '#01041F', flex: 1, paddingHorizontal: 16},
      ]}>
      <ScrollView>
        <View
          style={{
            marginTop: 15,
            marginBottom: 27,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
              fontWeight: 'bold',
              // textAlign: 'center ',
              marginHorizontal: 'auto',
            }}>
            Home
          </Text>
          <ScanIcon />
          <BellIcon />
        </View>
        <View
          style={{
            borderRadius: 8,
            backgroundColor: '#B1C7FF',
            marginBottom: 22,
          }}>
          <Text style={[tw`text-white px-4 py-2 overflow-x-hidden`]}>
            Market Cap $780,091
          </Text>
        </View>

        <ImageBackground
          style={{
            width: '100%',
          }}
          imageStyle={{borderRadius: 12}}
          source={require('../../../assets/images/home-card-bg.png')}>
          <View style={{padding: 16}}>
            <QrCodeIcon />
            <Text
              style={[
                {
                  fontSize: 16,
                  color: '#fff',
                  fontWeight: '500',
                  textAlign: 'center',
                  marginTop: 7,
                },
              ]}>
              Total portfolio balance
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 24,
                fontWeight: '700',
                textAlign: 'center',
                marginTop: 2,
              }}>
              $41, 000
            </Text>
            <Text style={{color: '#00FFD1', textAlign: 'center'}}>
              + $19.25 for today
            </Text>
            <TouchableOpacity
              style={{
                marginLeft: 'auto',
                backgroundColor: '#fff',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 18,
                  color: '#E5770EB0',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Top Up
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <TouchableOpacity
          style={{
            backgroundColor: '#E5770EB0',
            padding: 8,
            borderRadius: 8,
            marginVertical: 16,
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff'}}>Market Statistics</Text>
        </TouchableOpacity>
        <ScrollView horizontal contentContainerStyle={{gap: 12}}>
          <HomeCard type="loss" />
          <HomeCard type="gain" />
        </ScrollView>
        <View style={tw`py-8 flex-row justify-between items-center`}>
          <Text style={tw`font-bold text-lg text-white`}>Features</Text>
          <Text
            onPress={() =>
              navigation.navigate('BillPaymentScreen', {
                features: 'features',
              })
            }
            style={[tw``, {color: '#Ffffff'}]}>
            View all
          </Text>
        </View>
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          ]}>
          {ListItems.map(({id, title, image, navigation: push}) => (
            <TouchableOpacity
              onPress={() => {
                if (push) {
                  navigation.navigate(push as any);
                }
                // navigation.navigate('BillPaymentScreen', {
                //   features: 'bill-payment',
                // });
              }}
              key={id}
              style={tw`flex-col items-center text-center`}>
              <Image
                source={image}
                style={{
                  width: 50,
                  height: 50,
                }}
                resizeMode="contain"
              />
              <Text style={tw`text-white pt-1`}>{title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View
          style={[
            tw`px-4 py-2 flex-row  my-8 rounded-xl justify-between items-center`,
            {backgroundColor: 'rgba(150, 111, 74, 1)'},
          ]}>
          <Text style={tw`font-bold text-lg text-white`}>
            Recent Transactions
          </Text>
          <Text style={[tw``, {color: '#Ffffff'}]}>See more</Text>
        </View>
        <ScrollView style={tw``} showsVerticalScrollIndicator={true}>
          {tradingHistory.map(({id}) => (
            <View
              style={tw`flex-column  mb-8 justify-center items-between text-center px-4`}
              key={id}>
              <View style={tw`flex-row items-center justify-between`}>
                <View style={tw`px-2`}>
                  <Text style={tw`text-white text-base text-medium  py-2`}>
                    ETH
                  </Text>
                  <Text
                    style={tw`text-green-500 py-1 px-1.5 max-w-min text-xs bg-white rounded-full text-right`}>
                    Succeed
                  </Text>
                  <Text
                    style={tw`text-white text-base  text-medium text-center py-2`}>
                    ID 83983
                  </Text>
                </View>
                <View>
                  <Text style={tw`text-white text-sm py-2`}>
                    Amount 4030.32
                  </Text>
                  <Text style={tw`text-white text-sm py-2`}>
                    Type <Text style={tw`text-orange-500`}>Transfer</Text>
                  </Text>
                </View>

                <View style={tw`px-2 flex-col items-end`}>
                  <Text
                    style={tw`text-white text-sm font-bold text-medium text-center py-2`}>
                    18-06-20
                  </Text>
                  <Text
                    style={tw`text-white text-sm font-bold text-medium text-center py-2`}>
                    12:37:42
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

function HomeCard({type}: {type: 'loss' | 'gain'}) {
  const {width} = useWindowDimensions();
  return (
    <ImageBackground
      style={{width: width * 0.5}}
      imageStyle={{borderRadius: 8}}
      source={
        type == 'loss'
          ? require('../../../assets/images/loss-card.png')
          : require('../../../assets/images/gain-card.png')
      }>
      <View style={{padding: 12}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Image
              source={require('../../../assets/images/ethereum-logo.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
            <Text style={{fontSize: 12, color: '#fff', fontWeight: '700'}}>
              Ethereum
            </Text>
          </View>
          <View style={{marginTop: 8}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: '700',
              }}>
              355.01
              <Text style={tw`text-xs`}>ETH</Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Text style={{color: '#00FFD1'}}>+ 0.25%</Text>
              <TriangleUpIcon />
            </View>
          </View>
        </View>
      </View>
      <Image
        source={
          type === 'loss'
            ? require('../../../assets/images/loss-graph.png')
            : require('../../../assets/images/gain-graph.png')
        }
        // resizeMode="contain"
        resizeMode="cover"
        style={{
          width: '100%',
          marginTop: 18,
        }}
      />
    </ImageBackground>
  );
}
