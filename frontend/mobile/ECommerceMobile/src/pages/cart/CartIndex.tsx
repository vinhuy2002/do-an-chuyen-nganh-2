import React, {useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import styles from './cart';

const CartIndex = () => {
    const [check, setCheck] = useState(false);
    return(
        <View style= {styles.container}>
            <Text style={styles.text}>Giỏ hàng</Text>
            <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                {!check ? <View >
                    <Text>Không có đơn hàng nào :(</Text>
                </View> : null}
            </View>
        </View>
    );
}

export default CartIndex;