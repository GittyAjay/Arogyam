import React from 'react'
import { Text } from 'react-native'

const index = (props: { navigation: { push: Function, pop: Function, addListener: Function } }) => {
    props.navigation.addListener('focus', (e: any) => {
        props.navigation.push("DoctorConsultant")
        console.log("tab press");
    });
    return (
        <>
            <Text>hello</Text>
        </>
    )
}

export default index;
