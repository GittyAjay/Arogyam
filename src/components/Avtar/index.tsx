import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './style'
interface props {
    onPress: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    )
}

export default index

