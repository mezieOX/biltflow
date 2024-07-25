import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator, navigationRef} from './src/navigation';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
