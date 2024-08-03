import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {s as tw} from 'react-native-wind';
import {TopSection} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {
  AboutIcon,
  ArrowCircleDownIcon,
  ArrowRightIcon,
  GlobalEditIcon,
  HelpIcon,
  WalletProfileIcon,
} from '../../../assets/svgIcons';

export const ProfileScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [value, setValue] = useState<boolean>(false);

  const ListItems = [
    {
      id: 1,
      text: 'Transaction history',
      icon: ArrowCircleDownIcon,
      link: 'TransactionScreen',
    },
    {
      id: 2,
      text: 'Terms Of Service',
      icon: GlobalEditIcon,
      link: 'ReceiveCoinScreen',
    },
    {
      id: 3,
      text: 'Help Center',
      icon: HelpIcon,
      link: 'HelpCenterScreen',
    },
    {
      id: 4,
      text: 'Show Balance',
      icon: WalletProfileIcon,
      link: 'ReceiveCoinScreen',
    },
    {
      id: 5,
      text: 'About',
      link: 'AboutScreen',
      icon: AboutIcon,
    },
    {
      id: 6,
      text: 'Receive Coin',
      link: 'ReceiveCoinScreen',
      icon: WalletProfileIcon,
    },
    {
      id: 6,
      text: 'Support',
      link: 'ChatScreen',
      icon: HelpIcon,
    },
    {
      id: 6,
      text: 'Withdrawal',
      link: 'WithdrawalScreen',
      icon: WalletProfileIcon,
    },
  ];

  return (
    <View style={[tw`flex-1 pr-2 pl-1`]}>
      <TopSection settingsIcon={true} title="Profile" searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row items-center px-4`}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileScreen')}>
            <Image
              resizeMode="contain"
              style={tw`w-12 h-12 mr-4`}
              source={require('..././../../assets/images/profile-pic.png')}
            />
          </TouchableOpacity>
          <Text style={[tw`text-black text-xl font-bold`]}>Hi, Amalia</Text>
        </View>
        <View style={tw`py-6 px-4`}>
          {ListItems.map(({id, text, icon: Icon, link}) => (
            <TouchableOpacity
              onPress={() => {
                if (link === 'WithdrawalScreen') {
                  navigation.navigate('AddMoneyScreen', {
                    title: 'Withdrawal',
                    subTitle: 'Select Withdrawal method',
                    firstItemTitle: 'Withdraw with your Bank...',
                    firstItemDescription: 'Withdraw money direct...',
                    secondItemTitle: 'Withdraw with VISA/Master Card',
                    secondItemDescription:
                      'Withdraw money directly from your bank card',
                  });
                  return;
                }
                navigation.navigate(link as any);
              }}
              style={[tw`border-b py-6 flex-row items-center justify-between`]}
              key={id}>
              <View style={tw`flex-row items-center`}>
                <Icon />

                <Text style={[tw`text-base px-4`]}>{text}</Text>
              </View>
              {text === 'Show Balance' ? (
                <Switch
                  trackColor={{false: 'rgba(229, 229, 229, 1)'}}
                  thumbColor={'#0A352C'}
                  value={value}
                  onChange={() => setValue(prev => !prev)}
                />
              ) : (
                <ArrowRightIcon />
              )}
            </TouchableOpacity>
          ))}
        </View>
        <Text style={[tw`text-black text-base my-10 text-center text-red-500`]}>
          Delete My Account
        </Text>
      </ScrollView>
    </View>
  );
};
