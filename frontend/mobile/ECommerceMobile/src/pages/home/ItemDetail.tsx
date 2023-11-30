import React, { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import { Item } from "../../interfaces/HomeInterface";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import axios from "axios";
import {API_HOST} from "@env";
import styles from "./styles";

const ItemDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params as { item: Item }
    const [arrImg, setArrImg] = useState<string[]>([]);
    useEffect(() => {
        item.image_name.map(item => {
            axios.get(`${API_HOST}/api/item/image/${item}`).then(data => {
                setArrImg(arrImg => [...arrImg, data.data]);
            }).catch(err => {
                console.log(err);
            })
        });
    }, []);
    console.log(arrImg);
    console.log(item.image_name);
    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute' }}>
                    <Icon name="chevron-left" size={50} />
                    <Text>Quay lại</Text>
                </View>
            </TouchableOpacity>
            <View style={{ marginTop: 50 }}>
                
                {arrImg.map(data => <Image key={data} source={{ uri: data }} style={styles.imgStyle}/>)}
                <Text>{item.item_name}</Text>
                <Text>{item.id}</Text>
                <Text>{item.description}</Text>
            </View>
        </View>
    );
}
export default ItemDetail;