import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {TopSection} from '../../components';
import TradeGainGraph from '../../components/icons/TradeGainGraph';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    coin: 'Ethereum',
    imgSrc: require('../../../assets/images/ethereum-logo.png'),
    price: '₦1,085.18',
    percentage: '-21.00%',
  },
  {
    coin: 'Bitcoin',
    imgSrc: require('../../../assets/images/bitcoin-logo.png'),
    price: '₦1,085.18',
    percentage: '+21.00%',
  },
  {
    coin: 'Cardano',
    imgSrc: require('../../../assets/images/cardano-logo.png'),
    price: '₦1,085.18',
    percentage: '+31.00%',
  },
  {
    coin: 'Tron',
    imgSrc: require('../../../assets/images/tron-logo.png'),
    price: '₦1,085.18',
    percentage: '-11.00%',
  },
];

const SendAndReceieveCryptoScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#01041F', paddingTop: 20}}>
      <TopSection title="Send & Receive" searchIcon={false} />
      <View
        style={{
          paddingHorizontal: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={{fontSize: 20, color: '#ffff'}}>Select</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateCoinScreen')}>
          <Text style={{color: '#E5770E', fontSize: 16}}>Add Coins</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{paddingBottom: 20, gap: 45}}
        style={{
          paddingHorizontal: 24,
          marginTop: 28,
          flex: 1,
        }}>
        {data.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('sendAndRecieveCredScreen', {item})
            }
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            <Image source={item.imgSrc} />
            <View style={{justifyContent: 'space-between'}}>
              <Text style={{color: '#212529', fontSize: 16}}>{item.coin}</Text>
              <Text style={{color: '#6C757D', fontSize: 10}}>
                0.0000000001 ETH
              </Text>
            </View>
            {item.percentage.startsWith('-') && (
              <Image
                source={require('../../../assets/images/trade-graph.png')}
                style={{marginHorizontal: 'auto'}}
              />
            )}
            {item.percentage.startsWith('+') && (
              <TradeGainGraph style={{marginHorizontal: 'auto'}} />
            )}
            <View style={{justifyContent: 'space-between', marginLeft: 'auto'}}>
              <Text style={{color: '#212529', fontSize: 16}}>{item.price}</Text>
              <Text
                style={{
                  color: item.percentage.startsWith('+')
                    ? '#21BF73'
                    : '#D90429',
                  fontSize: 10,
                }}>
                {item.percentage}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SendAndReceieveCryptoScreen;
