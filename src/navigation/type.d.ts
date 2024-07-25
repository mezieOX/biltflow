import {CompositeNavigationProp} from '@react-navigation/native';
import {RootStackParams} from '.';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from './authStack';
import {BottomStackParams} from './bottomStack';

type INavigationSetting = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParams>,
  NativeStackNavigationProp<AuthStackParams>
>;

type IAllNavigationStack = CompositeNavigationProp<
  NativeStackNavigationProp<INavigationSetting>,
  NativeStackNavigationProp<BottomStackParams>
>;
