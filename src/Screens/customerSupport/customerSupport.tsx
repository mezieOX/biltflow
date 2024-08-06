import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {
  Button,
  TextAreaInputComp,
  TextInputComp,
  TopSection,
} from '../../components';
import {s as tw} from 'react-native-wind';

export const SupportScreen = () => {
  return (
    <ScrollView style={[tw`flex-1 pt-10`, {backgroundColor: '#01041F'}]}>
      <TopSection
        settingsIcon={false}
        bitcoin={false}
        ngnIcon={false}
        title="Customer Support "
        searchIcon={true}
      />
      <Text style={tw`text-white text-center text-xl font-bold mt-10`}>
        Contact us for any issues
      </Text>
      <View
        style={tw`mx-4  flex-col justify-center items-center pt-10 flex-row items-center`}>
        <Image
          style={tw`w-5 h-5`}
          source={require('../../../assets/images/support-phone.png')}
        />
        <Text style={tw`text-white text-center mx-2`}>Call : 13301 (24/7)</Text>
      </View>
      <View
        style={tw`mx-4  flex-col justify-center items-center pt-5 flex-row items-center`}>
        <Image
          style={tw`w-5 h-5`}
          source={require('../../../assets/images/support-whatsapp.png')}
        />
        <Text style={tw`text-white text-center mx-2`}>
          Whatsapp: +23480639287423
        </Text>
      </View>
      <View
        style={tw`mx-4  flex-col justify-center items-center pt-5 flex-row items-center`}>
        <Image
          style={tw`w-5 h-5`}
          source={require('../../../assets/images/support-email.png')}
        />
        <Text style={tw`text-white text-center mx-2`}>
          Email : support@biltflow.com
        </Text>
      </View>
      <Text style={tw`text-white text-center text-xl font-bold mt-10`}>
        Send Message
      </Text>
      <View style={tw`px-4 pt-8 pb-20`}>
        <TextInputComp
          className="text-white"
          support={true}
          placeholder="Enter phone Number or Email"
        />
        <TextInputComp
          className="text-white"
          support={true}
          placeholder="Enter phone Number or Email"
        />
        <TextAreaInputComp
          className="text-white placeholder:!text-white"
          placeholder=""
        />
        <View style={tw`mb-40 pt-10`}>
          <Button title="Send" login />
        </View>
      </View>
    </ScrollView>
  );
};
