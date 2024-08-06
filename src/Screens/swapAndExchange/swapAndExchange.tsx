import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';
import {Button, TopSection} from '../../components';
import {Tab, TabView} from '@rneui/base';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import ArrowDownIcon from '../../components/icons/ArrowDownIcon';
import SwapCryptoIcon from '../../components/icons/SwapIcon';

const SwapAndExchangeScreen = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <View style={[{backgroundColor: '#01041F', paddingTop: 20, flex: 1}]}>
      <TopSection title="Swap & Exchange" searchIcon={false} />
      <Tab
        indicatorStyle={{
          backgroundColor: '#E5770E',
        }}
        dense
        value={index}
        onChange={setIndex}
        style={{marginTop: 20}}>
        <Tab.Item titleStyle={styles.titleStyle}>Swap</Tab.Item>
        <Tab.Item titleStyle={styles.titleStyle}>Exchange</Tab.Item>
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <SwapScreen />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <ExchangeScreen />
        </TabView.Item>
      </TabView>
    </View>
  );
};

function SwapScreen() {
  const [selectedCoin, setSelectedCoin] = React.useState('ETH');
  const [swapSelectedCoin, setSwapSelectedCoin] = React.useState('BTC');
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const bottomSheetModalRef2 = React.useRef<BottomSheetModal>(null);
  return (
    <View style={{paddingHorizontal: 24}}>
      <View style={{marginTop: 50}}>
        <Text style={styles.text}>Choose your Crypto</Text>
        <Pressable
          onPress={() => {
            bottomSheetModalRef.current?.present();
          }}
          style={[
            styles.inputContainer,
            {
              marginTop: 27,
            },
          ]}>
          <Text
            style={{
              fontSize: 16,
            }}>
            {selectedCoin}
          </Text>
          <ArrowDownIcon fill={'#000'} />
        </Pressable>
      </View>
      <View style={{marginTop: 26}}>
        <Text style={styles.text}>Amount</Text>
        <View
          style={[
            styles.inputContainer,
            {
              marginTop: 20,
            },
          ]}>
          <Text>{selectedCoin}</Text>
          <TextInput
            style={{fontSize: 16, textAlign: 'right', flex: 1}}
            placeholder=" 0.000032.157"
          />
        </View>
      </View>
      <View
        style={{
          padding: 6,
          borderRadius: 50,
          backgroundColor: '#E5770E',
          alignSelf: 'center',
          marginTop: 24,
        }}>
        <SwapCryptoIcon style={{marginHorizontal: 'auto'}} />
      </View>
      <View>
        <BottomSheetModal
          backdropComponent={BottomSheetBackdrop}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={['25%', '30%']}>
          <BottomSheetView>
            <View style={{paddingHorizontal: 16, gap: 8, marginTop: 20}}>
              {['ETH'].map((coin, index) => (
                <TouchableOpacity
                  key={index}
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
                  <Text>{coin}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.text}>Choose your Crypto</Text>
        <Pressable
          onPress={() => {
            bottomSheetModalRef2.current?.present();
          }}
          style={[
            styles.inputContainer,
            {
              marginTop: 20,
            },
          ]}>
          <Text
            style={{
              fontSize: 16,
            }}>
            {swapSelectedCoin}
          </Text>
          <ArrowDownIcon fill={'#000'} />
        </Pressable>
      </View>
      <View>
        <BottomSheetModal
          backdropComponent={BottomSheetBackdrop}
          ref={bottomSheetModalRef2}
          index={1}
          snapPoints={['25%', '30%']}>
          <BottomSheetView>
            <View style={{paddingHorizontal: 16, gap: 8, marginTop: 20}}>
              {['BTC'].map((coin, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSwapSelectedCoin(coin);
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
                  <Text>{swapSelectedCoin}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
      <View
        style={{
          paddingHorizontal: 45,
          paddingVertical: 3,
          backgroundColor: '#E5770E',
          marginHorizontal: 'auto',
          borderRadius: 8,
          marginTop: 32,
        }}>
        <Text style={{color: '#fff'}}>Total Balance: ₦1,565,520.57</Text>
      </View>
      <View style={{marginTop: 31}}>
        <Button title="Swap Crypto" login />
      </View>
    </View>
  );
}

function ExchangeScreen() {
  const [currency, setSelectedCurrency] = React.useState('USD');
  const [swapSelectedCurrency, setSwapSelectedCurrency] = React.useState('USD');
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const bottomSheetModalRef2 = React.useRef<BottomSheetModal>(null);
  return (
    <View style={{paddingHorizontal: 24}}>
      <View style={{marginTop: 50}}>
        <Text style={styles.text}>Choose your currency</Text>
        <Pressable
          onPress={() => {
            bottomSheetModalRef.current?.present();
          }}
          style={[
            styles.inputContainer,
            {
              marginTop: 27,
            },
          ]}>
          <Text
            style={{
              fontSize: 16,
            }}>
            {currency}
          </Text>
          <ArrowDownIcon fill={'#000'} />
        </Pressable>
      </View>
      <View style={{marginTop: 26}}>
        <Text style={styles.text}>Amount</Text>
        <View
          style={[
            styles.inputContainer,
            {
              marginTop: 20,
            },
          ]}>
          <Text>{currency}</Text>
          <TextInput
            style={{fontSize: 16, textAlign: 'right', flex: 1}}
            placeholder=" 0.000032.157"
          />
        </View>
      </View>
      <View
        style={{
          padding: 6,
          borderRadius: 50,
          backgroundColor: '#E5770E',
          alignSelf: 'center',
          marginTop: 24,
        }}>
        <SwapCryptoIcon style={{marginHorizontal: 'auto'}} />
      </View>
      <View>
        <BottomSheetModal
          backdropComponent={BottomSheetBackdrop}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={['25%', '30%']}>
          <BottomSheetView>
            <View style={{paddingHorizontal: 16, gap: 8, marginTop: 20}}>
              {['USD', 'NGN'].map((coin, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSwapSelectedCurrency(coin);
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
                  <Text>{coin}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.text}>Choose your currency</Text>
        <Pressable
          onPress={() => {
            bottomSheetModalRef2.current?.present();
          }}
          style={[
            styles.inputContainer,
            {
              marginTop: 20,
            },
          ]}>
          <Text
            style={{
              fontSize: 16,
            }}>
            {swapSelectedCurrency}
          </Text>
          <ArrowDownIcon fill={'#000'} />
        </Pressable>
      </View>
      <View>
        <BottomSheetModal
          backdropComponent={BottomSheetBackdrop}
          ref={bottomSheetModalRef2}
          index={1}
          snapPoints={['25%', '30%']}>
          <BottomSheetView>
            <View style={{paddingHorizontal: 16, gap: 8, marginTop: 20}}>
              {['USD', 'NGN'].map((coin, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSwapSelectedCurrency(coin);
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
                  <Text>{swapSelectedCurrency}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
      <View
        style={{
          paddingHorizontal: 45,
          paddingVertical: 3,
          backgroundColor: '#E5770E',
          marginHorizontal: 'auto',
          borderRadius: 8,
          marginTop: 32,
        }}>
        <Text style={{color: '#fff'}}>Total Balance: ₦1,565,520.57</Text>
      </View>
      <View style={{marginTop: 31}}>
        <Button title="Exchange" login />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 24,
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 22,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SwapAndExchangeScreen;
