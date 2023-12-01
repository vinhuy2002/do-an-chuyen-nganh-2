import React from 'react';
import { View, TextInput } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import styles from './styles';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const SearchIndex = () => {
    const { register, handleSubmit, control } = useForm();
    return (
        <View>
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
                            // onSubmitEditing={}
                        />
                        <Icon name="magnify" size={30} />
                    </View>
                )}
                name="searchItem"
                rules={{ required: true }}
            />
        </View>
    )
}
export default SearchIndex;