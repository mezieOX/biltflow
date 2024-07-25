import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {INavigationSetting} from '../navigation/type';
import {useNavigation} from '@react-navigation/native';
import {
  ArrowLeftIcon,
  NotificationIcon,
  SettingsIcon,
} from '../../assets/svgIcons';

export const TopSection = ({
  title,
  searchIcon = true,
  settingsIcon = false,
  bitcoin = false,
}: {
  title: string;
  searchIcon?: boolean;
  settingsIcon?: boolean;
  bitcoin?: boolean;
}) => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <View style={tw`flex-row justify-between items-center pt-8 pb-4 px-2`}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeftIcon />
      </TouchableOpacity>
      <Text style={tw`text-white pb-4 text-center text-xl font-bold`}>
        {title}
      </Text>

      {searchIcon ? (
        <View>
          <NotificationIcon />
        </View>
      ) : null}

      {settingsIcon ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SettingsScreen');
          }}>
          <SettingsIcon />
        </TouchableOpacity>
      ) : null}
      {!searchIcon && !settingsIcon ? <View style={tw`px-4`} /> : null}
      {bitcoin ? (
        <Image
          resizeMode="contain"
          style={tw`h-10 w-10 mx-4`}
          source={require('../../assets/images/transact-btc.png')}
        />
      ) : null}
    </View>
  );
};
