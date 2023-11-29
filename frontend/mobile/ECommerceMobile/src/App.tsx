import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './common/BottomNav';
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;