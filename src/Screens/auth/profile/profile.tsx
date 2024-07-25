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
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileScreen')}>
            <Image
              resizeMode="contain"
              style={tw`w-12 h-12`}
              source={require('../../../../assets/images/profile-pic.png')}
            />
          </TouchableOpacity>
          <Text style={[tw`text-white text-xl text-center py-4 font-bold`]}>
            Edwin Izantim
          </Text>
        </View>
        <View style={tw`px-4`}>
          <TextInputComp placeholder="Full name" label="Full Name" />
          <TextInputComp placeholder="Email Address" label="Email" />
          <TextInputComp placeholder="Enter Mobile Number" label="Full Name" />
          <TextInputComp
            label="Password"
            placeholder="Password"
            secureTextEntry
          />
          <TextInputComp
            label="Confirm Password"
            placeholder="Confirm Password"
            secureTextEntry
          />
          <TextInputComp label="Gender" placeholder="Female" secureTextEntry />
        </View>
      </ScrollView>
    </View>
  );
};
