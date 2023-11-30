import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { API_HOST } from "@env";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Category, Item } from "../../interfaces/HomeInterface";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const ItemList = ({ item }: { item: Item }) => {
    const navigation = useNavigation();
    const [img, setImg] = useState();
    useEffect(() => {
        axios.get(`${API_HOST}/api/item/image/${item.image_name[0]}`).then((data: any) => {
            console.log(data.data);
            setImg(data.data);
        }).catch((error: any) => {
            console.log(error);
        })
    }, []);
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ItemDetail', { item })}>
            <View style={styles.item} >
                <Image source={{ uri: img }} style={styles.imgStyle} />
                <Text numberOfLines={1} ellipsizeMode="tail">{item.item_name}</Text>
                <Text>Giá: {item.price} VNĐ</Text>
                <Text>Số lượng: {item.quantity}</Text>
            </View>
        </TouchableOpacity>

    )
}

const CategoryItem = () => {
    const [data, setData] = useState<Item[]>();
    const navigation = useNavigation();
    const route = useRoute();
    const { cat } = route.params as { cat: Category }
    useEffect(() => {
        axios.get(`${API_HOST}/api/item/item-by-category/${cat.id}`).then((data) => {
            console.log(data.data);
            setData(data.data);
        }).catch(error => console.log(error));
    }, []);
    return (
        <>
            <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute' }}>
                    <Icon name="chevron-left" size={50} />
                    <Text>Quay lại</Text>
                </View>
            </TouchableOpacity>
            <View style={{ marginTop: 50 }}>
                <View>
                    <Text>Mặt Hàng - {cat.category_name}</Text>
                </View>
                <FlatList
                    data={data}
                    columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <ItemList item={item} />}
                    numColumns={2}
                />
            </View>
        </>
    );
}
export default CategoryItem;