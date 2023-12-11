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
    Animated,
    TouchableOpacity
} from 'react-native';
import styles from './cart';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import instance from '../../axios/instaces';
import { CartItemDetail } from '../../interfaces/CartInterface';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
        const leftSwipe = (dragX) => {
            const scale = dragX.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
                extrapolate: 'clamp',
            });
            return (

                <TouchableOpacity activeOpacity={0.6}>
                    <View>
                        <Animated.Text style={{ transform: [{ scale: scale }] }}>
                            Delete
                        </Animated.Text>
                    </View>
                </TouchableOpacity>

            );
        };
        return (
            // <Swipeable renderLeftActions={leftSwipe}>
                <View style={styles.cartStyle}>
                    <Image source={{ uri: img }} style={{ width: 50, height: 50 }} />
                    <View style={{ marginStart: 10 }}>
                        <Text>{item.items.item_name}</Text>
                        <Text>Số lượng: {item.quantity}</Text>
                        <Text>Đơn giá: {item.items.price} VNĐ</Text>
                    </View>
                </View>
            // </Swipeable>
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
            <Text style={styles.text}>Giỏ hàng</Text>
            <View>
                {data ? <View>
                    <View>
                        <Text>Thành tiền: {totalPrice} VNĐ</Text>
                    </View>
                    <FlatList
                        style={{ marginBottom: 100 }}
                        data={data}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <CartItemFlatList item={item} />}
                    // numColumns={2}
                    />
                </View> :
                    <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <Text>Không có đơn hàng nào :(</Text>
                    </View>}
            </View>

        </View>
    );
}

export default CartIndex;