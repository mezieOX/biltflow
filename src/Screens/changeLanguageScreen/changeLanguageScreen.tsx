/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {Button, TopSection} from '../../components';

const languages = [
  {
    id: 1,
    text: 'English',
    flag: require('../../../assets/images/us-flag.png'),
  },
  {
    id: 2,
    text: 'Hindi',
    flag: require('../../../assets/images/hindi-flag.png'),
  },
  {
    id: 3,
    text: 'Arabic',
    flag: require('../../../assets/images/arabic-flag.png'),
  },
  {
    id: 4,
    text: 'French',
    flag: require('../../../assets/images/french-flag.png'),
  },
  {
    id: 5,
    text: 'German',
    flag: require('../../../assets/images/german-flag.png'),
  },
  {
    id: 6,
    text: 'Portuguese',
    flag: require('../../../assets/images/portuguese-flag.png'),
  },
  {
    id: 7,
    text: 'Turkish',
    flag: require('../../../assets/images/turkish-flag.png'),
  },
];

export const ChangeLanguageScreen = () => {
  const [, setToggle] = useState<boolean>(false);
  const [activeId, setActiveId] = useState(1);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#01041F', paddingTop: 30}}>
      <TopSection title="Change Language" searchIcon={false} />
      <View style={tw`px-4`}>
        {languages.map(({id, text, flag}) => (
          <TouchableOpacity onPress={() => setActiveId(id)} key={id}>
            <View
              style={[
                tw`border px-2 flex-row justify-between items-center py-4 border my-4  rounded-md`,
                {
                  backgroundColor: 'rgba(0, 0, 0, 1)',
                  borderColor:
                    activeId === id ? 'rgba(247, 167, 1, 1)' : '#fff',
                },
              ]}>
              <View style={tw`flex-row items-center`}>
                <Image style={tw`w-10 h-8`} source={flag} />
                <View style={tw`px-2`}>
                  <Text
                    style={[
                      tw`text-white`,
                      {
                        color: 'rgba(184, 184, 184, 1)',
                      },
                    ]}>
                    {text}
                  </Text>

                  <Text style={tw`text-white text-xs`}>{text}</Text>
                </View>
              </View>
              <Image
                style={tw`w-7 h-7`}
                source={
                  activeId === id
                    ? require('../../../assets/images/language-checked.png')
                    : require('../../../assets/images/change-language-white-tick.png')
                }
              />
            </View>
          </TouchableOpacity>
        ))}
        <View style={tw`pt-4 pb-20`}>
          <Button login title={'Save'} />
          <View style={tw`flex-row items-center text-center justify-center`}>
            <Text
              onPress={() => setToggle(prev => !prev)}
              style={[tw`h-4 w-4 border mr-3`]}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
