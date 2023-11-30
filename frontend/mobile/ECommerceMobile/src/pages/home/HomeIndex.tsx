import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useForm, Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
const axios = require('axios').default;
import { API_HOST } from "@env";
import ItemDetail from './ItemDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Category, Item, Categoryname } from "../../interfaces/HomeInterface";
import MyTabs from '../../common/BottomNav';


const CategoryList = ({ cat }: { cat: Category }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() =>navigation.navigate("CategoryItem", {cat})}>
            <View style={styles.boxCategory}>
                <Text>{cat.category_name}</Text>
            </View>
        </TouchableOpacity>
    );
}
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

const HomeIndex = () => {
    const { register, handleSubmit, control } = useForm();
    const [cat, setCat] = useState<Category[]>();
    const [item, setItem] = useState<Item[]>();
    const search = (data: any) => {
        console.log(data.data);
    }
    useEffect(() => {
        // console.log(API_HOST);
        axios.get(`${API_HOST}/api/category`).then((data: any) => {
            setCat(data.data);
        }).catch((error: any) => {
            console.log(error);
        });

        axios.get(`${API_HOST}/api/item`).then((data: any) => {
            console.log(data.data);
            setItem(data.data);
        }).catch((error: any) => {
            console.log(error);
        });
    }, []);
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text}>Khám Phá</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.box}>
                        <TextInput
                            style={{ width: 'auto' }}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder="Tìm kiếm..."
                            onSubmitEditing={() => {
                                search(value)
                            }}
                        />
                        <Icon name="magnify" size={30} />
                    </View>
                )}
                name="searchItem"
                rules={{ required: true }}
            />
            <Text style={styles.text}>Thể loại</Text>
            <View>
                <FlatList
                    data={cat}
                    keyExtractor={cat => cat.id.toString()}
                    renderItem={({ item }) => <CategoryList cat={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <Text style={[styles.text, { marginBottom: 5 }]}>Mặt hàng</Text>
            <FlatList
                style={{ marginBottom: 200 }}
                data={item}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ItemList item={item} />}
                numColumns={2}
            />
        </SafeAreaView>
    );
}

export default HomeIndex;