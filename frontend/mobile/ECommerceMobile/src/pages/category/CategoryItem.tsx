import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { API_HOST } from "@env";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Category, Item } from "../../interfaces/HomeInterface";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import instance from "../../axios/instaces";

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
                {img != null ? <Image source={{ uri: img }} style={styles.imgStyle} /> : null}
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textColor}>{item.item_name}</Text>
                <Text style={styles.textColor}>Giá: {item.price} VNĐ</Text>
                <Text style={styles.textColor}>Số lượng: {item.quantity}</Text>
            </View>
        </TouchableOpacity>
    );
}

const CategoryItem = () => {
    const [data, setData] = useState<Item[]>();
    const navigation = useNavigation();
    const route = useRoute();
    const { cat } = route.params as { cat: Category }
    useEffect(() => {
        instance.get(`/item/item-by-category/${cat.id}`).then((data) => {
            setData(data.data);
        }).catch(error => console.log(error));
    }, []);
    return (
        <View>
            <View style={{ backgroundColor: "#0077b6" }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#0077b6", width: '35%' }}>
                    <Icon name="chevron-left" size={50} color={'white'} />
                    <Text style={{ color: "white", fontWeight: "bold" }}>Quay lại</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10, marginBottom: 130 }}>

                <FlatList
                    data={data}
                    columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <ItemList item={item} />}
                    numColumns={2}
                />
            </View>
        </View>
    );
}
export default CategoryItem;