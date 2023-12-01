import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, ImageBackground } from "react-native";
import { useForm, Controller } from "react-hook-form"
import styles from './styles';
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
const LoginIndex = () => {
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });
    const checkData = (data: any) => {
        console.log(data);
    }
    return (
        <ImageBackground source={require('../../assets/images/background.png')} style={styles.container}>
            <Text style={[styles.label, { textAlign: 'center' }]}>Đăng nhập</Text>
            <Text style={styles.label}>Tên tài khoản</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.formStyle}>
                        <Icon name='person' size={25} />
                        <View style={{ flex: 1, margin: 1 }}>
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}

                            />
                        </View>
                    </View>

                )}
                name="username"
                rules={{ required: true }}
            />
            <Text style={styles.label}>Mật khẩu</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.formStyle}>
                        <Icon name='key' size={25} />
                        <View style={{ flex: 1, margin: 1 }}>
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>
                )}
                name="password"
                rules={{ required: true }}
            />
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit(checkData)}>
                    <Text style={styles.textStyle}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    <Text>Chưa có tài khoản?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}><Text style={{ color: "#0077b6" }}> Đăng ký ngay</Text></TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

export default LoginIndex;