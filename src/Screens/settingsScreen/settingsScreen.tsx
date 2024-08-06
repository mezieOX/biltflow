import React, {useState} from 'react';
import {ScrollView, Switch, Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {TopSection} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {ArrowRightIcon, TranslatorIcon} from '../../../assets/svgIcons';
import ToggleSwitch from 'toggle-switch-react-native';

export const SettingsScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [sound, setSound] = useState<boolean>(false);

  const [switchTheme, setSwitchTheme] = useState(false);
  const [switchNotification, setSwitchNotification] = useState(false);

  const ListItems = [
    {
      id: 1,
      text: 'Accounts',
      link: 'AccountScreen',
      showToggle: false,
    },
    {
      id: 2,
      text: 'Security',
      link: 'ChangePasswordScreen',
      showToggle: false,
    },
    {
      id: 3,
      text: 'Language',
      link: 'LanguageScreen',
      showToggle: false,
    },
    {
      id: 4,
      text: 'Change Theme',
      showToggle: true,
      isOn: switchTheme,
      switchOn: setSwitchTheme,
    },
    {
      text: 'Enable Push Notification',
      id: 5,
      showToggle: true,
      isOn: switchNotification,
      switchOn: setSwitchNotification,
    },
    {
      text: 'Price Term',
      id: 6,
      link: 'ProfileInfoScreen',
      showToggle: false,
    },

    {
      id: 7,
      text: 'Log Out',
      link: 'ChangeLanguageScreen',
      showToggle: false,
      style: {
        color: '#E5770E',
        fontWeight: 'bold',
      },
    },
    {
      id: 8,
      text: 'Delete account',
      link: 'ChangeLanguageScreen',
      showToggle: false,
      style: {
        color: 'red',
        fontWeight: 'bold',
      },
    },
  ];

  return (
    <View style={[tw`flex-1 pr-2 pl-1`, {backgroundColor: '#01041F'}]}>
      <TopSection settingsIcon={true} title="Setting" searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`py-6 px-2`}>
          {ListItems.map(
            ({id, text, link, showToggle, isOn, switchOn, style}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(link as any)}
                style={[tw`py-5 flex-row items-center justify-between`]}
                key={id}>
                <View style={tw`flex-row items-center`}>
                  <Text style={[tw`text-base text-white px-4`, style]}>
                    {text}
                  </Text>
                </View>

                <View>
                  {showToggle && (
                    <ToggleSwitch
                      isOn={isOn as boolean}
                      onColor="white"
                      offColor="#E5770E"
                      labelStyle={{color: 'black', fontWeight: '900'}}
                      size="medium"
                      thumbOffStyle={{backgroundColor: 'white'}}
                      thumbOnStyle={{backgroundColor: '#E5770E'}}
                      onToggle={isOn => {
                        if (switchOn) switchOn(isOn);
                      }}
                    />
                  )}
                </View>

                {!showToggle &&
                  text !== 'Delete account' &&
                  text !== 'Log Out' && <ArrowRightIcon fill={'#fff'} />}
              </TouchableOpacity>
            ),
          )}
        </View>
      </ScrollView>
    </View>
  );
};
