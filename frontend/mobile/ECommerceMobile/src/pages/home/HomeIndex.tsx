import React, { useState, useEffect, PureComponent } from 'react';
import { Text, View, TextInput, Button, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useForm, Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
const axios = require('axios').default;
import { useNavigation } from '@react-navigation/native';
import { Category, Item, Categoryname } from "../../interfaces/HomeInterface";
import instance from '../../axios/instaces';

interface ItemFlatListProps {
    item: Item,
}
const ItemFlatList: React.FC<ItemFlatListProps> = React.memo(({ item }) => {
    const navigation = useNavigation();
    const [img, setImg] = useState<any>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await instance.get(`/item/image/${item.image_name[0]}`);
                setImg(data.data);
            } catch (error) {
            }
        };
        getData();
    }, [item]);

    return (
        <TouchableOpacity onPress={() => navigation.navigate('ItemDetail', { item })}>
            <View style={styles.item}>
                {img != null ? <Image source={{ uri: img }} style={styles.imgStyle} /> : null}
                <Text numberOfLines={1} ellipsizeMode="tail">{item.item_name}</Text>
                <Text>Giá: {item.price} VNĐ</Text>
                <Text>Số lượng: {item.quantity}</Text>
            </View>
        </TouchableOpacity>
    );
}, (prevProps, nextProps) => {
    return prevProps.item.id === nextProps.item.id;
});
const CategoryList = ({ cat }: { cat: Category }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("CategoryItem", { cat })}>
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
        const getData = async () => {
            try {
                const data = await instance.get(`/item/image/${item.image_name[0]}`);
                setImg(data.data);
            } catch (error) {

            }
        }
        getData();
    }, []);
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ItemDetail', { item })}>
            <View style={styles.item} >
                {img != null ? <Image source={{ uri: img }} style={styles.imgStyle} /> : null}
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
        const getDataCat = async () => {
            try {
                const dataCat = await instance.get(`/category`);
                setCat(dataCat.data);
            } catch (error) {

            }
        }
        const getDataItem = async () => {
            try {
                const dataItem = await instance.get(`/item`);
                setItem(dataItem.data);
            } catch (error) {

            }
        }
        getDataCat();
        getDataItem();
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
                columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
                data={item}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ItemFlatList item={item} />}
                numColumns={2}
            />
        </SafeAreaView>
    );
}

export default HomeIndex;