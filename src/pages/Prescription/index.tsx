import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';
import Ficon from 'react-native-vector-icons/Feather';
import Faicon from 'react-native-vector-icons/FontAwesome';
import Ioicon from 'react-native-vector-icons/Ionicons';
import PrimaryButton from '../../components/PrimaryButton';
import { BLACK, GREY, PRIMARY, WHITE } from '../../assets/colors';
import { styles } from './style';
const index = (props: { navigation: { pop: Function, push: Function } }) => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: PRIMARY }}>
                <View style={styles.top__header}>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingRight: DEFAUTL_SPACE }} onPress={() => props.navigation.pop()}>
                        <Ioicon name="arrow-back" size={ICON_SIZE + 5} color={WHITE} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ color: WHITE, fontSize: FONT_MID }}>Uplode prescription</Text>
                        <Text style={{ color: WHITE }}>have a priscription ? uplode here</Text>
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: 'space-between', flex: 1, padding: INLINE_GAP }}>
                <View>
                    <View style={[styles.options, { marginBottom: DEFAUTL_SPACE }]}>
                        <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Ioicon name="camera" size={ICON_SIZE} color={WHITE} />
                            <Text style={{ color: WHITE }}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Faicon name="photo" size={ICON_SIZE} color={WHITE} />
                            <Text style={{ color: WHITE }}>Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Faicon name="file-text-o" size={ICON_SIZE} color={WHITE} />
                            <Text style={{ color: WHITE }}>Your prescription</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ fontSize: FONT_MID }}>priscription uplode guide here</Text>
                        <Text>uplode clear image</Text>
                        <Text>below mention point sould be a part of valid precription</Text>
                    </View>
                </View>
                <PrimaryButton button_style={styles.btnStyle} text_style={{}} onPress={() => { props.navigation.push('Order') }} title="submit" />
            </View>

        </View>
    )
}

export default index
