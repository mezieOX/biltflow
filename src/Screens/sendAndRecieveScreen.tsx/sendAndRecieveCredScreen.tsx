import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Clipboard,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Tab, TabView} from '@rneui/base';
import {Button, TopSection} from '../../components';
import {useRoute} from '@react-navigation/native';
import {TextInput} from 'react-native';
import {borderWidths} from 'react-native-wind/dist/styles/view/border-width';
import QrCodeIcon from '../../components/icons/QrCodeIcon';
import ScanQrCodeIcon from '../../components/icons/ScanQrCodeIcon';
import QRCode from 'react-native-qrcode-svg';

const data = [
  {
    coin: 'Ethereum',
    imgSrc: require('../../../assets/images/ethereum-logo.png'),
    price: '₦1,085.18',
    percentage: '-21.00%',
    shortHand: 'ETH',
  },
  {
    coin: 'Bitcoin',
    imgSrc: require('../../../assets/images/bitcoin-logo.png'),
    price: '₦1,085.18',
    percentage: '+21.00%',
    shortHand: 'BTC',
  },
  {
    coin: 'Cardano',
    imgSrc: require('../../../assets/images/cardano-logo.png'),
    price: '₦1,085.18',
    percentage: '+31.00%',
    shortHand: 'ADA',
  },
  {
    coin: 'Tron',
    imgSrc: require('../../../assets/images/tron-logo.png'),
    price: '₦1,085.18',
    percentage: '-11.00%',
    shortHand: 'TRX',
  },
];

const SendAndRecieveCredScreen = () => {
  const [index, setIndex] = React.useState(0);
  const {item} = useRoute().params;

  const selectedCoin = data.find(coin => coin.coin === item.coin);

  console.log(item);
  return (
    <View
      style={{
        backgroundColor: '#01041F',
        flex: 1,
        paddingTop: 10,
      }}>
      <TopSection title="Send & Receive" searchIcon={false} />
      <Tab
        indicatorStyle={{
          backgroundColor: '#E5770E',
        }}
        dense
        value={index}
        onChange={setIndex}
        style={{marginTop: 20}}>
        <Tab.Item titleStyle={styles.titleStyle}>Send</Tab.Item>
        <Tab.Item titleStyle={styles.titleStyle}>Recieve</Tab.Item>
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%', paddingHorizontal: 16}}>
          <ScrollView>
            <View
              style={{
                marginTop: 100,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image source={selectedCoin?.imgSrc} />
                <View>
                  <Text style={{color: '#fff'}}>{selectedCoin?.coin}</Text>
                  <Text style={{color: '#fff'}}>{selectedCoin?.shortHand}</Text>
                </View>
              </View>
              <View>
                <Text style={{color: '#fff'}}>Available Balance</Text>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>
                  2.23464 BTC
                </Text>
              </View>
            </View>
            <View style={{marginTop: 48, gap: 24}}>
              <View>
                <Text style={{color: '#fff'}}>Enter Address</Text>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                  <TextInput style={[styles.input, {flex: 1}]} />
                  <ScanQrCodeIcon />
                </View>
              </View>
              <View>
                <Text style={{color: '#fff'}}>Amount</Text>
                <View>
                  <TextInput style={[styles.input]} />
                </View>
              </View>
              <View>
                <Text style={{color: '#fff'}}>Note</Text>
                <View>
                  <TextInput style={[styles.input]} />
                </View>
              </View>
            </View>
            <Text style={{color: '#fff', marginTop: 24}}>
              Transaction fees: 0.0000 BTC
            </Text>
            <Text style={{color: '#fff', marginTop: 12}}>
              Min: 0.00061 BTC - Max: 2.0006 BTC
            </Text>
            <View style={{marginTop: 50}}>
              <Button title="Send" login onPress={() => console.log('send')} />
            </View>
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <ScrollView contentContainerStyle={{paddingHorizontal: 16}}>
            <Image
              source={selectedCoin?.imgSrc}
              style={{
                marginHorizontal: 'auto',
                marginTop: 42,
              }}
            />
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                marginTop: 24,
                fontWeight: '500',
              }}>
              Scan the QR code to get Receive address
            </Text>
            <View style={{marginHorizontal: 'auto', marginTop: 12}}>
              <QRCode size={150} value="https://www.google.com/" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 3,
                marginTop: 24,
              }}>
              <View style={{height: 2, flex: 1, backgroundColor: '#3E3E3F'}} />
              <Text style={{color: '#fff'}}>Or</Text>
              <View style={{height: 2, flex: 1, backgroundColor: '#3E3E3F'}} />
              <View />
            </View>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                marginTop: 34,
              }}>
              Your Bitcoin Address
            </Text>
            <View
              style={{
                paddingVertical: 12,
                paddingHorizontal: 8,
                backgroundColor: '#fff',
                marginVertical: 16,
              }}>
              <Text style={{textAlign: 'center'}}>
                34HuwzDnSwxVRNCoyFCpQnRBXV2sVVmGUY
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                Clipboard.setString('34HuwzDnSwxVRNCoyFCpQnRBXV2sVVmGUY');
              }}
              activeOpacity={0.8}
              style={{
                alignSelf: 'center',
                backgroundColor: '#fff',
                paddingVertical: 10,
                paddingHorizontal: 16,
                borderRadius: 8,
              }}>
              <Text style={{textAlign: 'center', color: '#E5770E'}}>
                Copy Address
              </Text>
            </TouchableOpacity>
            <View style={{marginTop: 80}}>
              <Button login title="Share Address" />
            </View>
          </ScrollView>
        </TabView.Item>
      </TabView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 24,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 8,
    paddingVertical: 12,
    marginTop: 4,
  },
});

export default SendAndRecieveCredScreen;
