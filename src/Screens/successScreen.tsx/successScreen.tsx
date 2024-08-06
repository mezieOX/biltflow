import {View, Text, Image} from 'react-native';
import React from 'react';
import {Button} from '../../components';

const SucessScreen = () => {
  return (
    <View style={{backgroundColor: '#01041F', flex: 1}}>
      <Image
        source={require('../../../assets/images/check-mark.png')}
        style={{
          marginHorizontal: 'auto',
          marginTop: 150,
          width: 150,
          height: 150,
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: 24,
          marginTop: 43,
        }}>
        ₦500.00
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: 24,
          marginTop: 15,
        }}>
        Data purchased successfully.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: 24,
          marginTop: 44,
        }}>
        Transaction ID: #26347878
      </Text>
      <View style={{marginTop: 40, gap: 80, paddingHorizontal: 24}}>
        <Button title="Share Receipt" outline />
        <Button title="Done" login />
      </View>
    </View>
  );
};

export default SucessScreen;
