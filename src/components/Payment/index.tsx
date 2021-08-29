import React from 'react'
import { View, Text, Alert, Image } from 'react-native'
import RazorpayCheckout from 'react-native-razorpay';
import { PRIMARY } from '../../assets/colors';

const payment_options = {
    description: 'Apointment fee',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: 'rzp_test_wUHnmt6Oxeky5O',
    name: 'Talktor',
    prefill: {
        email: 'rightmajay@gmail.com',
        contact: '9129633003',
        name: 'Ajay Pandey'
    },
    theme: { color: PRIMARY }
}
export function Payment(amount: number) {
    RazorpayCheckout.open({ ...payment_options, amount }).then((data: any) => {
        const payId = data.razorpay_payment_id;
        Alert.alert(`Sucess: ${payId}`);

    }).catch((error: any) => {
        Alert.alert(`Error: ${error.code} | ${error.description}`);
    });
}
