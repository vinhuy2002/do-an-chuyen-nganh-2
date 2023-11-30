import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './common/BottomNav';
import HomeIndex from './pages/home/HomeIndex';
import StackNav from './stacks/StacksNav';
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;