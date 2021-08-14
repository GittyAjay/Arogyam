
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import Ficon from 'react-native-vector-icons/Fontisto';
import { PRIMARY, SECONDARY } from '../../assets/colors';
import { Dimension, DEFAUTL_SPACE, INLINE_GAP, BUTTON_HEIGHT, FONT_MID, FONT_LARGE, FONT_GLARGE, ICON_SIZE } from '../../assets/sizes'
import PrimaryButton from '../../components/PrimaryButton';
import Eicon from 'react-native-vector-icons/Entypo';
const Slider = () => {
    const { WIDTH, HEIGHT } = Dimension();
    const [activeCarosel, setactiveCarosel] = useState(0);

    useEffect(() => {
        console.log(activeCarosel);
    }, [activeCarosel])

    const Slides = [
        {
            title: "Online Doctor",
            descrption: 'Your Health App',
            url: '',
            index: 1
        },
        {
            title: "Instant Help",
            descrption: 'Your Health App',
            url: '',
            index: 2
        },
        {
            title: "Easily Accesable",
            descrption: 'Everthing you get here',
            url: '',
            index: 3
        },
    ];

    const renderItem = ({ item, index }: { item: any, index: number }) => {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                flex: 1,
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Ficon name="doctor" size={50} color="black" />
                    <Text style={[styles.title, { paddingTop: DEFAUTL_SPACE }]}>{item.title}</Text>
                    <Text style={{ paddingTop: DEFAUTL_SPACE / 2 }}>{item.descrption}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Carousel
                    layout={'stack'}
                    data={Slides}
                    autoplay={true}
                    enableMomentum={false}
                    lockScrollWhileSnapping={true}
                    layoutCardOffset={0}
                    autoplayInterval={3000}
                    loop={true}
                    sliderWidth={WIDTH - INLINE_GAP}
                    itemWidth={WIDTH - INLINE_GAP}
                    style={{ flex: 0.7 }}
                    onSnapToItem={index => setactiveCarosel(index)}
                    renderItem={renderItem} />
                <View style={{ flex: 0.1, flexDirection: 'row' }}>
                    <Eicon name="dot-single" color={activeCarosel === 0 ? PRIMARY : "grey"} size={15} />
                    <Eicon name="dot-single" color={activeCarosel === 1 ? PRIMARY : "grey"} size={15} />
                    <Eicon name="dot-single" color={activeCarosel === 2 ? PRIMARY : "grey"} size={15} />
                </View>
                <View style={{ flex: 0.2, justifyContent: 'center', alignSelf: 'stretch' }}>
                    <PrimaryButton title="Get Started" onPress={() => {
                        console.log("hello")
                    }} button_style={[styles.button, { height: BUTTON_HEIGHT }]} text_style={styles.button_text} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 }}>
                        <Text>Have an Account?</Text>
                        <Pressable style={{ paddingLeft: DEFAUTL_SPACE / 2 }}>
                            <Text style={{ color: SECONDARY }}>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    defaultTxt: {
        fontFamily: 'Museo700-Regular',
    },
    title: {
        fontSize: FONT_LARGE,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: PRIMARY
    },
    button_text: {
        color: 'white',
    }
})

