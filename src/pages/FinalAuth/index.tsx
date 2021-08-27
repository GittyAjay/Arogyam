import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'
import { DEFAUTL_SPACE, FONT_MID, INLINE_GAP } from '../../assets/sizes';
import PrimaryButton from '../../components/PrimaryButton';
import { styles } from './style'
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
                <Text style={[styles.heading, { marginBottom: INLINE_GAP }]}>congratulation</Text>
                <Text style={[styles.description, { marginBottom: DEFAUTL_SPACE }]}>you have successful varified the account
                    go to dashboard</Text>
            </View>
            <PrimaryButton onPress={() => {
                console.log("sign up form data ===>", formData);
                props.navigation.push('Home')
            }} title="Continue" />
        </View>
    );
}

export default index

