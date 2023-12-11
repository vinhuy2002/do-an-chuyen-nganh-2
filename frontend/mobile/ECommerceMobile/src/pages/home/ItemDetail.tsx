import React, { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, Image, FlatList, ScrollView, Modal } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Item } from "../../interfaces/HomeInterface";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import instance from "../../axios/instaces";
import styles from "./styles";
import { Cart } from "../../interfaces/CartInterface";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const ItemDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params as { item: Item }
    const [arrImg, setArrImg] = useState<string[]>([]);
    const [currentImg, setCurrentImg] = useState<any>();
    const [modalVisible, setModalVisible] = useState(false);
    const [quantity, setQuantity] = useState<number>(1);
    const token = useAppSelector((state) => state.login.access_token);
    useEffect(() => {
        const fetchData = async () => {
            const images = await Promise.all(
                item.image_name.map(async (item) => {
                    try {
                        const response = await instance.get(`/item/image/${item}`);
                        return response.data;
                    } catch (error) {

                    }
                })
            );
            setArrImg(images.filter((image) => image !== null));
            setCurrentImg(images[0]);
        }
        fetchData();
    }, []);
    //Display
    const DisplayImg = () => {
        return (
            <View style={styles.boxSize}>
                {currentImg != null ? <Image source={{ uri: currentImg }} style={styles.imgDetailStyle} /> : null}
            </View>
        );
    }

    // Carousel
    const ShowImage = ({ img }: any) => {
        const eachImg = img;
        return (
            <TouchableOpacity onPress={() => {
                setCurrentImg(img);
            }}>
                <View >
                    <Image source={{ uri: eachImg }} style={styles.imgCarousel} />
                </View>
            </TouchableOpacity>
        )
    }
    const addQuantity = () => {
        if (quantity < item.quantity) {
            setQuantity(quantity + 1);
        } else
            setQuantity(quantity);
    }
    const removeQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else
            setQuantity(1);
    }
    const addToCart = async () => {
        try {
            const itemCart: Cart = {
                item_id: item.id,
                quantity: quantity
            }
            await instance.post(`/cart/add-item`, {
                item_id: itemCart.item_id,
                quantity: itemCart.quantity
            },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            setModalVisible(!modalVisible);
        } catch (error) {

        }
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ backgroundColor: "#0077b6" }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#0077b6", width: '35%' }}>
                        <Icon name="chevron-left" size={50} color={'white'} />
                        <Text style={{ color: "white", fontWeight: "bold" }}>Quay lại</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
                    <DisplayImg />
                    <FlatList
                        data={arrImg}
                        keyExtractor={item => item.toString()}
                        renderItem={({ item }) => <ShowImage img={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    <View style={{ marginTop: 10 }}>
                        <View style={{ borderColor: '#dadce0', borderTopWidth: 1, borderBottomWidth: 1 }}>
                            <Text style={styles.itemName}>{item.item_name}</Text>
                            <Text style={[styles.itemName]}>Số lượng: {item.quantity}</Text>
                            <Text style={styles.itemName}>Đơn giá: {item.price} VNĐ</Text>
                        </View>
                        <Text style={[styles.itemName, { marginTop: 5 }]}>Thông tin về sản phẩm:</Text>
                        <Text style={styles.textColor}>{item.description}</Text>
                    </View>
                </View>
            </ScrollView>
            {/* Footer */}
            <TouchableOpacity activeOpacity={0.6} onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.footerDetail}>
                    <Text style={styles.footerText}>Thêm vào giỏ hàng</Text>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingEnd: 12, alignItems: 'center' }}>
                            <Text>Thêm vào giỏ hàng</Text>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Icon1 name="close" size={20} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>Số lượng trong kho: {item.quantity}</Text>
                        </View>
                        <View style={{ width: '100%', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text>Chọn số lượng: </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#dadce0" }}>
                                <View>
                                    <TouchableOpacity onPress={removeQuantity}>
                                        <Icon1 name="remove" size={30} />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text>{quantity}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={addQuantity}>
                                        <Icon1 name="add" size={30} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footerDetail}>
                        <TouchableOpacity onPress={addToCart}>
                            <Text style={styles.footerText}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </View>
    );
}
export default ItemDetail;