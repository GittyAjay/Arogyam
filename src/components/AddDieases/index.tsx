import React from 'react'
import { View } from 'react-native'
import { styles } from './style'
import SearchInput from '../../components/SearchInput';
import PrimaryButton from '../../components/PrimaryButton';
import { globalstyles } from '../../globalcss';
interface props {
    onClick: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <SearchInput onChangeMethod={() => { }} placeholder="find problems" style={globalstyles.margin__top} type='name-phone-pad' />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={styles.buttonStyle} text_style={globalstyles.description} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={styles.buttonStyle} text_style={globalstyles.description} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={styles.buttonStyle} text_style={globalstyles.description} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={styles.buttonStyle} text_style={globalstyles.description} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={styles.buttonStyle} text_style={globalstyles.description} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={styles.buttonStyle} text_style={globalstyles.description} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={styles.buttonStyle} text_style={globalstyles.description} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={styles.buttonStyle} text_style={globalstyles.description} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={styles.buttonStyle} text_style={globalstyles.description} />
                <PrimaryButton onPress={props.onClick} title="Cough" button_style={styles.buttonStyle} text_style={globalstyles.description} />
            </View>
            <PrimaryButton onPress={props.onClick} title="Proceed" button_style={globalstyles.margin__top} />
        </View>
    )
}

export default index

