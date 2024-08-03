import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {TopSection} from '../../components';

export const NotificationScreen = () => {
  const ListItems = [
    {
      id: 1,
      text: 'Augur (REP) went above the price of &100 ......',
    },
    {
      id: 2,
      text: 'Tezos (XTZ) was just listed on Gemini.',
    },
    {
      id: 3,
      text: 'Your Golem (GNT) balance changed by +4900Z.',
    },
    {
      id: 4,
      text: 'Maker (MKR) was just listed on Rigzo.',
    },
  ];

  return (
    <View style={[tw`flex-1 pr-2 pl-1 bg-white`]}>
      <TopSection
        settingsIcon={true}
        title="Notifications"
        searchIcon={false}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[tw`py-6 px-4`]}>
          {ListItems.map(({id, text}) => (
            <View
              style={[
                tw`my-6 min-w-full rounded-xl flex-column items-start justify-center`,
                styles.shadowBox,
              ]}
              key={id}>
              <Text
                style={[
                  tw`text-sm px-4 text-black`,
                  {
                    color: '#0A352C',
                  },
                ]}>
                Cryptocurrency Alerting
              </Text>
              <View style={tw`flex-row items-start justify-start pt-2`}>
                <Text style={[tw`text-sm text-black px-4`]}>{text}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowBox: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
});
