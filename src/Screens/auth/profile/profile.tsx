import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {TextInputComp, TopSection} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../../navigation/type';

export const Profile = () => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <View style={[tw`flex-1 pr-2 pl-1`, {backgroundColor: '#01041F'}]}>
      <TopSection settingsIcon={true} title="Profile" searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-column justify-center items-center px-4`}>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={tw`w-20 h-20`}
              source={require('../../../../assets/images/profile-pic.png')}
            />
          </TouchableOpacity>
          <Text
            style={[tw`text-white text-xl text-center pt-4 pb-2 font-bold`]}>
            Edwin Izantim
          </Text>
          <Text style={[tw`text-white text-center pb-4`]}>I.D: 214AV02</Text>
        </View>
        <View style={tw`px-4`}>
          <TextInputComp placeholder="Full name" label="Full Name" />
          <TextInputComp placeholder="edwinizantim@gmail.com" label="Email" />
          <TextInputComp placeholder="080398357286" label="Phone Number" />
          <TextInputComp label="Gender" placeholder="Female" />
          <TextInputComp label="Support" placeholder="Customer Support" />
          <TextInputComp placeholder="About" label="About" />
        </View>
      </ScrollView>
    </View>
  );
};
