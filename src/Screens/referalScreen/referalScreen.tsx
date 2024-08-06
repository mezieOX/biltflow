/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {Button, TopSection} from '../../components';

export const ReferralScreen = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#01041F', paddingTop: 30}}>
      <TopSection title="Referral Program" searchIcon={false} />
      <View style={tw`px-4 flex-row flex-col items-center`}>
        <Image
          source={require('../../../assets/images/referral.png')}
          resizeMode="contain"
          style={tw`w-28 h-28 my-10`}
        />
        <Text
          style={[
            tw`text-center text-lg`,
            {
              color: 'rgba(229, 119, 14, 1)',
            },
          ]}>
          Refer and Earn Free Cryptocurrency
        </Text>
        <Text style={[tw`text-center text-base text-white my-10`]}>
          Introducing Giottus Referral 2.0. As part of this new program we will
          be giving away upto 100% of our earning from your referral. And it
          does not stop there. You get a chance to win upto 10,000 free tokens.
          Refer, like, share and Earn.
        </Text>
        <View>
          <Text
            style={[
              tw`text-left self-start items-start text-base overflow-hidden text-white mt-10 pb-3`,
            ]}>
            Your Referral Link
          </Text>
          <View
            style={tw`border border-white min-w-full max-w-full items-center flex-row rounded-md`}>
            <Text
              style={[
                tw`text-left pl-4 py-3 flex-1 self-start items-start overflow-hidden text-base text-white`,
              ]}>
              https://www.giottus.com
            </Text>
            <Text
              style={[
                tw`text-white px-4 mx-2 py-2 rounded-md`,
                {
                  backgroundColor: 'rgba(229, 119, 14, 1)',
                },
              ]}>
              Copy Code
            </Text>
          </View>
        </View>
        <View style={tw`pt-4 pb-20`}>
          <Button login title={'Refer now'} />
        </View>
      </View>
    </ScrollView>
  );
};
