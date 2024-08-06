import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {s as tw} from 'react-native-wind';
import {Button, TextInputComp, TopSection} from '../../components';
import AppKeypad from '../../components/KeyPad';

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

const dataType = {
  mtn: {
    title: 'BetNaija',
    imgSrc: require('../../../assets/images/betnaija.png'),
  },
  airtel: {
    title: 'BetKing',
    imgSrc: require('../../../assets/images/betking.png'),
  },
  glo: {
    title: 'SportBet',
    imgSrc: require('../../../assets/images/sportbet.png'),
  },
  nine_mobile: {
    title: 'HitBet',
    imgSrc: require('../../../assets/images/hibet.png'),
  },
};

const BettingScreen = () => {
  const navigation = useNavigation();
  const {bottom} = useSafeAreaInsets();
  const [airtimeType, setAirtimeType] = useState('');

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetPayModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetConfirmPayModalRef = useRef<BottomSheetModal>(null);
  const [password, setPassword] = useState('');
  // variables
  const snapPoints = useMemo(() => ['25%', '40%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        <TopSection ngnIcon title="Betting" searchIcon={false} />
        <View style={{paddingHorizontal: 16}}>
          <View
            style={[
              tw`mx-auto`,
              {
                backgroundColor: '#E8780F',
                marginHorizontal: 'auto',
                paddingVertical: 8,
                paddingHorizontal: 30,
                borderRadius: 8,
              },
            ]}>
            <Text style={tw`text-white text-sm`}>
              Total Balance: ₦1,565,520.57
            </Text>
          </View>
          <View style={{marginTop: 40, gap: 20}}>
            <View>
              <>
                <TouchableOpacity onPress={handlePresentModalPress}>
                  <View
                    style={{
                      backgroundColor: '#fff',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: 11,
                      paddingVertical: 18,
                      borderRadius: 8,
                    }}>
                    <Text style={{fontSize: 16, color: '#808083'}}>
                      {dataType[airtimeType]?.title || 'Choose Provider'}
                    </Text>
                    {dataType[airtimeType]?.imgSrc && (
                      <Image
                        style={tw`w-5 h-5`}
                        source={dataType[airtimeType]?.imgSrc}
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={['50%', '55%']}>
                    <BottomSheetView style={{flex: 1}}>
                      <Text style={tw`font-bold text-md text-center`}>
                        Choose Betting Subscription
                      </Text>
                      <BottomSheetScrollView
                        style={{
                          paddingHorizontal: 20,
                        }}>
                        {[
                          {
                            title: 'BetNaija',
                            imgSrc: require('../../../assets/images/betnaija.png'),
                            type: 'mtn',
                          },
                          {
                            title: 'BetKing',
                            imgSrc: require('../../../assets/images/betking.png'),
                            type: 'airtel',
                          },
                          {
                            title: 'SportBet',
                            imgSrc: require('../../../assets/images/sportbet.png'),
                            type: 'glo',
                          },
                          {
                            title: 'HitBet',
                            imgSrc: require('../../../assets/images/hibet.png'),
                            type: 'nine_mobile',
                          },
                        ].map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                              setAirtimeType(item.type);
                              bottomSheetModalRef.current?.close();
                            }}
                            style={{
                              paddingVertical: 16,
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'start',
                              borderBottomWidth: 1,
                              borderColor: '#EEEEF0',
                            }}>
                            <Image style={tw`w-10 h-10`} source={item.imgSrc} />
                            <Text style={tw`text-lg mx-2`}>{item.title}</Text>
                          </TouchableOpacity>
                        ))}
                      </BottomSheetScrollView>
                    </BottomSheetView>
                  </BottomSheetModal>
                </View>
              </>
              <Text style={tw`text-white font-bold text-lg mt-6`}>
                Bet Account
              </Text>
              <TextInputComp
                placeholder="0123456789"
                iconLeft={require('../../../assets/images/phone-call.png')}
              />
            </View>
            <View>
              <Text style={tw`text-white font-bold text-lg`}>Amount</Text>
              <TextInputComp placeholder="₦0.00" />
            </View>
          </View>

          <Text style={tw`text-white font-bold text-lg mt-7`}>
            Recent Purchases
          </Text>
          <View style={{marginTop: 25}}>
            <View
              style={{
                flexDirection: 'row',
                gap: 14,
                justifyContent: 'between',
              }}>
              <Image
                style={tw`w-10 h-10`}
                source={require('../../../assets/images/betnaija.png')}
              />
              <View style={{justifyContent: 'space-between', flex: 1}}>
                <Text style={{fontSize: 16, color: '#fff', fontWeight: '500'}}>
                  BetNaija
                </Text>
                <Text style={{color: '#9D9B9B', fontWeight: '500'}}>
                  7038473798
                </Text>
              </View>
              <Text style={{color: '#9D9B9B', fontWeight: '500'}}>12.25AM</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {airtimeType && (
        <>
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              right: 16,
              left: 16,
            }}>
            <Button
              title="Pay"
              login
              onPress={() => {
                bottomSheetPayModalRef.current?.present();
              }}
            />
          </View>
          <View>
            <BottomSheetModal
              ref={bottomSheetPayModalRef}
              index={1}
              snapPoints={['65%', '70%']}>
              <BottomSheetView style={{flex: 1, paddingHorizontal: 16}}>
                <Text style={tw`font-bold text-xl text-center mt-12`}>
                  ₦48500
                </Text>
                <View
                  style={{
                    marginTop: 40,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#808083',
                      fontSize: 18,
                      fontWeight: '400',
                    }}>
                    Package
                  </Text>
                  <Text
                    style={{color: '#111111', fontWeight: '700', fontSize: 18}}>
                    {dataType[airtimeType].title}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 30,
                  }}>
                  <Text
                    style={{
                      color: '#808083',
                      fontSize: 18,
                      fontWeight: '400',
                    }}>
                    Reference Number
                  </Text>
                  <Text
                    style={{color: '#111111', fontWeight: '700', fontSize: 18}}>
                    8063579245
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 30,
                  }}>
                  <Text
                    style={{
                      color: '#808083',
                      fontSize: 18,
                      fontWeight: '400',
                    }}>
                    Bet account
                  </Text>
                  <Text
                    style={{color: '#111111', fontWeight: '700', fontSize: 18}}>
                    7086853498
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 30,
                  }}>
                  <Text
                    style={{
                      color: '#808083',
                      fontSize: 18,
                      fontWeight: '400',
                    }}>
                    Amount
                  </Text>
                  <Text
                    style={{color: '#111111', fontWeight: '700', fontSize: 18}}>
                    ₦4850
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 30,
                  }}>
                  <Text
                    style={{
                      color: '#808083',
                      fontSize: 18,
                      fontWeight: '400',
                    }}>
                    Transaction Fee
                  </Text>
                  <Text
                    style={{color: '#111111', fontWeight: '700', fontSize: 18}}>
                    ₦0.00
                  </Text>
                </View>
                <View style={{marginTop: 'auto', paddingBottom: bottom}}>
                  <Button
                    title="Confirm"
                    login
                    onPress={() => {
                      bottomSheetPayModalRef.current?.dismiss();
                      bottomSheetConfirmPayModalRef.current?.present();
                    }}
                  />
                </View>
              </BottomSheetView>
            </BottomSheetModal>
          </View>
        </>
      )}
      <View>
        <BottomSheetModal
          ref={bottomSheetConfirmPayModalRef}
          index={1}
          backdropComponent={BottomSheetBackdrop}
          snapPoints={['60%', '65%']}>
          <BottomSheetView style={{flex: 1, paddingHorizontal: 16}}>
            <Image
              source={require('../../../assets/images/square-password.png')}
              style={{marginHorizontal: 'auto', marginTop: 5}}
            />
            <View style={{paddingHorizontal: 20, marginTop: 5}}>
              <Text style={{textAlign: 'center', fontSize: 14, marginTop: 5}}>
                To proceed, enter the send to your email or Phone
              </Text>
              <AppKeypad.Display length={4} value={password} />
              <View style={{marginTop: 80}}>
                <AppKeypad
                  length={4}
                  onCodeChange={setPassword}
                  resetOnComplete
                  onCodeComplete={() => {
                    navigation.navigate('SuccessScreen', {
                      amount: '#20,000',
                      text: 'Betting Purchased Successfully',
                    });
                    bottomSheetConfirmPayModalRef.current?.close();
                  }}
                />
              </View>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01041F',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 700,
  },
});

export default BettingScreen;
