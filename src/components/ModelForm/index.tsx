import React from 'react'
import { MutableRefObject } from 'react';
import { ViewStyle } from 'react-native';
import Modal from 'react-native-modalbox';
import { Dimension } from '../../assets/sizes';
import { styles } from './style'
interface props {
    modelRef: MutableRefObject<undefined>,
    style: ViewStyle
}
const index: React.FC<props> = (props) => {
    function onClose() {
        console.log("on open");
    }
    function onOpen() {
        console.log("on open");
    }
    const { WIDTH, HEIGHT } = Dimension();
    return (
        <Modal ref={props.modelRef} style={[styles.modalContainer, { height: 400, width: WIDTH - 60 }, props.style]}
            onClosed={onClose}
            position={"top"}
            swipeToClose={true}
            onOpened={onOpen}>
            {props.children}
        </Modal>
    )
}

export default index


