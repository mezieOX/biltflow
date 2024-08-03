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
    title: 'MTN',
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

const ElectricityScreen = () => {
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
      <ScrollView style={(tw``, styles.container)}>
        <TopSection ngnIcon title="Electricity" searchIcon={false} />
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
                  </View>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}>
                    <BottomSheetView style={{flex: 1}}>
                      <Text style={tw`font-bold text-md text-center`}>
                        Service Provider
                      </Text>
                      <BottomSheetScrollView
                        style={{
                          paddingHorizontal: 20,
                        }}>
                        {[
                          {
                            title: 'Abuja Electricity - AEDC',
                            type: 'Abuja Electricity - AEDC',
                          },
                          {
                            title: 'Benin Electricity - BEDC',
                            type: 'Benin Electricity - BEDC',
                          },
                          {
                            title: 'PortHarcourt Electricity - PHED',
                            type: 'PortHarcourt Electricity - PHED',
                          },
                          {
                            title: 'Kano Electricity - KEDCO',
                            type: 'Kano Electricity - KEDCO',
                          },
                          {
                            title: 'Jos Electricity - JEDC',
                            type: 'Jos Electricity - JEDC',
                          },
                          {
                            title: 'Ikeja Electricity - IKEDC',
                            type: 'Ikeja Electricity - IKEDC',
                          },
                          {
                            title: 'Ibadan Electricity - IBEDC',
                            type: 'Ibadan Electricity - IBEDC',
                          },
                          {
                            title: 'Enugu Electricity - EEDC',
                            type: 'Enugu Electricity - EEDC',
                          },
                          {
                            title: 'Eko Electricity - EKEDC',
                            type: 'Eko Electricity - EKEDC',
                          },
                          {
                            title: 'Yola Electricity - YEDC',
                            type: 'Yola Electricity - YEDC',
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
                <TouchableOpacity onPress={handlePresentModalPress}>
                  <View
                    style={{
                      backgroundColor: '#fff',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: 11,
                      paddingVertical: 18,
                      marginTop: 30,
                      borderRadius: 8,
                    }}>
                    <Text style={{fontSize: 16, color: '#808083'}}>
                      {dataType[airtimeType]?.title || 'Select Package'}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}>
                    <BottomSheetView style={{flex: 1}}>
                      <Text style={tw`font-bold text-md text-center`}>
                        Package
                      </Text>
                      <BottomSheetScrollView
                        style={{
                          paddingHorizontal: 20,
                        }}>
                        {[
                          {
                            title: 'EEDC - Prepaid',
                            type: 'EEDC - Prepaid',
                          },
                          {
                            title: 'EEDC - Postpaid',
                            type: 'EEDC - Postpaid',
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
              <Text style={tw`text-white font-bold text-lg mt-6`}>
                Meter Number
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
                source={require('../../../assets/images/ikeja.png')}
                style={tw`w-14 h-14`}
                resizeMode="contain"
              />
              <View style={{justifyContent: 'space-between', flex: 1}}>
                <Text style={{fontSize: 16, color: '#fff', fontWeight: '500'}}>
                  Ikeja Electricty
                </Text>
                <Text style={{color: '#9D9B9B', fontWeight: '500'}}>
                  8063579245
                </Text>
              </View>
              <Text style={{color: '#9D9B9B', fontWeight: '500'}}>9.25AM</Text>
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
              snapPoints={['80%', '85%']}>
              <BottomSheetView style={{flex: 1, paddingHorizontal: 16}}>
                <Text style={tw`font-bold text-xl text-center mt-6`}>₦100</Text>
                <View
                  style={{
                    marginTop: 30,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#808083',
                      fontSize: 18,
                      fontWeight: '400',
                    }}>
                    Provider
                  </Text>
                  <Text
                    style={{color: '#111111', fontWeight: '700', fontSize: 18}}>
                    EEDC
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 20,
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
                    Prepaid
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
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
                    marginTop: 20,
                  }}>
                  <Text
                    style={{
                      color: '#808083',
                      fontSize: 18,
                      fontWeight: '400',
                    }}>
                    Meter Number
                  </Text>
                  <Text
                    style={{color: '#111111', fontWeight: '700', fontSize: 18}}>
                    0123456789
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <Text
                    style={{
                      color: '#808083',
                      fontSize: 18,
                      fontWeight: '400',
                    }}>
                    Mobile Number
                  </Text>
                  <Text
                    style={{color: '#111111', fontWeight: '700', fontSize: 18}}>
                    07038473798
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
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
                    ₦1850
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
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
                <View
                  style={[
                    tw`mx-auto`,
                    {
                      backgroundColor: '#E8780F',
                      marginHorizontal: 'auto',
                      marginVertical: 45,
                      paddingVertical: 8,
                      paddingHorizontal: 30,
                      borderRadius: 8,
                    },
                  ]}>
                  <Text style={tw`text-white text-sm`}>
                    Wallet Balance: ₦1,565,520.57
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
                      amount: '₦20,000.00',
                      text: 'Electricity bills payment successfully.',
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
    paddingTop: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 700,
  },
});

export default ElectricityScreen;
