import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import { useForm, Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
const axios = require('axios').default;
import { API_HOST } from "@env";

interface Category {
    id: number,
    category_name: string,
    description: string
}
type Item =  {
    id: number,
    category_id: number,
    user_id: 1,
    item_name: string,
    description: string,
    price: number,
    quantity: number,
    option: string,
    image_name: string[]
    }
type Categoryname = {
    category_name: string,
}


const CategoryList = ({category_name}: Categoryname) => {
    return(
        <View style={styles.boxCategory}>
            <Text>{category_name}</Text>
        </View>
    );
}
const ItemList = ({item}: {item: Item}) => {

    const [img, setImg] = useState();
    useEffect(() => {
        axios.get(`${API_HOST}/api/item/image/${item.image_name[0]}`).then((data: any) => {
            setImg(data.data);
        }).catch((error: any) => {
            console.log(error);
        })
    }, []);

    return(
        <View style={styles.item}>
            <Image source={{ uri: img }} style={styles.imgStyle}/>
            <Text numberOfLines={1} ellipsizeMode="tail">{item.description}</Text>
            <Text>Giá: {item.price} VNĐ</Text>
            <Text>Số lượng: {item.quantity}</Text>
        </View>
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
                    renderItem={({item}) => <CategoryList category_name={item.category_name}/>}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <Text style={styles.text}>Mặt hàng</Text>
            <FlatList
                    style={{ marginBottom: 200 }}
                    data={item}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <ItemList item={item}/>}
                    numColumns={2}
                />
        </SafeAreaView>
    );
}

export default HomeIndex;