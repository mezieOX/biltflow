import React, {useState} from 'react';
import {ScrollView, Switch, Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {TopSection} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {ArrowRightIcon} from '../../../assets/svgIcons';

export const SettingsScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [sound, setSound] = useState<boolean>(false);

  const ListItems = [
    {
      id: 1,
      text: 'Accounts',
      link: 'AccountScreen',
    },

    {
      id: 2,
      text: 'Security',
      link: 'ChangePasswordScreen',
    },
    {
      id: 3,
      text: ' Language',
      link: 'ChangeLanguageScreen',
    },
    {
      id: 4,
      text: 'Change theme',
    },
    {
      id: 5,
      text: 'Enable push notification',
    },
    {
      id: 6,
      text: 'Price Alert',
      link: 'CreatePriceAlertScreen',
    },
    {
      id: 6,
      text: 'Customer Support',
      link: 'SupportScreen',
    },
    {
      id: 7,
      text: 'Log Out',
    },
    {
      id: 8,
      text: 'Delete Account',
    },
  ];

  return (
    <View style={[tw`flex-1 pr-2 pl-1`, {backgroundColor: '#01041F'}]}>
      <TopSection settingsIcon={true} title="Settings" searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`py-6 px-2`}>
          {ListItems.map(({id, text, link}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(link as any)}
              style={[tw`py-6 flex-row items-center justify-between`]}
              key={id}>
              <View style={tw`flex-row items-center`}>
                <Text
                  style={[
                    tw`text-base text-white px-4`,
                    {
                      color:
                        text === 'Delete Account'
                          ? 'rgba(247, 26, 26, 1)'
                          : text === 'Log Out'
                          ? 'rgba(229, 119, 14, 1)'
                          : '#fff',
                    },
                  ]}>
                  {text}
                </Text>
              </View>
              {text === 'Enable push notification' ||
              text === 'Change theme' ||
              text === 'Language' ? (
                text === 'Language' ? (
                  <Text style={[tw`text-base px-4`]}>English</Text>
                ) : (
                  <Switch
                    value={sound}
                    trackColor={{false: 'rgba(229, 229, 229, 1)'}}
                    onChange={() => setSound(prev => !prev)}
                    thumbColor={'rgba(229, 119, 14, 1)'}
                  />
                )
              ) : (
                <ArrowRightIcon />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
