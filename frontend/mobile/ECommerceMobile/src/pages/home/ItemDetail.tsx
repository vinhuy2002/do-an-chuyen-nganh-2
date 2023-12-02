import React, { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, Image, FlatList, ScrollView } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Item } from "../../interfaces/HomeInterface";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import axios from "axios";
import instance from "../../axios/instaces";
import styles from "./styles";

const ItemDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params as { item: Item }
    const [arrImg, setArrImg] = useState<string[]>([]);
    const [currentImg, setCurrentImg] = useState<any>();

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
            <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.footerDetail}>
                    <Text style={styles.footerText}>Thêm vào giỏ hàng</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default ItemDetail;