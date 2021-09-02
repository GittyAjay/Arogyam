import React from 'react'
import Modal from 'react-native-modalbox';
import { Dimension } from '../../assets/sizes';
import { MutableRefObject } from 'react';
import { Image, ViewStyle } from 'react-native';
import { styles } from './style';
import { Text } from 'react-native'
import { globalstyles } from '../../globalcss';
import Button from '../../components/PrimaryButton';
import { RED } from '../../assets/colors';
interface props {
    modelRef: MutableRefObject<undefined>,
    style?: ViewStyle
}
const index: React.FC<props> = (props) => {
    function onClose() {
        console.log("on open");
    }
    function onOpen() {
        console.log("on open");
    }
    const { WIDTH } = Dimension();
    return (
        <Modal ref={props.modelRef} style={[styles.modalContainer, { height: 200, width: WIDTH - 150 }, props.style]}
            onClosed={onClose}
            position={"top"}
            swipeToClose={true}
            onOpened={onOpen}>
            <Image source={require('../../assets/images/warning.png')} />
            <Text style={globalstyles.title__bold}>Error</Text>
            {props.children}
            <Button onPress={() => props.modelRef.current.close()} title="Close" button_style={{ backgroundColor: RED }} />
        </Modal>
    )
}

export default index;


