import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {Button, TopSection} from '../../components';

export const MarketsScreen = () => {
  const [market, setMarket] = useState(false);

  return (
    <ScrollView style={[tw``, {backgroundColor: '#01041F'}]}>
      <TopSection
        settingsIcon={false}
        title="Exchange Market"
        searchIcon={true}
      />
      <View style={tw`flex-row justify-between mx-4`}>
        <View
          style={[
            tw`text-white  rounded-xl py-4 px-1`,
            {width: '55%', backgroundColor: 'rgba(149, 104, 61, 1)'},
          ]}>
          <View style={tw`flex-row justify-between px-4`}>
            <Text style={tw`text-white text-green-500`}>High</Text>
            <Text style={tw`text-white text-red-500`}>Low</Text>
          </View>
          <View
            style={tw`flex-row justify-between border-b-2   border-gray-200 py-2`}>
            <Text style={tw`text-white`}>53,952.01</Text>
            <Text style={tw`text-white`}>39,902.42</Text>
          </View>
          <View style={tw`flex-row justify-between px-4 pt-2`}>
            <Text style={tw`text-white`}>Vol (BTC)</Text>
            <Text style={tw`text-white`}>Vol (ETH)</Text>
          </View>
          <View style={tw`flex-row justify-between pt-1`}>
            <Text style={tw`text-white text-center`}>53,952.01</Text>
            <Text style={tw`text-white`}>39,902.42</Text>
          </View>
        </View>
        <View style={tw`flex-col items-end`}>
          <View>
            <Text style={tw`text-white text-center font-bold text-xl`}>
              $66,360.55
            </Text>
          </View>
          <View>
            <Text style={tw`text-white text-green-600 text-right`}>
              (+1.25%)
            </Text>
          </View>
          <View style={[tw`pt-20 `]}>
            <Text
              style={[
                tw`text-white rounded-xl px-4 py-2`,
                {backgroundColor: 'rgba(69, 44, 20, 1)'},
              ]}>
              USD/BTC
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          tw`flex-row mx-4 mt-8 mb-4 justify-between rounded-xl`,
          {backgroundColor: 'rgba(25, 31, 63, 1)'},
        ]}>
        <Text
          onPress={() => setMarket(false)}
          style={tw`text-white ${
            !market ? 'bg-orange-500' : ''
          }  w-1/2 py-2 rounded-xl text-center`}>
          Timeline
        </Text>
        <Text
          onPress={() => setMarket(true)}
          style={tw`text-white ${
            market ? 'bg-orange-500' : ''
          }  w-1/2 py-2 rounded-xl text-center`}>
          Market Depth
        </Text>
      </View>
      <View style={tw`mx-4`}>
        <View style={tw`flex-row`}>
          <Image
            source={
              market
                ? require('../../../assets/images/candlestick.png')
                : require('../../../assets/images/graph.png')
            }
            resizeMode="contain"
            style={tw`h-80  ${!market ? 'w-full' : 'w-52'}`}
          />
          <View
            style={[
              tw`flex-col items-center`,
              {display: !market ? 'none' : 'flex'},
            ]}>
            <Text style={tw`text-white text-center`}>Order book</Text>
            <View style={tw`flex-row`}>
              <Text style={tw`text-white text-center pr-2 text-green-500`}>
                253.11
              </Text>
              <Text style={tw`text-white text-center pl-2 text-red-500`}>
                253.11
              </Text>
            </View>
          </View>
        </View>
        <Button onPress={() => {}} login title={'Latest Trade'} />
        <View>
          <View
            style={[
              tw`flex-row justify-between items-center mt-8 py-2 rounded-tr-xl rounded-tl-xl px-4`,
              {backgroundColor: 'rgba(229, 119, 14, 1)'},
            ]}>
            <Text style={tw`text-white`}>Amount (BTC)</Text>
            <Text style={tw`text-white`}>Price (ETH)</Text>
            <Text style={tw`text-white`}>Time</Text>
          </View>
          <View style={[tw``, {backgroundColor: 'rgba(149, 104, 61, 1)'}]}>
            <View
              style={[
                tw`flex-row justify-between items-center py-2 rounded-tr-xl rounded-tl-xl px-4`,
              ]}>
              <Text style={tw`text-white`}>65.02</Text>
              <Text style={tw`text-white text-green-500`}>0.000147</Text>
              <Text style={tw`text-white`}>21:04:01</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
