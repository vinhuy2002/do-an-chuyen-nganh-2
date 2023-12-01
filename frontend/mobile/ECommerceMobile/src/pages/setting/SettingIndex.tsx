import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
  } from 'react-native';

  import { useNavigation, useRoute } from '@react-navigation/native';


const SettingIndex = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Button title='Đăng nhập' onPress={() => navigation.navigate("Login")} />
            <Button title='Đăng ký'  onPress={() => navigation.navigate("Register")} />
        </View>
    );
}
export default SettingIndex;