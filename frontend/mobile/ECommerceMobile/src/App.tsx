import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './common/BottomNav';
import HomeIndex from './pages/home/HomeIndex';
import StackNav from './stacks/StacksNav';
import { store } from './app/store'
import { Provider } from 'react-redux'
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;