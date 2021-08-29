import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import AddIconbutton from '../../components/IconButton';
import InputBox from '../../components/InputBox';
import NextButton from '../../components/PrimaryButton';
import Aicon from 'react-native-vector-icons/AntDesign';
import { WHITE } from '../../assets/colors';
import { globalstyles } from '../../globalcss';
import HorizentalContainer from '../../components/HeadingContainer';
interface props {
    onClick: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <HorizentalContainer>
                <Text>Add Patients</Text>
                <AddIconbutton onPress={() => { }} >
                    <Aicon name="plus" size={15} color={WHITE} />
                </AddIconbutton>
            </HorizentalContainer>
            <InputBox onChangeMethod={() => { }} placeholder="Name" style={globalstyles.margin__top} type='name-phone-pad' />
            <InputBox onChangeMethod={() => { }} placeholder="Age" style={globalstyles.margin__top} type='number-pad' />
            <InputBox onChangeMethod={() => { }} placeholder="Sex" style={globalstyles.margin__top} type='name-phone-pad' />
            <NextButton onPress={props.onClick} title="Next" button_style={globalstyles.margin__top} />
        </View>
    )
}

export default index

