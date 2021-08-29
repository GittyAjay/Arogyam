import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './style'
interface props {
    isActive: boolean,
    onPress: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <TouchableOpacity style={styles.radio} onPress={props.onPress}>
            {props.isActive && <TouchableOpacity style={styles.innerRadio} onPress={props.onPress}>
            </TouchableOpacity>}
        </TouchableOpacity>
    )
}

export default index

