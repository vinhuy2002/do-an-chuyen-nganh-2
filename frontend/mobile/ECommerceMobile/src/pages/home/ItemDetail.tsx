import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import { Item } from "../../interfaces/HomeInterface";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const ItemDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params as { item: Item }
    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute' }}>
                    <Icon name="chevron-left" size={50} />
                    <Text>Quay lại</Text>
                </View>
            </TouchableOpacity>
            <View style={{ marginTop: 50 }}>
                <Text>{item.item_name}</Text>
                <Text>{item.id}</Text>
                <Text>{item.description}</Text>
                <Text>{item.image_name.map(item => item)}</Text>
            </View>
        </View>
    );
}
export default ItemDetail;