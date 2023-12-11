import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image , FlatList} from 'react-native';
import styles from './styles';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import instance from '../../axios/instaces';
import { useNavigation } from '@react-navigation/native';
import { Item } from '../../interfaces/HomeInterface';
const SearchIndex = () => {

    const [search, setSearch] = useState<string>();
    const [dataSearch, setDataSearch] = useState<Item[]>();
    const handleSubmit = async () => {
        try {
            console.log("Hello")
            const data = await instance.get(`/item/search/${search}`);
            setDataSearch(data.data);
        } catch (error) {

        }
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

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tìm kiếm</Text>
            <View style={styles.box}>
                <TextInput
                    style={{ width: '90%' }}
                    placeholder='Tìm kiếm...'
                    value={search}
                    onChangeText={text => setSearch(text)}
                    keyboardType='default'
                    onSubmitEditing={handleSubmit}
                />
                <Icon name="magnify" size={30} />
            </View>
            <View>
                {dataSearch ? <View>
                    <FlatList
                        style={{ marginBottom: 200 }}
                        columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
                        data={dataSearch}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <ItemList item={item} />}
                        numColumns={2}
                    />
                </View> : null}
            </View>
        </View>
    )
}
export default SearchIndex;