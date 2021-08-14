
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import Ficon from 'react-native-vector-icons/Fontisto';
import { Numericals } from '../../assets/sizes'
const Slider = () => {
    const { WIDTH, HEIGHT, INLINE_GAP, DEFAUTL_SPACE } = Numericals();
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
            descrption: 'Everthing nearby like cook,pg,hotels(oyo bhai)',
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
                    <Text style={{ paddingTop: DEFAUTL_SPACE }}>{item.title}</Text>
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
                <Text style={{ flex: 0.1 }}>
                    <Text style={{ marginRight: 15, color: activeCarosel === 0 ? "black" : "grey" }}>.</Text>
                    <Text style={{ marginRight: 15, color: activeCarosel === 1 ? "black" : "grey" }}>.</Text>
                    <Text style={{ marginRight: 15, color: activeCarosel === 2 ? "black" : "grey" }}>.</Text>
                </Text>
                <View style={{ flex: 0.2, justifyContent: 'center', alignSelf: 'stretch' }}>
                    <Button title="submit" onPress={() => {
                    }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 }}>
                        <Text>Have an Account?</Text>
                        <Text>Login</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    defaultTxt: {
        fontFamily: 'Museo700-Regular'
    },
})

