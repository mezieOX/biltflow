import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {TopSection} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {ArrowRightIcon} from '../../../assets/svgIcons';

export const HelpCenterScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  const ListItems = [
    {
      id: 1,
      title: 'Call Us',
      text: 'Contact Call Center',
      image: require('../../../assets/images/phone.png'),
    },
    {
      id: 2,
      title: 'Email Us',
      text: 'Send an in-app chat',
      image: require('../../../assets/images/email.png'),
    },
    {
      id: 3,
      title: 'Chat with Us',
      text: 'Send an in-app chat',
      image: require('../../../assets/images/message.png'),
    },
  ];

  return (
    <View style={[tw`flex-1 pr-2 pl-1`]}>
      <TopSection settingsIcon={false} title="Help Center" searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`py-6 pr-4`}>
          {ListItems.map(({id, text, title, image}) => (
            <TouchableOpacity
              style={[tw`py-4 flex-row items-center justify-between`]}
              key={id}>
              <View style={tw`flex-row items-center pl-6`}>
                <View>
                  <Image
                    style={tw`w-9 h-9`}
                    resizeMode="contain"
                    source={image}
                  />
                </View>
                <View>
                  <Text
                    style={[
                      tw`text-base text-black px-4 capitalize font-bold`,
                    ]}>
                    {title}
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <Text style={[tw`text-base px-4 text-black`]}>{text}</Text>
                  </View>
                </View>
              </View>
              <ArrowRightIcon />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
