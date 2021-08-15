import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, PermissionsAndroid, TextInput } from 'react-native'
import { GREY, SECONDARY, WHITE } from '../../assets/colors';
import { BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, INLINE_GAP } from '../../assets/sizes';
import PrimaryButton from '../../components/PrimaryButton';

const index = (props: { navigation: { push: Function, pop: Function } }) => {
    interface form {
        phone: String,
        email: String
    }
    const [formData, setFormData] = useState<form>({
        phone: '',
        email: ''
    });
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Image source={require('../../assets/images/congrats.png')} />
                <Text style={{ fontWeight: 'bold', fontSize: FONT_MID, marginBottom: INLINE_GAP }}>congratulation</Text>
                <Text style={{ marginBottom: DEFAUTL_SPACE }}>you have successful varified the account
                    go to dashboard</Text>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
                <PrimaryButton button_style={styles.btnStyle} text_style={styles.txtStyle} onPress={() => {
                    console.log("sign up form data ===>", formData);
                    props.navigation.push('Home')
                }} title="Continue" />
            </View>
        </View>
    );
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: WHITE,
        paddingHorizontal: INLINE_GAP,
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: INLINE_GAP
    },
    inputBox: {
        marginBottom: DEFAUTL_SPACE,
    },
    btnStyle: {
        marginVertical: INLINE_GAP
    },
    txtStyle: {

    },
    otp: {
        width: 50,
        height: 50,
        borderColor: GREY,
        borderWidth: BORDER_WIDTH,
        textAlignVertical: 'top',
        marginRight: DEFAUTL_SPACE,
    }
})
