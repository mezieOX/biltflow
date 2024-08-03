import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
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
import {Button, TextInputComp, TopSection} from '../../components';
import AppKeypad from '../../components/KeyPad';

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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

const TvSubscriptionScreen = () => {
  const navigation = useNavigation();

  const [provider, setProvider] = useState('');
  const [bundleType, setBundleType] = useState('');

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetPayModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetPackageModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetConfirmPayModalRef = useRef<BottomSheetModal>(null);
  const {bottom} = useSafeAreaInsets();

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
        <TopSection ngnIcon title="TV Subscription" searchIcon={false} />
        <View style={{paddingHorizontal: 16}}>
          <View style={{gap: 20}}>
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
                      {provider || 'Chooose Provider'}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    backdropComponent={BottomSheetBackdrop}
                    snapPoints={snapPoints}>
                    <BottomSheetView style={{flex: 1}}>
                      <Text style={tw`font-bold text-lg text-center`}>
                        Service Provider
                      </Text>
                      <BottomSheetScrollView
                        style={{
                          paddingHorizontal: 20,
                        }}>
                        {['DStv', 'GOtv', 'StarTimes', 'ShowMax'].map(
                          (item, index) => (
                            <TouchableOpacity
                              key={index}
                              onPress={() => {
                                setProvider(item);
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
                              <Text style={tw`text-md`}>{item}</Text>
                            </TouchableOpacity>
                          ),
                        )}
                      </BottomSheetScrollView>
                    </BottomSheetView>
                  </BottomSheetModal>
                </View>
              </>

              <>
                <TouchableOpacity
                  onPress={() => {
                    bottomSheetPackageModalRef.current?.present();
                  }}>
                  <View
                    style={{
                      backgroundColor: '#fff',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: 11,
                      paddingVertical: 18,
                      borderRadius: 8,
                      marginVertical: 24,
                    }}>
                    <Text style={{fontSize: 16, color: '#808083'}}>
                      {bundleType || 'Select Package'}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <BottomSheetModal
                    ref={bottomSheetPackageModalRef}
                    index={1}
                    backdropComponent={BottomSheetBackdrop}
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
                            title: 'GOtv Max',
                            amount: '₦100',
                          },
                          {
                            paddingHorizontal: 20,
                            title: 'GOtv Jolli',
                            amount: '₦150',
                          },
                        ].map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                              // setAirtimeType(item.type);
                              setBundleType(item.title);
                              bottomSheetPackageModalRef.current?.close();
                            }}
                            style={{
                              paddingVertical: 16,
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              borderBottomWidth: 1,
                              borderColor: '#EEEEF0',
                            }}>
                            <Text style={tw`text-md`}>{item.title}</Text>
                            <Text style={tw`text-md`}>{item.amount}</Text>
                          </TouchableOpacity>
                        ))}
                      </BottomSheetScrollView>
                    </BottomSheetView>
                  </BottomSheetModal>
                </View>
              </>
              <View>
                <Text style={tw`text-white font-bold text-lg`}>
                  Mobile Number
                </Text>
                <TextInputComp
                  placeholder="0123456789"
                  iconLeft={require('../../../assets/images/phone-call.png')}
                />
              </View>
            </View>
          </View>

          <FlatList
            data={['₦100.00', '₦100.00', '₦1000.00', '₦2000.00']}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={{gap: 8}}
            renderItem={item => (
              <View
                style={{
                  backgroundColor: '#e8780f',
                  paddingVertical: 11,
                  flex: 1,
                  marginTop: 16,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 18,
                    textAlign: 'center',
                  }}>
                  ₦0.00
                </Text>
              </View>
            )}
          />
          <Text style={tw`text-white font-bold text-lg mt-7`}>
            Recent Purchases
          </Text>
          <View style={{marginTop: 25}}>
            <View style={{flexDirection: 'row', gap: 14}}>
              <Image
                source={require('../../../assets/images/mtn-thumbnail.png')}
              />
              <View style={{justifyContent: 'space-between'}}>
                <Text style={{fontSize: 16, color: '#fff', fontWeight: '500'}}>
                  MTN
                </Text>
                <Text style={{color: '#9D9B9B', fontWeight: '500'}}>
                  07038473798
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {provider && (
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
              backdropComponent={BottomSheetBackdrop}
              snapPoints={['60%', '65%']}>
              <BottomSheetView style={{flex: 1, paddingHorizontal: 16}}>
                <Text style={tw`font-bold text-xl text-center mt-8`}>₦100</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 30,
                  }}>
                  <Text
                    style={{
                      color: '#808083',
                      fontSize: 16,
                      fontWeight: '400',
                    }}>
                    Provider
                  </Text>
                  <Text
                    style={{color: '#111111', fontWeight: '700', fontSize: 18}}>
                    GOtv
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
                    navigation.navigate('SuccessScreen');
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

export default TvSubscriptionScreen;
