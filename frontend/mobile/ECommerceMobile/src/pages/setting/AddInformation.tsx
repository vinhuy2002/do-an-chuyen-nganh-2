import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, TextInput, Modal } from 'react-native';
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { launchCamera, launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';
import { useForm, Controller } from "react-hook-form";
import styles from './styles';
import { UserProfile } from '../../interfaces/UserInterface';

interface ImgProp {
    uri: string
}

const AddInformation = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { profile } = route.params as { profile: UserProfile }
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);
    const [phone, setPhone] = useState(profile.phone_number);
    const [address, setAddress] = useState(profile.userProfile?.home_address);
    const [birthday, setBirthday] = useState(profile.userProfile?.birthday);
    const [img, setImg] = useState<ImagePickerResponse>();
    const pickImg = () => {
        launchImageLibrary({
            mediaType: 'photo',
            maxWidth: 500,
            maxHeight: 500,
            includeBase64: true,
        }, (response: ImagePickerResponse) => {
            if (response != null) {
                setImg(response);
            }
        })
    }
    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <View style={{ backgroundColor: "#0077b6" }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#0077b6", width: '35%' }}>
                    <Icon name="chevron-left" size={50} color={'white'} />
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>Thêm thông tin</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50, marginBottom: 50 }}>
                    <TouchableOpacity onPress={pickImg} style={{ borderWidth: 1, width: 150, height: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 100, borderColor: '#dadce0' }}>
                        {
                            img?.assets == null ?
                                <Icon name='add-a-photo' size={50} />
                                :
                                <Image source={{ uri: `data:${img.assets[0].type};base64,${img.assets[0].base64}` }} style={{ width: 150, height: 150, borderRadius: 100 }} />
                        }

                    </TouchableOpacity>
                    <Text>Thay đổi ảnh</Text>
                </View>
                <View style={styles.updateSetting}>
                    <Text style={{ width: "25%" }}>Họ và tên:</Text>
                    <TextInput onChangeText={setName} value={name} />
                </View>
                <View style={styles.updateSetting}>
                    <Text style={{ width: "25%" }}>Email</Text>
                    <TextInput onChangeText={setEmail} value={email} />
                </View>
                <View style={styles.updateSetting}>
                    <Text style={{ width: "25%" }}>Số điện thoại</Text>
                    <TextInput onChangeText={setPhone} value={phone} />
                </View>
                <View style={styles.updateSetting}>
                    <Text style={{ width: "25%" }}>Địa chỉ</Text>
                    <TextInput onChangeText={setAddress} value={address} />
                </View>
                <View style={styles.updateSetting}>
                    <Text style={{ width: "25%" }}>Ngày sinh</Text>
                    <TextInput onChangeText={setBirthday} value={birthday} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={[styles.textStyle]}>Cập nhật</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}

export default AddInformation;