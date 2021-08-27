import React from 'react'
import { View } from 'react-native'
import AwesomeLoading from 'react-native-awesome-loading';
const index = (props: { navigation: { push: Function, pop: Function, addListener: Function } }) => {
    const [loading, setLoading] = React.useState(true);
    props.navigation.addListener('focus', (e: any) => {
        setLoading(false);
        props.navigation.push("DoctorConsultant")
    });
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <AwesomeLoading indicatorId={8} size={50} isActive={loading} text="loading.." />
        </View>
    )
}

export default index;
