import {
  View,
  Text,
  Clipboard,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button, TopSection} from '../../components';
import ReferralIcon from '../../components/icons/ReferralIcon';

export const ReferralProgramScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#01041F', paddingTop: 20}}>
      <TopSection title="Referral Program" searchIcon={false} />
      <View style={{paddingHorizontal: 24, marginTop: 20}}>
        <ReferralIcon style={{marginHorizontal: 'auto', marginTop: 42}} />

        <Text
          style={[
            styles.headerTitle,
            {
              marginTop: 20,
            },
          ]}>
          Refer and Earn Free Cryptocurrency
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 14,
            textAlign: 'center',
            marginTop: 25,
          }}>
          {' '}
          Introducing Giottus Referral 2.0. As part of this new program we will
          be giving away upto 100% of our earning from your referral. And it
          does not stop there. You get a chance to win upto 10,000 free tokens.
          Refer, like, share and Earn.
        </Text>
        <Text style={{color: '#fff', marginTop: 35, fontSize: 14}}>
          Your Referal Link
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#fff',
            paddingVertical: 15,
            paddingHorizontal: 8,
            borderRadius: 8,
            marginTop: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#fff'}}>
            https://www.giottus.com/?refcode=RRPFAS
          </Text>
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString('https://www.giottus.com/?refcode=RRPFAS');
            }}
            style={{
              backgroundColor: '#E5770E',
              position: 'absolute',
              right: 10,
              top: 5,
              borderRadius: 5,
            }}>
            <Text style={{padding: 8, color: '#fff'}}>Copy Code</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <Button login title="Refer now" />
        </View>
      </View>
    </View>
  );
};

export default ReferralProgramScreen;

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    color: '#E5770E',
    fontSize: 18,
    fontWeight: '700',
  },
});
