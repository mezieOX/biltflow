import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Button, TopSection} from '../../components';
import {Image} from 'react-native';
import ArrowDownIcon from '../../components/icons/ArrowDownIcon';
import {MD3TypescaleKey} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

const coins = [
  {label: 'ETH', imgSrc: require('../../../assets/images/ethereum-logo.png')},
  {
    label: 'Cardano',
    imgSrc: require('../../../assets/images/cardano-logo.png'),
  },
  {label: 'TRON', imgSrc: require('../../../assets/images/tron-logo.png')},
  {label: 'BTC', imgSrc: require('../../../assets/images/bitcoin.png')},
];

const SellCryptoScreen = () => {
  const {bottom} = useSafeAreaInsets();

  const [selectedCoin, setSelectedCoin] = useState<(typeof coins)[0]>(coins[0]);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  return (
    <View style={{flex: 1, backgroundColor: '#01041F', paddingHorizontal: 24}}>
      <TopSection title="Sell Crypto" searchIcon={false} />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={{gap: 35, marginTop: 20, flex: 1}}>
          <View style={{gap: 8}}>
            <Text style={[styles.text, styles.labelText, {marginTop: 10}]}>
              Select Coin
            </Text>
            <TouchableOpacity
              style={[styles.inputContainer]}
              onPress={() => {
                bottomSheetModalRef.current?.present();
              }}>
              <Image
                style={{width: 20, height: 20}}
                source={selectedCoin.imgSrc}
              />
              <Text>{selectedCoin.label}</Text>
              <ArrowDownIcon fill={'#000'} style={{marginLeft: 'auto'}} />
            </TouchableOpacity>
          </View>
          <View style={{gap: 8}}>
            <Text style={[styles.text, styles.labelText, {marginTop: 10}]}>
              LImits
            </Text>
            <View style={[styles.inputContainer]}>
              <Image
                style={{width: 20, height: 20}}
                source={selectedCoin.imgSrc}
              />
              <TextInput placeholder="1,000 - 1,700" style={{flex: 1}} />
            </View>
          </View>
          <View style={{gap: 8}}>
            <Text style={[styles.text, styles.labelText, {marginTop: 10}]}>
              Quantity
            </Text>
            <View style={[styles.inputContainer]}>
              <Image
                style={{width: 20, height: 20}}
                source={selectedCoin.imgSrc}
              />
              <TextInput placeholder="1,000 - 1,700" style={{flex: 1}} />
            </View>
          </View>
          <View style={{gap: 8}}>
            <Text style={[styles.text, styles.labelText, {marginTop: 10}]}>
              Enter Amount
            </Text>
            <View style={[styles.inputContainer]}>
              <Image
                style={{width: 20, height: 20}}
                source={selectedCoin.imgSrc}
              />
              <TextInput placeholder="$1,000" style={{flex: 1}} />
            </View>
          </View>
          <Text style={[styles.text, {textAlign: 'center'}]}>
            Available Balance: 3.5849 ETH
          </Text>
          <View style={{marginTop: 'auto', marginBottom: bottom + 16}}>
            <Button title="Done" login />
          </View>
        </View>
      </ScrollView>
      <View>
        <BottomSheetModal
          backdropComponent={BottomSheetBackdrop}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={['25%', '30%']}>
          <BottomSheetView>
            <View style={{paddingHorizontal: 16, gap: 8, marginTop: 20}}>
              {coins.map(coin => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedCoin(coin);
                    bottomSheetModalRef.current?.dismiss();
                  }}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    // paddingVertical: 16,
                    paddingBottom: 10,
                    borderColor: '#EEEEF0',
                  }}>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                    }}
                    source={coin.imgSrc}
                  />
                  <Text>{coin.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  labelText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  inputContainer: {
    backgroundColor: '#fff',
    padding: 9,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default SellCryptoScreen;
