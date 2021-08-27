import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import Row from '../Row'
import SearchInput from '../../components/SearchInput';
import InputBox from '../../components/InputBox';
import PrimaryButton from '../../components/PrimaryButton';
import { BORDER_WIDTH, DEFAUTL_SPACE, FONT_SMALL } from '../../assets/sizes';
import { GREY, PRIMARY, SHADE, WHITE } from '../../assets/colors';
interface props {
    onClick: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <SearchInput onChangeMethod={() => { }} placeholder="find problems" style={{ marginTop: DEFAUTL_SPACE }} type='name-phone-pad' />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={{ marginRight: DEFAUTL_SPACE / 2, marginTop: DEFAUTL_SPACE, backgroundColor: WHITE, borderWidth: 2, borderColor: PRIMARY, padding: DEFAUTL_SPACE }} text_style={{ color: PRIMARY, fontSize: FONT_SMALL }} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={{ marginRight: DEFAUTL_SPACE / 2, marginTop: DEFAUTL_SPACE, backgroundColor: WHITE, borderWidth: 2, borderColor: PRIMARY, padding: DEFAUTL_SPACE }} text_style={{ color: PRIMARY, fontSize: FONT_SMALL }} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={{ marginRight: DEFAUTL_SPACE / 2, marginTop: DEFAUTL_SPACE, backgroundColor: WHITE, borderWidth: 2, borderColor: PRIMARY, padding: DEFAUTL_SPACE }} text_style={{ color: PRIMARY, fontSize: FONT_SMALL }} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={{ marginRight: DEFAUTL_SPACE / 2, marginTop: DEFAUTL_SPACE, backgroundColor: WHITE, borderWidth: 2, borderColor: PRIMARY, padding: DEFAUTL_SPACE }} text_style={{ color: PRIMARY, fontSize: FONT_SMALL }} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={{ marginRight: DEFAUTL_SPACE / 2, marginTop: DEFAUTL_SPACE, backgroundColor: WHITE, borderWidth: 2, borderColor: PRIMARY, padding: DEFAUTL_SPACE }} text_style={{ color: PRIMARY, fontSize: FONT_SMALL }} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={{ marginRight: DEFAUTL_SPACE / 2, marginTop: DEFAUTL_SPACE, backgroundColor: WHITE, borderWidth: 2, borderColor: PRIMARY, padding: DEFAUTL_SPACE }} text_style={{ color: PRIMARY, fontSize: FONT_SMALL }} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={{ marginRight: DEFAUTL_SPACE / 2, marginTop: DEFAUTL_SPACE, backgroundColor: WHITE, borderWidth: 2, borderColor: PRIMARY, padding: DEFAUTL_SPACE }} text_style={{ color: PRIMARY, fontSize: FONT_SMALL }} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={{ marginRight: DEFAUTL_SPACE / 2, marginTop: DEFAUTL_SPACE, backgroundColor: WHITE, borderWidth: 2, borderColor: PRIMARY, padding: DEFAUTL_SPACE }} text_style={{ color: PRIMARY, fontSize: FONT_SMALL }} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={{ marginRight: DEFAUTL_SPACE / 2, marginTop: DEFAUTL_SPACE, backgroundColor: WHITE, borderWidth: 2, borderColor: PRIMARY, padding: DEFAUTL_SPACE }} text_style={{ color: PRIMARY, fontSize: FONT_SMALL }} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={{ marginRight: DEFAUTL_SPACE / 2, marginTop: DEFAUTL_SPACE, backgroundColor: WHITE, borderWidth: 2, borderColor: PRIMARY, padding: DEFAUTL_SPACE }} text_style={{ color: PRIMARY, fontSize: FONT_SMALL }} />
            </View>
            <PrimaryButton onPress={props.onClick} title="Proceed" button_style={{ marginTop: DEFAUTL_SPACE }} />
        </View>
    )
}

export default index

