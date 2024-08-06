/* eslint-disable prettier/prettier */
import React from 'react';
<<<<<<< HEAD
import {Image, ScrollView, Text, View} from 'react-native';
=======
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
>>>>>>> origin/bidemi-project
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {Button, TextInputComp, TopSection} from '../../components';
<<<<<<< HEAD

export const AddBankWithdrawalCard = () => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <View style={[tw`flex-1 bg-white`]}>
      <TopSection title="Add Bank Card" searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={[tw`text-lg px-4 text-black font-medium`]}>
            Card details
          </Text>
          <Image
            resizeMode="contain"
            style={tw`h-20 w-20 mx-4`}
            source={require('../../../assets/images/mastercard-logo.png')}
          />
        </View>

        <View style={tw`px-4`}>
          <TextInputComp support placeholder="Name on Card" />
          <TextInputComp
            support
            placeholder="Card number"
            icon={require('../../../assets/images/credit-card.png')}
            keyboardType="numeric"
          />
        </View>
        <View style={tw`py-10 px-4`}>
          <Button
            onPress={() =>
              navigation.navigate('CongratulationScreen', {
                title: 'Withdraw Successful',
                description: 'Your request has been confirmed',
                btnText: 'View History',
              })
            }
            title={'Withdraw'}
          />
        </View>
      </ScrollView>
    </View>
  );
};
=======
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import CreditCardChipIcon from '../../components/icons/CreditCardChipIcon';
import MasterCardIcon from '../../components/icons/MasterCardIcon';

export const AddBankWithdrawalCard = () => {
  const navigation = useNavigation<INavigationSetting>();
  const {bottom} = useSafeAreaInsets();

  return (
    <View
      style={[
        tw`flex-1`,
        {
          backgroundColor: '#01041F',
          paddingHorizontal: 16,
          paddingTop: 20,
        },
      ]}>
      <TopSection title="Withdraw" searchIcon={false} />
      <View style={{position: 'relative', marginTop: 40}}>
        <View
          style={{
            backgroundColor: '#E5770E',
            padding: 18,
            borderRadius: 22,
          }}>
          <Text style={[styles.text]}>Card Holder</Text>
          <Text style={[styles.text, {marginTop: 4}]}>Edwin Izantim</Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 45,
              marginTop: 34,
            }}>
            <CreditCardChipIcon />
            <Text
              style={[
                styles.text,
                {
                  fontSize: 16,
                  fontWeight: '600',
                },
              ]}>
              5061 0000 0000 0000
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
              marginTop: 30,
            }}>
            <MasterCardIcon />
            <Text style={[styles.text, {marginTop: 4}]}>Mastercard</Text>
          </View>
        </View>
        <View
          style={[
            {
              backgroundColor: '#E5770E',
              padding: 18,
              borderRadius: 22,
              transform: [{rotate: '8deg'}],
              opacity: 0.6,
              zIndex: -9,
            },
            StyleSheet.absoluteFillObject,
            {top: 25, left: 10, right: 10},
          ]}></View>
        <View
          style={[
            {
              backgroundColor: '#E5770E',
              padding: 18,
              borderRadius: 22,
              transform: [{rotate: '15deg'}],
              opacity: 0.4,
              zIndex: -10,
            },
            StyleSheet.absoluteFillObject,
            {top: 85, left: 10, right: 40},
          ]}></View>
      </View>
      <View style={{marginTop: 66, flex: 1}}>
        <TextInputComp placeholder="Jason Duong" label="Holder Name" />
        <TextInputComp placeholder="3,200.00" label="Card Number" />
        <View style={{marginTop: 'auto', marginBottom: bottom + 16}}>
          <Button title="Withdraw" login />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '500',
  },
});
>>>>>>> origin/bidemi-project
