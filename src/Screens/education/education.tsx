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
import {Button, TopSection} from '../../components';
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

const EducationScreen = () => {
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
        <TopSection ngnIcon title="Education" searchIcon={false} />
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
                      {dataType[airtimeType]?.title ||
                        'Enter Personal Details '}
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
                        Choose Education Subscription
                      </Text>
                      <BottomSheetScrollView
                        style={{
                          paddingHorizontal: 20,
                        }}>
                        {[
                          {
                            title: 'WAEC Registration',
                            type: 'WAEC Result Checker ',
                          },
                          {
                            title: 'JAMB Pin Vending',
                            type: 'JAMB Pin Vending',
                          },
                          {
                            title: 'Nabteb Registration',
                            type: 'Nabteb Registration',
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
                  borderRadius: 8,
                }}>
                <Text style={{fontSize: 16, color: '#808083'}}>
                  {dataType[airtimeType]?.title ||
                    'Choose Education Subscription'}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{flex: 1}}>
              <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={['80%', '85%']}>
                <BottomSheetView style={{flex: 1}}>
                  <Text style={tw`font-bold text-md text-center`}>
                    Personal Details
                  </Text>
                  <BottomSheetScrollView
                    style={{
                      paddingHorizontal: 20,
                    }}>
                    {[
                      {
                        title: 'Chiamaka Floria Okonkwo ',
                        type: 'Chiamaka Floria Okonkwo ',
                      },
                      {
                        title: 'Anambra',
                        type: 'Anambra',
                      },
                      {
                        title: '07086853498',
                        type: '07086853498',
                      },
                      {
                        title: 'Union Secondary School',
                        type: 'Union Secondary School',
                      },
                      {
                        title: 'Awka South Local Government ',
                        type: 'Awka South Local Government ',
                      },
                      {
                        title: '20/10/2005',
                        type: '20/10/2005 ',
                      },
                      {
                        title: '16',
                        type: '16',
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
                source={require('../../../assets/images/waec.png')}
                style={tw`w-14 h-14`}
                resizeMode="contain"
              />
              <View style={{justifyContent: 'space-between', flex: 1}}>
                <Text style={{fontSize: 16, color: '#fff', fontWeight: '500'}}>
                  WAEC Regist
                </Text>
                <Text style={{color: '#9D9B9B', fontWeight: '500'}}>
                  018982364
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
              bottom: 60,
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
                <Text style={tw`font-bold text-xl text-center mt-6`}>
                  ₦48500
                </Text>
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
                    Package
                  </Text>
                  <Text
                    style={{color: '#111111', fontWeight: '700', fontSize: 18}}>
                    WAEC Registration
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
                      amount: '₦30,000.00',
                      text: 'WAEC Registration successfully.',
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

export default EducationScreen;
