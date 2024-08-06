/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useMemo, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {s as tw} from 'react-native-wind';
import {Button, TopSection} from '../../components';
import CreditCardChipIcon from '../../components/icons/CreditCardChipIcon';
import MasterCardIcon from '../../components/icons/MasterCardIcon';
import PlusIcon from '../../components/icons/PlusIcon';
import {INavigationSetting} from '../../navigation/type';
import {RadioButton, RadioGroup} from 'react-native-radio-buttons-group';
import VisaIcon from '../../components/icons/VisaIcon';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import AmexIcon from '../../components/icons/AmexIcon';
import CheckedIcon from '../../components/icons/CheckedIcon';
import UnchechedIcon from '../../components/icons/UncheckedIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Pagination from '../../components/Pagination';
import CardPagination from '../../components/CardPagination';

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

export const ChooseCard = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [choosedCard, setChoosedCard] = useState('Mastercard');
  const {width} = useWindowDimensions();
  const {bottom} = useSafeAreaInsets();

  const x = useSharedValue(0);

  const flatListRef: any = useAnimatedRef();

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

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
      <TopSection title="Choose Card" searchIcon={false} />
      <View>
        <Animated.FlatList
          horizontal
          contentContainerStyle={{
            paddingBottom: 45,
            gap: 20,
          }}
          scrollEnabled={false}
          ref={flatListRef}
          showsHorizontalScrollIndicator={false}
          data={cards}
          onScroll={onScroll}
          renderItem={({item}) => (
            <View
              style={{position: 'relative', marginTop: 55, width: width - 32}}>
              <View
                style={[
                  {
                    backgroundColor: '#E5770E',
                    padding: 18,
                    borderRadius: 22,
                  },
                  item.type === 'Visa' && {
                    backgroundColor: '#0e4595',
                  },
                  item.type === 'Debit' && {
                    backgroundColor: '#306FC5',
                  },
                ]}>
                <Text style={[styles.text]}>Card Holder</Text>
                <Text style={[styles.text, {marginTop: 4}]}>
                  {item.cardHolder}
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
                    {item.cardNumber}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: 'flex-end',
                    marginTop: 30,
                  }}>
                  {item.svgIcon}
                  <Text style={[styles.text, {marginTop: 4}]}>{item.type}</Text>
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
                  item.type === 'Visa' && {
                    backgroundColor: '#0e4595',
                  },
                  item.type === 'Debit' && {
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
                  item.type === 'Visa' && {
                    backgroundColor: '#0e4595',
                  },
                  item.type === 'Debit' && {
                    backgroundColor: '#306FC5',
                  },
                ]}></View>
            </View>
          )}
        />

        <CardPagination data={cards} x={x} />

        <View
          style={{
            marginTop: 40,
          }}>
          <View
            style={{
              paddingVertical: 20,
              borderBottomWidth: 0.2,
              borderColor: '#B4B4B4',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
              }}>
              Other Cards
            </Text>
            <PlusIcon />
          </View>
          <View>
            {cards.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 16,
                  paddingVertical: 12,
                }}
                key={index}
                onPress={() => {
                  setChoosedCard(item.type);
                  flatListRef.current.scrollToIndex({
                    index: index,
                    animated: true,
                  });
                }}>
                {choosedCard === item.type && <CheckedIcon />}
                {choosedCard !== item.type && <UnchechedIcon />}
                {item.svgIcon}
                <Text
                  style={{
                    color: choosedCard === item.type ? '#191B1E' : '#fff',
                    fontSize: 14,
                  }}>
                  {item.type}
                </Text>
                <Text
                  style={{
                    color: choosedCard === item.type ? '#191B1E' : '#fff',
                    marginLeft: 'auto',
                  }}>
                  {item.accountNumber}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: bottom + 16,
        }}>
        <Button
          login
          title="Continue"
          onPress={() =>
            navigation.navigate('TopUpScreen' as any, {
              card: choosedCard,
            })
          }
        />
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
