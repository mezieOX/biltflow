import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {s as tw} from 'react-native-wind';

export const TextInputComp = ({
  icon,
  iconRight,
  placeholder,
  support = false,
  secureTextEntry,
  keyboardType,
  label,
}: {
  icon?: ImageSourcePropType;
  placeholder: string;
  iconRight?: ImageSourcePropType;
  support?: boolean;
  fill?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  label?: string;
}) => {
  return (
    <>
      {label ? <Text style={tw`text-white pt-2`}>{label}</Text> : null}
      <View
        style={[
          tw`my-2 ${
            support ? 'border rounded-lg' : 'border-b '
          }  flex-row items-center bg-white rounded-xl px-4`,
        ]}>
        {icon ? (
          <Image
            style={support ? tw`h-5 w-5 mx-4` : tw`h-5 w-5`}
            source={icon}
          />
        ) : null}
        {iconRight ? (
          <Image style={tw`h-5 w-5 mx-4`} source={iconRight} />
        ) : null}
        <TextInput
          keyboardType={keyboardType}
          placeholder={placeholder}
          style={[
            tw`h-14 px-4 rounded-lg placeholder:text-red-500 outline-0  min-w-full`,
          ]}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </>
  );
};

export const PasswordInputComp = ({
  label,
  placeholder,
}: {
  label?: string;
  placeholder: string;
}) => {
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  return (
    <View style={tw`my-2`}>
      {label ? (
        <Text style={[tw`py-2 text-xs uppercase text-black`, styles.label]}>
          {label}
        </Text>
      ) : null}
      <View
        style={[
          tw`bg-gray-100 h-16 px-4 w-full flex-row items-center justify-between py-1 rounded-lg outline-0 border-0 min-w-full`,
          styles.input,
        ]}>
        <TextInput placeholder={placeholder} />
        {isEyeOpen ? (
          <TouchableWithoutFeedback onPress={() => setIsEyeOpen(prev => !prev)}>
            <Image
              source={require('../../assets/images/eye.png')}
              style={tw`h-5 w-5 mx-2`}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback onPress={() => setIsEyeOpen(prev => !prev)}>
            <Image
              source={require('../../assets/images/eye-close.png')}
              style={tw`h-5 w-5 mx-2`}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
};

export const TwoFactorInputComp = ({
  label,
  placeholder,
  onChange,
}: {
  label?: string;
  placeholder: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  wallet?: boolean;
}) => {
  return (
    <View style={tw`my-2`}>
      {label ? (
        <Text style={[tw`py-2 text-xs uppercase text-white`, styles.label]}>
          {label}
        </Text>
      ) : null}
      <View
        style={[
          tw`h-14 pl-4 flex-row items-center justify-between py-1 border min-w-full`,
          styles.searchInput,
        ]}>
        <TextInput
          onChange={onChange}
          style={tw`flex-1 mx-2 h-14 text-sm text-white py-4`}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export const SearchInputComp = ({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}) => {
  return (
    <View style={tw`my-2`}>
      <View
        style={[
          tw`h-10 pl-4 flex-row items-center bg-white justify-between py-1 border min-w-full`,
          styles.searchInput,
        ]}>
        <Image
          style={tw`h-4 w-4`}
          source={require('../../assets/images/search.png')}
        />
        <TextInput
          onChange={onChange}
          style={tw`flex-1 mx-2 text-sm text-black h-10`}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export const TextAreaInputComp = ({
  label,
  placeholder,
  support,
}: {
  label?: string;
  placeholder: string;
  support?: boolean;
}) => {
  return (
    <View style={tw`my-2`}>
      {label ? (
        <Text
          style={[tw`py-2 text-xs mb-3 uppercase text-black`, styles.label]}>
          {label}
        </Text>
      ) : null}
      <TextInput
        multiline={true}
        numberOfLines={10}
        placeholder={placeholder}
        style={[
          tw`bg-gray-100 h-16 px-4 py-4 rounded-lg border-2 min-w-full`,
          styles.input,
          {
            height: support ? 150 : 250,
            textAlignVertical: 'top',
            backgroundColor: 'transparent',
            borderColor: 'rgba(0, 0, 0, 0.11)',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#fff',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#F0F5FA',
  },
  searchInput: {
    borderColor: '#fff',
    borderRadius: 5.38,
    borderWidth: 1,
  },
});
