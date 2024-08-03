import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {ArrowLeftIcon} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {s as tw} from 'react-native-wind';
import {Button, TextInputComp, TopSection} from '../../components';
import AppKeypad from '../../components/KeyPad';

import {
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
  BottomSheetBackdrop,
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

const DataScreen = () => {
  const navigation = useNavigation();

  const [airtimeType, setAirtimeType] = useState('');
  const [bundleType, setBundleType] = useState('');

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetPayModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetBundleModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetConfirmPayModalRef = useRef<BottomSheetModal>(null);
  const [password, setPassword] = React.useState('');
  const {bottom} = useSafeAreaInsets();
  // variables
  const snapPoints = useMemo(() => ['25%', '40%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        <TopSection ngnIcon title="Data" searchIcon={false} />
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
                      {dataType[airtimeType]?.title || 'Chooose Network'}
                    </Text>
                    {dataType[airtimeType]?.imgSrc && (
                      <Image source={dataType[airtimeType]?.imgSrc} />
                    )}
                  </View>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    backdropComponent={BottomSheetBackdrop}
                    snapPoints={snapPoints}>
                    <BottomSheetView style={{flex: 1}}>
                      <Text style={tw`font-bold text-md text-center`}>
                        Network
                      </Text>
                      <BottomSheetScrollView
                        style={{
                          paddingHorizontal: 20,
                        }}>
                        {[
                          {
                            title: 'MTN',
                            imgSrc: require('../../../assets/images/mtn-logo.png'),
                            type: 'mtn',
                          },
                          {
                            title: 'Airtel',
                            imgSrc: require('../../../assets/images/airtel-logo.png'),
                            type: 'airtel',
                          },
                          {
                            title: 'GLO',
                            imgSrc: require('../../../assets/images/glo-logo.png'),
                            type: 'glo',
                          },
                          {
                            title: '9Mobile',
                            imgSrc: require('../../../assets/images/nine-mobile-logo.png'),
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
                              justifyContent: 'space-between',
                              borderBottomWidth: 1,
                              borderColor: '#EEEEF0',
                            }}>
                            <Image source={item.imgSrc} />
                            <Text style={tw`text-lg`}>{item.title}</Text>
                          </TouchableOpacity>
                        ))}
                      </BottomSheetScrollView>
                    </BottomSheetView>
                  </BottomSheetModal>
                </View>
              </>
              <Text style={tw`text-white font-bold text-lg mt-6`}>
                Mobile Number
              </Text>
              <TextInputComp
                placeholder="0123456789"
                iconLeft={require('../../../assets/images/phone-call.png')}
              />
              <>
                <TouchableOpacity
                  onPress={() => {
                    bottomSheetBundleModalRef.current?.present();
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
                      {bundleType || 'Select Bundle'}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <BottomSheetModal
                    ref={bottomSheetBundleModalRef}
                    index={1}
                    backdropComponent={BottomSheetBackdrop}
                    snapPoints={snapPoints}>
                    <BottomSheetView style={{flex: 1}}>
                      <Text style={tw`font-bold text-md text-center`}>
                        Bundles
                      </Text>
                      <BottomSheetScrollView
                        style={{
                          paddingHorizontal: 20,
                        }}>
                        {[
                          {
                            title: '100MB for 1 day',
                            amount: '₦100',
                          },
                          {
                            title: '160MB for 30 days',
                            amount: '₦150',
                          },
                        ].map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                              // setAirtimeType(item.type);
                              setBundleType(item.title);
                              bottomSheetBundleModalRef.current?.close();
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
              backdropComponent={BottomSheetBackdrop}
              snapPoints={['60%', '65%']}>
              <BottomSheetView style={{flex: 1, paddingHorizontal: 16}}>
                <Text style={tw`font-bold text-xl text-center mt-12`}>
                  ₦500
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
                    Network
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
                    Mobile Number
                  </Text>
                  <Text
                    style={{color: '#111111', fontWeight: '700', fontSize: 18}}>
                    07038473758
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
                  <Text
                    style={{textAlign: 'center', fontSize: 14, marginTop: 5}}>
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
      )}
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

export default DataScreen;
