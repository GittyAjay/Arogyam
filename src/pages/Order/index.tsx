import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, BORDER_WIDTH, DEFAUTL_SPACE, FONT_LARGE, FONT_MID, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';
import Ficon from 'react-native-vector-icons/Feather';
import Faicon from 'react-native-vector-icons/FontAwesome';
import Ioicon from 'react-native-vector-icons/Ionicons';
import PrimaryButton from '../../components/PrimaryButton';
import { BLACK, GREY, PRIMARY, SHADE, WHITE } from '../../assets/colors';
const index = (props: { navigation: { pop: Function, push: Function } }) => {
    const [activeRadioBtn, setActiveRadioBtn] = useState(0);
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: PRIMARY }}>
                <View style={styles.top__header}>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingRight: DEFAUTL_SPACE }} onPress={() => props.navigation.pop()}>
                        <Ioicon name="arrow-back" size={ICON_SIZE + 5} color={WHITE} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ color: WHITE, fontSize: FONT_MID }}>order information</Text>
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: 'space-between', flex: 1, padding: INLINE_GAP }}>
                <View>
                    <Text style={{ fontSize: FONT_LARGE, }}>Medicine</Text>
                    <View style={styles.radio__box}>
                        <TouchableOpacity style={styles.radio__btn} onPress={() => setActiveRadioBtn(0)}>
                            {activeRadioBtn == 0 && <TouchableOpacity style={styles.inner__radio__btn}>
                            </TouchableOpacity>}
                        </TouchableOpacity>
                        <Text>order everythings as per precription</Text>
                    </View>
                    <View style={styles.radio__box}>
                        <TouchableOpacity style={styles.radio__btn} onPress={() => setActiveRadioBtn(1)}>
                            {activeRadioBtn == 1 && <TouchableOpacity style={styles.inner__radio__btn}>
                            </TouchableOpacity>}
                        </TouchableOpacity>
                        <Text>search and add medicien to cart</Text>
                    </View>
                    <View style={styles.radio__box}>
                        <TouchableOpacity style={styles.radio__btn} onPress={() => setActiveRadioBtn(2)}>
                            {activeRadioBtn == 2 && <TouchableOpacity style={styles.inner__radio__btn} onPress={() => setActiveRadioBtn(2)}>
                            </TouchableOpacity>}
                        </TouchableOpacity>
                        <Text>call me for details</Text>
                    </View>
                    <View style={styles.radio__box}>
                        <TouchableOpacity style={styles.radio__btn} onPress={() => setActiveRadioBtn(3)}>
                            {activeRadioBtn == 3 && <TouchableOpacity style={styles.inner__radio__btn}>
                            </TouchableOpacity>}
                        </TouchableOpacity>
                        <Text>view your file of precription</Text>
                    </View>
                </View>
                <PrimaryButton button_style={styles.btnStyle} text_style={{}} onPress={() => { props.navigation.push('Home') }} title="Add to cart" />
            </View>

        </View>
    )
}

export default index
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: WHITE
    },
    top__header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: PRIMARY,
        alignItems: 'center',
        padding: INLINE_GAP,
    },
    options: {
        height: 100,
        borderWidth: BORDER_WIDTH,
        borderRadius: BORDER_RADIUS,
        borderColor: PRIMARY,
        backgroundColor: PRIMARY,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnStyle: {

    },
    radio__box: {
        height: 80,
        borderRadius: BORDER_RADIUS,
        borderColor: SHADE,
        backgroundColor: SHADE,
        marginTop: DEFAUTL_SPACE,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    radio__btn: {
        borderRadius: BORDER_RADIUS_CIRCULAR,
        backgroundColor: WHITE,
        width: 20,
        height: 20,
        marginHorizontal: DEFAUTL_SPACE,
        borderColor: PRIMARY,
        borderWidth: BORDER_WIDTH + 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inner__radio__btn: {
        borderRadius: BORDER_RADIUS_CIRCULAR,
        backgroundColor: PRIMARY,
        width: 12,
        height: 12,
        opacity: 0.8,
        marginHorizontal: DEFAUTL_SPACE
    }
})
