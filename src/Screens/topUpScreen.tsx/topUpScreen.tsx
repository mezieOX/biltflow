/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation, useRoute} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {Button, TextInputComp, TopSection} from '../../components';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import CreditCardChipIcon from '../../components/icons/CreditCardChipIcon';
import MasterCardIcon from '../../components/icons/MasterCardIcon';
import VisaIcon from '../../components/icons/VisaIcon';
import AmexIcon from '../../components/icons/AmexIcon';

const cards = [
  {
    cardHolder: 'Edwin Izantim',
    cardNumber: '5061 0000 0000 0000',
    type: 'Mastercard',
    accountNumber: '1234567890',
    svgIcon: <MasterCardIcon />,
  },
  {
    cardHolder: 'Edwin Izantim',
    cardNumber: '5061 0000 0000 0000',
    type: 'Visa',
    accountNumber: '1234567890',
    svgIcon: <VisaIcon />,
  },
  {
    cardHolder: 'Edwin Izantim',
    cardNumber: '5061 0000 0000 0000',
    type: 'Debit',
    accountNumber: '1234567890',
    svgIcon: <AmexIcon />,
  },
];

export const TopUpScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  const {card} = useRoute().params as any;
  const {width} = useWindowDimensions();
  const {bottom} = useSafeAreaInsets();

  const choosedCard = cards.find(item => item.type === card);

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
      <TopSection title="TopUp" searchIcon={false} />
      <View style={{position: 'relative', marginTop: 55, width: width - 32}}>
        <View
          style={[
            {
              backgroundColor: '#E5770E',
              padding: 18,
              borderRadius: 22,
            },
            choosedCard!.type === 'Visa' && {
              backgroundColor: '#0e4595',
            },
            choosedCard!.type === 'Debit' && {
              backgroundColor: '#306FC5',
            },
          ]}>
          <Text style={[styles.text]}>Card Holder</Text>
          <Text style={[styles.text, {marginTop: 4}]}>
            {choosedCard!.cardHolder}
          </Text>
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
              {choosedCard!.cardNumber}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
              marginTop: 30,
            }}>
            {choosedCard!.svgIcon}
            <Text style={[styles.text, {marginTop: 4}]}>
              {choosedCard!.type}
            </Text>
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
            choosedCard!.type === 'Visa' && {
              backgroundColor: '#0e4595',
            },
            choosedCard!.type === 'Debit' && {
              backgroundColor: '#306FC5',
            },
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
            choosedCard!.type === 'Visa' && {
              backgroundColor: '#0e4595',
            },
            choosedCard!.type === 'Debit' && {
              backgroundColor: '#306FC5',
            },
          ]}></View>
      </View>
      <View style={{marginTop: 'auto', marginBottom: bottom + 10}}>
        <TextInputComp placeholder="Jason Duong" label="Holder Name" />
        <TextInputComp placeholder="3,200.00" label="Card Number" />
        <View
          style={{
            marginTop: 44,
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 12,
          }}>
          <TextInputComp style={{flex: 1}} placeholder="10/03" label="mm/yy" />
          <TextInputComp style={{flex: 1}} placeholder="000" label="CVC" />
        </View>
        <View style={{marginTop: 44}}>
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
