import React, {useState} from 'react';
import {ScrollView, Switch, Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {TopSection} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {ArrowRightIcon, TranslatorIcon} from '../../../assets/svgIcons';

export const SettingsScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [sound, setSound] = useState<boolean>(false);

  const ListItems = [
    {
      id: 1,
      text: 'Show deal reauit dialog',
    },
    {
      id: 2,
      text: 'Sounds',
    },
    {
      id: 3,
      text: 'Change login password',
      link: 'ChangePasswordScreen',
    },
    {
      id: 4,
      text: 'Edit Personal info',
      link: 'ProfileInfoScreen',
    },
    {
      id: 5,
      text: 'Language',
      icon: TranslatorIcon,
      link: 'ChangeLanguageScreen',
    },
  ];

  return (
    <View style={[tw`flex-1 pr-2 pl-1`, {backgroundColor: '#01041F'}]}>
      <TopSection settingsIcon={true} title="Setting" searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`py-6 px-2`}>
          {ListItems.map(({id, text, icon: Icon, link}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(link as any)}
              style={[tw`py-6 flex-row items-center justify-between`]}
              key={id}>
              <View style={tw`flex-row items-center`}>
                {Icon ? <Icon /> : null}

                <Text style={[tw`text-base text-white px-4`]}>{text}</Text>
              </View>
              {text === 'Sounds' ||
              text === 'Switch to Dark mood' ||
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
