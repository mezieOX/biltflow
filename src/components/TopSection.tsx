import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {INavigationSetting} from '../navigation/type';
import {useNavigation} from '@react-navigation/native';
import {NotificationIcon, SettingsIcon} from '../../assets/svgIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowLeftIcon from './icons/ArrowLeft';

export const TopSection = ({
  title,
  searchIcon = true,
  settingsIcon = false,
  bitcoin = false,
  ngnIcon = false,
  showBack = true,
}: {
  title: string;
  searchIcon?: boolean;
  settingsIcon?: boolean;
  bitcoin?: boolean;
  ngnIcon?: boolean;
  showBack?: boolean;
}) => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <SafeAreaView style={[tw`flex-row justify-between items-center  px-2`]}>
      {showBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon />
        </TouchableOpacity>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        }}>
        <Text style={tw`text-white text-center text-xl font-bold`}>
          {title}
        </Text>
        {ngnIcon && (
          <Image
            source={require('../../assets/images/ngn.png')}
            style={{
              height: 18,
              width: 13,
            }}
          />
        )}
      </View>

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
    </SafeAreaView>
  );
};
