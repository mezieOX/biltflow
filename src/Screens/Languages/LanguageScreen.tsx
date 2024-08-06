import {View, Text, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {Button, TopSection} from '../../components';
import CheckedCircle from '../../components/icons/Checked-Circle';
import {TouchableOpacity} from 'react-native';
import UnCheckedCircle from '../../components/icons/UnCheckedCircle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const data = [
  {
    id: 1,
    title: 'English',
    imgSrc: require('../../../assets/images/english-flag.png'),
  },
  {
    id: 2,
    title: 'French',
    imgSrc: require('../../../assets/images/french-flag.png'),
  },
  {
    id: 3,
    title: 'German',
    imgSrc: require('../../../assets/images/german-flag.png'),
  },
  {
    id: 4,
    title: 'Hindi',
    imgSrc: require('../../../assets/images/hindi-flag.png'),
  },

  {
    id: 6,
    title: 'Arabic',
    imgSrc: require('../../../assets/images/arabic-flag.png'),
  },
];
const LanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const {bottom} = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: '#01041F',
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 10,
      }}>
      <TopSection title="Language" searchIcon={false} />
      <FlatList
        data={data}
        contentContainerStyle={{gap: 16, marginTop: 40}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setSelectedLanguage(item.title)}
            style={{
              flexDirection: 'row',
              padding: 10,
              borderWidth: 1,
              borderColor:
                selectedLanguage === item.title ? '#F7A701' : '#FFFF',
              borderRadius: 8,
              gap: 16,
              backgroundColor: '#000',
            }}>
            <Image source={item.imgSrc} />
            <View>
              <Text style={{color: '#5A5A5A', fontSize: 16, fontWeight: '500'}}>
                {item.title}
              </Text>
              <Text style={{color: '#fff'}}>{item.title}</Text>
            </View>
            {selectedLanguage === item.title && (
              <CheckedCircle style={{marginLeft: 'auto'}} />
            )}
            {selectedLanguage !== item.title && (
              <UnCheckedCircle style={{marginLeft: 'auto'}} />
            )}
          </TouchableOpacity>
        )}
      />
      <View style={{marginBottom: bottom + 16}}>
        <Button login title="Save" />
      </View>
    </View>
  );
};

export default LanguageScreen;
