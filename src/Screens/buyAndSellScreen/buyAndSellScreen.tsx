import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Button, TextInputComp, TopSection} from '../../components';
import {useNavigation} from '@react-navigation/core';
import {INavigationSetting} from '../../navigation/type';
import {s as tw} from 'react-native-wind';
import {
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

const dataType = {
  mtn: {
    title: 'BTC',
    imgSrc: require('../../../assets/images/mtn-logo.png'),
  },
  airtel: {
    title: 'Airtel',
    imgSrc: require('../../../assets/images/airtel-logo.png'),
  },
  glo: {
    title: 'GLO',
    imgSrc: require('../../../assets/images/glo-logo.png'),
  },
  nine_mobile: {
    title: '9Mobile',
    imgSrc: require('../../../assets/images/glo-logo.png'),
  },
};

const BuyAndSellScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [buy, setBuy] = useState<boolean>(true);
  const bottomSheetConfirmBuyAndSellModalRef = useRef<BottomSheetModal>(null);
  const [paymentMethod, setPaymentMethod] = useState('');

  // variables
  const snapPoints = useMemo(() => ['25%', '40%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetConfirmBuyAndSellModalRef.current?.present();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#01041F'}}>
      <TopSection title="Buy & Sell" searchIcon={false} />
      <View
        style={{
          paddingHorizontal: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={tw`flex-row items-center`}>
          <TouchableOpacity onPress={() => setBuy(true)}>
            <Text
              style={[
                tw`border-white pb-2`,
                {
                  fontSize: 18,
                  color: buy ? '#ffffff' : 'rgba(170, 171, 176, 1)',
                },
              ]}>
              Buy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`mx-6`} onPress={() => setBuy(false)}>
            <Text
              style={[
                tw`border-white pb-2`,
                {
                  fontSize: 18,
                  color: !buy ? '#ffffff' : 'rgba(170, 171, 176, 1)',
                },
              ]}>
              Sell
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handlePresentModalPress}
          style={tw`flex-row items-center`}>
          <Text
            style={[
              tw`${!buy ? 'border-b-4' : ''} border-white pb-2`,
              {
                fontSize: 18,
                color: '#ffffff',
              },
            ]}>
            {dataType[paymentMethod]?.title || 'USD'}
          </Text>
          <Image
            style={tw`w-5 mb-2 h-5`}
            source={require('../../../assets/images/arrow-down.png')}
          />
        </TouchableOpacity>
      </View>
      {buy ? (
        <>
          <ScrollView horizontal style={tw`max-h-20`}>
            <View style={tw`flex-row items-center mx-6 my-4`}>
              <TouchableOpacity onPress={() => setBuy(true)}>
                <Text
                  style={[
                    tw`border-white pb-2`,
                    {
                      fontSize: 15,
                      color: buy ? '#ffffff' : 'rgba(170, 171, 176, 1)',
                    },
                  ]}>
                  USDT
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`mx-6`} onPress={() => setBuy(false)}>
                <Text
                  style={[
                    tw`border-white pb-2`,
                    {
                      fontSize: 15,
                      color: !buy ? '#ffffff' : 'rgba(170, 171, 176, 1)',
                    },
                  ]}>
                  USDC
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`mx-6`} onPress={() => setBuy(false)}>
                <Text
                  style={[
                    tw`border-white pb-2`,
                    {
                      fontSize: 15,
                      color: 'rgba(170, 171, 176, 1)',
                    },
                  ]}>
                  BTC
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`mx-6`} onPress={() => setBuy(false)}>
                <Text
                  style={[
                    tw`border-white pb-2`,
                    {
                      fontSize: 15,
                      color: 'rgba(170, 171, 176, 1)',
                    },
                  ]}>
                  Litecoin
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`mx-6`} onPress={() => setBuy(false)}>
                <Text
                  style={[
                    tw`border-white pb-2`,
                    {
                      fontSize: 15,
                      color: 'rgba(170, 171, 176, 1)',
                    },
                  ]}>
                  Tron
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={tw`flex-row items-center mx-6 mb-4`}>
            <TouchableOpacity style={tw`flex-row items-center`}>
              <Text
                style={[
                  tw`border-white pb-2`,
                  {
                    fontSize: 15,
                    color: 'rgba(170, 171, 176, 1)',
                  },
                ]}>
                Amount
              </Text>
              <Image
                style={tw`w-4 mb-2 h-4`}
                source={require('../../../assets/images/arrow-down.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={tw`mx-6`} onPress={() => setBuy(false)}>
              <Text
                style={[
                  tw`border-white pb-2`,
                  {
                    fontSize: 15,
                    color: !buy ? '#ffffff' : 'rgba(170, 171, 176, 1)',
                  },
                ]}>
                All Payment Methods
                <Image
                  style={tw`w-4 mb-2 h-4`}
                  source={require('../../../assets/images/arrow-down.png')}
                />
              </Text>
            </TouchableOpacity>
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
                  justifyContent: 'space-between',
                  gap: 8,
                }}>
                <View>
                  <View style={tw`flex-row items-center`}>
                    <Image
                      source={require('../../../assets/images/ethereum-logo.png')}
                    />
                    <View style={{justifyContent: 'space-between', padding: 6}}>
                      <Text style={{color: '#ffffff', fontSize: 16}}>Kcee</Text>
                      <Text style={{color: '#6C757D', fontSize: 10}}>
                        1m ago
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      justifyContent: 'space-between',
                      marginLeft: 'auto',
                      paddingTop: 4,
                    }}>
                    <Text style={{color: '#ffffff', fontSize: 16}}>$1,000</Text>

                    <Text style={{color: '#ffffff', fontSize: 13}}>
                      <Text style={{color: 'rgba(215, 208, 193, 1)'}}>
                        Quantity
                      </Text>{' '}
                      212.3085 USDT
                    </Text>
                    <Text style={{color: '#ffffff', fontSize: 13}}>
                      <Text style={{color: 'rgba(215, 208, 193, 1)'}}>
                        Limits
                      </Text>{' '}
                      100-1,000 USD
                    </Text>
                    <Text style={{color: 'rgba(215, 208, 193, 1)'}}>USDT</Text>
                  </View>
                </View>
                <Text
                  style={[
                    tw`text-white px-6 rounded-md py-2`,
                    {
                      backgroundColor: 'rgba(99, 209, 129, 1)',
                    },
                  ]}>
                  Buy
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <View style={{flex: 1}}>
            <BottomSheetModal
              ref={bottomSheetConfirmBuyAndSellModalRef}
              index={1}
              snapPoints={snapPoints}>
              <BottomSheetView style={{flex: 1}}>
                <Text style={tw`font-bold text-md text-center`}>
                  Payment Method
                </Text>
                <BottomSheetScrollView
                  style={{
                    paddingHorizontal: 20,
                  }}>
                  {[
                    {
                      title: 'BTC',
                      type: 'BTC',
                    },
                    {
                      title: 'USDT',
                      type: 'USDT',
                    },
                    {
                      title: 'Debit Card',
                      type: 'Debit Card',
                    },
                    {
                      title: 'USDC',
                      type: 'USDC',
                    },
                  ].map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setPaymentMethod(item.type);
                        bottomSheetConfirmBuyAndSellModalRef.current?.close();
                      }}
                      style={{
                        paddingVertical: 16,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1,
                        borderColor: '#EEEEF0',
                      }}>
                      <Text style={tw`text-lg`}>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
                </BottomSheetScrollView>
              </BottomSheetView>
            </BottomSheetModal>
          </View>
        </>
      ) : (
        <ScrollView
          style={{flex: 1, backgroundColor: '#01041F', paddingTop: 30}}>
          <TopSection title="Create Your Coin" searchIcon={false} />
          <View style={tw`px-4`}>
            <TextInputComp placeholder="ETH" label="Select Coin" />
            <TextInputComp placeholder="1,000 - 1,700" label="Limits" />
            <TextInputComp placeholder="0.023554" label="Quantity" />
            <TextInputComp placeholder="$1,000" label="Enter Amount" />

            <View style={tw`pt-4`}>
              <Button login title={'Done'} />
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default BuyAndSellScreen;
