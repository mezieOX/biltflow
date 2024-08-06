/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation, useRoute} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {Button, TopSection} from '../../components';
import {getCryptoPrice, buyCrypto, sellCrypto} from '../../APIs/api'; // Import API functions
import ArrowDownIcon from '../../components/icons/ArrowDownIcon';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

export const BuyAndSellCryptoScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const route = useRoute();
  // const { crypto } = route.params;

  // const [currentPrice, setCurrentPrice] = useState<number | null>(null);

  // useEffect(() => {
  //   const fetchCryptoPrice = async () => {
  //     try {
  //       const priceData = await getCryptoPrice(crypto.type);
  //       setCurrentPrice(priceData.price);
  //     } catch (error) {
  //       console.error('Error fetching crypto price:', error);
  //     }
  //   };

  //   fetchCryptoPrice();
  // }, [crypto.type]);

  // const handleBuyCrypto = async () => {
  //   try {
  //     const userId = 'user123'; // Replace with the actual user ID
  //     const amount = 1; // Replace with the actual amount
  //     const response = await buyCrypto(userId, crypto.type, amount);
  //     Alert.alert('Success', 'Crypto bought successfully');
  //   } catch (error) {
  //     console.error('Error buying crypto:', error);
  //     Alert.alert('Error', 'Failed to buy crypto');
  //   }
  // };

  // const handleSellCrypto = async () => {
  //   try {
  //     const userId = 'user123'; // Replace with the actual user ID
  //     const amount = 1; // Replace with the actual amount
  //     const response = await sellCrypto(userId, crypto.type, amount);
  //     Alert.alert('Success', 'Crypto sold successfully');
  //   } catch (error) {
  //     console.error('Error selling crypto:', error);
  //     Alert.alert('Error', 'Failed to sell crypto');
  //   }
  // };

  const [currentTab, setCurrentTab] = useState<'buy' | 'sell'>('buy');
  const [coinType, setCoinType] = useState<string>('USDT');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  return (
    <View
      style={[
        tw`flex-1 bg-white`,
        {
          backgroundColor: '#01041F',
          paddingHorizontal: 24,
          paddingTop: 10,
        },
      ]}>
      <TopSection title="Buy & Sell" searchIcon={false} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 24,
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={() => setCurrentTab('buy')}>
          <Text
            style={[
              styles.headerTitle,
              {
                color: currentTab === 'buy' ? '#AAABB0' : '#fff',
              },
            ]}>
            Buy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentTab('sell');
            navigation.navigate('SellCryptoScreen' as any);
          }}>
          <Text
            style={[
              styles.headerTitle,
              {
                color: currentTab === 'sell' ? '#AAABB0' : '#fff',
              },
            ]}>
            Sell
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 'auto',
          }}>
          <TouchableOpacity>
            <Text style={[styles.headerTitle]}>USD</Text>
          </TouchableOpacity>
          <ArrowDownIcon />
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 20, marginTop: 10}}>
        {['USDT', 'USDC', 'BTC', 'LiteCoin', 'Tron'].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setCoinType(item);
            }}>
            <Text
              key={index}
              style={[
                tw`text-white text-lg font-bold`,
                {fontSize: 14},
                {
                  color: coinType === item ? '#AAABB0' : '#FFF',
                },
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={[1, 2, 3]}
        contentContainerStyle={{gap: 20, marginTop: 24}}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{gap: 2}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                <View style={styles.profileIcon}>
                  <Text
                    style={[
                      {
                        fontSize: 14,
                        fontWeight: '700',
                      },
                    ]}>
                    K
                  </Text>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                  <Text style={[styles.text, {fontSize: 13}]}>Kcee</Text>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 10,
                      },
                    ]}>
                    5 min ago
                  </Text>
                </View>
              </View>
              <Text style={[styles.text, {fontWeight: '700'}]}>$1,000</Text>
              <View style={{flexDirection: 'row', gap: 4}}>
                <Text style={[styles.text]}>Quantity</Text>
                <Text style={[styles.text]}>222.3085 USDT</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 4}}>
                <Text style={[styles.text]}>Limits</Text>
                <Text style={[styles.text]}>100-1,500 USD</Text>
              </View>
              <View style={{borderLeftWidth: 2, borderColor: '#F7A701'}}>
                <Text style={[styles.text, {fontWeight: '700', marginLeft: 4}]}>
                  USDT
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                bottomSheetModalRef.current?.present();
              }}
              style={{backgroundColor: '#63D181', borderRadius: 5}}>
              <Text
                style={[
                  styles.text,
                  {
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                    fontWeight: '700',
                  },
                ]}>
                Buy
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View>
        <BottomSheetModal
          backdropComponent={BottomSheetBackdrop}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={['25%', '30%']}>
          <BottomSheetView>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '700',
                  marginTop: 20,
                }}>
                Payment Method
              </Text>
              <TouchableOpacity
                onPress={() => {
                  bottomSheetModalRef.current?.dismiss();
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 15,
                  borderBottomWidth: 1,
                  borderColor: '#EEEEF0',
                  paddingVertical: 10,
                }}>
                <Text style={{fontSize: 18}}>BTC</Text>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require('../../../assets/images/bitcoin.png')}
                />
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
  profileIcon: {
    backgroundColor: '#F7A701',
    alignSelf: 'flex-start',
    borderRadius: 30,
    padding: 8,
    paddingVertical: 4,
  },
});
