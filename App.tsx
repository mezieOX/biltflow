import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator, navigationRef} from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <NavigationContainer ref={navigationRef}>
          <RootNavigator />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
