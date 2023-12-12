import React, { PureComponent, useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import styles from './cart';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import instance from '../../axios/instaces';
import { CartItemDetail } from '../../interfaces/CartInterface';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';
import Icon from "react-native-vector-icons/MaterialIcons";

const SCREEN_WIDTH = Dimensions.get('window').width;
interface CartItemFlatListProps {
    item: CartItemDetail;
}
class CartItemFlatList extends PureComponent<CartItemFlatListProps>{
    render() {
        const { item } = this.props;
        const img = `https://firebasestorage.googleapis.com/v0/b/dacn-2.appspot.com/o/${item.items.image_name[0]}?alt=media`;
        const leftAction = () => {
            return (
                <View>
                    <Text>asdashdk</Text>
                </View>
            )
        }
        return (
                    <View style={styles.cartStyle}>
                        <Image source={{ uri: img }} style={{ width: 50, height: 50, borderRadius: 5, paddingLeft: 20 }} />
                        <View style={{ marginStart: 10 }}>
                            <Text style={styles.textColor}>{item.items.item_name}</Text>
                            <Text style={styles.textColor}>Số lượng: {item.quantity}</Text>
                            <Text style={styles.textColor}>Đơn giá: {item.items.price} VNĐ</Text>
                        </View>
                    </View>
        );
    }
}

const CartIndex = () => {
    const [check, setCheck] = useState(false);
    const [data, setData] = useState<CartItemDetail[]>();
    const [totalPrice, setTotalPrice] = useState<number>();
    const token = useAppSelector((state) => state.login.access_token);
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await instance.get(`cart/get-item-cart`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setData(res.data);
            } catch (error) {

            }
        }
        const calculatePrice = () => {
            var price: number = 0;
            if (data) {
                data.map((item) => {
                    price += item.quantity * item.items.price;
                });
            }
            setTotalPrice(price);
        }
        getData();
        calculatePrice();
    }, [data]);

    return (
        <View style={styles.container}>
            <View>
                {data ? <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 80, backgroundColor: 'white', paddingStart: 10, elevation: 5, borderRadius: 10 }}>
                        <View>
                            <Text style={styles.textColor}>Thành tiền: </Text>
                            <Text style={styles.textColor}>{totalPrice} VNĐ</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', width: 'auto', paddingEnd: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: "#0077b6" }}>
                                <Icon name='done' size={30} color={'white'} />
                                <Text style={{ color: 'white' }}>Thanh toán</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <FlatList
                            style={{ marginBottom: 310, marginTop: 20 }}
                            data={data}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => <CartItemFlatList item={item} />}
                        // numColumns={2}
                        />
                    </View>
                </View> :
                    <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <Text>Không có đơn hàng nào :(</Text>
                    </View>}
            </View>

        </View>
    );
}

export default CartIndex;