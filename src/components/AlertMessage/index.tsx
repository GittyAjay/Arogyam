import React from 'react'
import { Text } from 'react-native'
import ModeForm from '../ModelForm';
import { styles } from './style'
interface props {
    ref: React.MutableRefObject<undefined>
}
const index: React.FC<props> = (props) => {
    return (
        <ModeForm modelRef={props.ref}>
            <Text>Succesfully</Text>
        </ModeForm>
    )
}

export default index

