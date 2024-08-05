import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInputComp, TopSection} from '../../../components';
import {s as tw} from 'react-native-wind';

const SendAndReceiveOptionCryptoScreen = () => {
  const [send, setSend] = useState<boolean>(true);
  return (
    <View style={{flex: 1, backgroundColor: '#01041F', paddingTop: 30}}>
      <TopSection title="Send & Receive" searchIcon={false} />
      <View
        style={{
          paddingHorizontal: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => setSend(true)}>
          <Text
            style={[
              tw`${send ? 'border-b-4' : ''} border-white pb-2`,
              {
                fontSize: 20,
                color: '#ffffff',
                borderColor: 'rgba(229, 119, 14, 1)',
              },
            ]}>
            Send
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSend(false)}>
          <Text
            style={[
              tw`${!send ? 'border-b-4' : ''} border-white pb-2`,
              {
                fontSize: 20,
                color: '#ffffff',
                borderColor: 'rgba(229, 119, 14, 1)',
              },
            ]}>
            Receive
          </Text>
        </TouchableOpacity>
      </View>
      {send ? (
        <ScrollView
          style={{
            paddingHorizontal: 24,
            marginTop: 28,
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            <Image
              style={tw`w-10 h-10`}
              source={require('../../../assets/images/bitcoin.png')}
            />
            <View style={{justifyContent: 'space-between'}}>
              <Text style={{color: '#ffffff', fontSize: 16}}>Bitcoin</Text>
              <Text style={{color: '#6C757D', fontSize: 12}}>BTC</Text>
            </View>

            <View style={{justifyContent: 'space-between', marginLeft: 'auto'}}>
              <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 14}}>
                Available Balance
              </Text>
              <Text style={{color: '#ffffff', fontSize: 14}}>2.23464 BTC</Text>
            </View>
          </View>
          <Text style={tw`text-white py-2 pt-8 text-base`}>Enter Address</Text>
          <TextInputComp
            support
            placeholder={`address`}
            iconRight={require('../../../assets/images/minus.png')}
          />
          <Text style={tw`text-white py-2 text-base`}>Amount</Text>
          <View style={tw`flex-row items-center justify-between`}>
            <View style={[tw``, {width: '80%'}]}>
              <TextInputComp placeholder="" support />
            </View>
            <Image
              style={tw`w-10 h-10`}
              source={require('../../../assets/images/send-and-receive-crypto-qrcode.png')}
            />
          </View>
          <Text style={tw`text-white py-2 text-base`}>Note</Text>
          <TextInputComp support placeholder="Write an optional message" />
          <View style={tw`flex-col py-5`}>
            <Text style={tw`text-white py-2 text-base`}>
              Transaction fees: 0.0000 BTC
            </Text>
            <Text style={tw`text-white py-2 text-base`}>
              Min: 0.00061 BTC - Max: 2.0006 BTC
            </Text>
          </View>
          <View style={tw`pt-4 pb-8`}>
            <Button login title={'Send'} />
          </View>
        </ScrollView>
      ) : (
        <ScrollView
          style={{
            paddingHorizontal: 24,
            marginTop: 28,
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}>
            <Image
              style={tw`w-10 h-10`}
              source={require('../../../assets/images/bitcoin.png')}
            />
          </View>
          <View style={tw`flex-col items-center py-5`}>
            <Text style={tw`text-white py-2 text-center pb-5 text-base`}>
              Scan the QR code to get Receive address
            </Text>
            <Image
              style={tw`w-40 h-40`}
              source={require('../../../assets/images/receive-coin-qrcode.png')}
            />
            <View style={tw`flex-row items-center`}>
              <View
                style={[
                  tw`flex-1 w-1/3`,
                  {height: 1, backgroundColor: 'rgba(62, 62, 63, 1)'},
                ]}
              />
              <View style={tw`bg-black mx-4 mb-6 mt-4`}>
                <Text style={tw`text-white py-2 text-center  text-base`}>
                  <Text style={tw`text-white py-2 text-center  text-base`}>
                    Or
                  </Text>
                </Text>
              </View>
              <View
                style={[
                  tw`flex-1 w-1/4`,
                  {height: 1, backgroundColor: 'rgba(62, 62, 63, 1)'},
                ]}
              />
            </View>
            <Text style={tw`text-white py-2 text-center pb-5 text-base`}>
              Your Bitcoin Address
            </Text>
            <View style={tw`bg-white w-full rounded py-1`}>
              <Text style={tw`text-black py-2 text-center px-4 text-sm`}>
                34HuwzDnSwxVRNCoyFCpQnRBXV2
              </Text>
            </View>
            <View
              style={[
                tw`bg-white w-max rounded py-1 my-7 border`,
                {borderColor: 'rgba(229, 119, 14, 1)'},
              ]}>
              <Text
                style={[
                  tw`text-black py-1 text-center px-4 text-sm`,
                  {color: 'rgba(229, 119, 14, 1)'},
                ]}>
                Copy Address
              </Text>
            </View>
          </View>
          <View style={tw`pt-4 pb-8`}>
            <Button login title={'Share Address'} />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default SendAndReceiveOptionCryptoScreen;
