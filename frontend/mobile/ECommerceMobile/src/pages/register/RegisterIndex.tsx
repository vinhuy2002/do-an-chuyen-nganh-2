import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from './styles';
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
const LoginIndex = () => {
    const accessToken  = useAppSelector((state) => state.login.login);
    console.log("Register Page: ",accessToken); 
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            username: '',
            password: '',
            email: '',
            phone_number: ''
        }
    });
    const checkData = (data: any) => {
        console.log(data);
    }
    return (
        <ImageBackground source={require('../../assets/images/background-register.png')} style={styles.container}>
            <ScrollView>
                <Text style={[styles.label, { textAlign: 'center' }]}>Đăng ký</Text>
                <Text style={styles.label}>Họ và tên</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.formStyle}>
                            <Icon name='badge' size={25} />
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
                    name="name"
                    rules={{ required: true }}
                />
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

                <Text style={styles.label}>Email</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.formStyle}>
                            <Icon name='mail' size={25} />
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
                    name="email"
                    rules={{ required: true }}
                />
                <Text style={styles.label}>Số điện thoại</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.formStyle}>
                            <Icon name='call' size={25} />
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
                    name="phone_number"
                    rules={{ required: true }}
                />

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit(checkData)}>
                        <Text style={styles.textStyle}>Đăng Ký</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    <Text>Đã có tài khoản?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={{ color: "#0077b6" }}> Đăng nhập ngay</Text></TouchableOpacity>
                </View>
            </ScrollView>

        </ImageBackground>
    );
}

export default LoginIndex;