import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import instance from '../../axios/instaces';
import { UserProfile } from '../../interfaces/UserInterface';
import { TouchableOpacity } from 'react-native';
import { userLogout } from '../login/loginSlice';

const GetUserProfile = () => {
    const [profile, setProfile] = useState<UserProfile>();
    const [img, setImg] = useState<any>();
    const token = useAppSelector((state) => state.login.access_token);
    const dipatch = useAppDispatch();
    const navigation = useNavigation();
    useEffect(() => {
        const getProfile = async () => {
            try {
                const data = await instance.get('user/profile', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                console.log(data.data);
                setProfile(data.data);
                await getImg();
            } catch (error) {

            }
        }
        const getImg = async () => {
            try {
                const img = await instance.get(`/item/image/${profile?.userProfile?.profile_img}`);
                setImg(img.data);
            } catch (error) {

            }
        }
        getProfile();
    }, [img]);
    const logout = () => {
        dipatch(userLogout());
        navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            {img != null ? <View style={styles.imgContainer}>
                <Image source={{ uri: img }} style={styles.imgProfile} />
            </View> : null}
            <Text style={styles.blue}>Thông tin cá nhân</Text>
            <View style={styles.profileInfo}>
                <Text style={styles.textBlack}>Họ và tên: {profile?.name}</Text>
                <Text style={styles.textBlack}>Email: {profile?.email}</Text>
                <Text style={styles.textBlack}>Số điện thoại: {profile?.phone_number}</Text>
                <Text style={styles.textBlack}>Địa chỉ: {profile?.userProfile?.home_address}</Text>
            </View>
            <View style={styles.setting}>
                <TouchableOpacity onPress={() => navigation.navigate("AddInfo", { profile })}>
                    <Text style={styles.blue}>Thêm thông tin</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.setting}>
                <TouchableOpacity onPress={logout}>
                    <Text style={styles.logout}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const SettingIndex = () => {
    const navigation = useNavigation();
    const checkLogin = useAppSelector((state) => state.login.login);

    return (
        <View>
            {(!checkLogin) ? <>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    flexDirection: 'row',
                }}>
                    <Text>Bạn cần đăng nhập hoặc đăng ký để tiếp tục</Text>
                </View>
            </> : <GetUserProfile />}
        </View>
    );
}
export default SettingIndex;