import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'
import { DEFAUTL_SPACE, FONT_MID, INLINE_GAP } from '../../assets/sizes';
import PrimaryButton from '../../components/PrimaryButton';
import { globalstyles } from '../../globalcss';
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
                <Text style={[globalstyles.heading, globalstyles.margin__Bottom]}>congratulation</Text>
                <Text style={[globalstyles.description, globalstyles.margin__Bottom]}>you have successful varified the account
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

