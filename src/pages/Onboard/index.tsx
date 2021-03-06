import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { GREY, PRIMARY, SECONDARY } from '../../assets/colors';
import { Dimension, DEFAUTL_SPACE, INLINE_GAP, BUTTON_HEIGHT } from '../../assets/sizes'
import PrimaryButton from '../../components/PrimaryButton';
import Eicon from 'react-native-vector-icons/Entypo';
import { styles } from './style';
import { ImageSourcePropType } from 'react-native';
import { globalstyles } from '../../globalcss';
const Slider = (props: { navigation: { push: Function } }) => {
    const { WIDTH, HEIGHT } = Dimension();
    const [activeCarosel, setactiveCarosel] = useState(0);
    type slide = { title: string, descrption: string, url: ImageSourcePropType, index: number };
    type SlidesArray = Array<slide>;

    const Slides: SlidesArray = [
        {
            title: "Arogyam",
            descrption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus n.',
            url: require(`../../assets/images/onboard1.png`),
            index: 1
        },
        {
            title: "know your medicines",
            descrption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus n.',
            url: require(`../../assets/images/onboard2.png`),
            index: 2
        },
        {
            title: "home dilevery",
            descrption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus n.',
            url: require(`../../assets/images/onboard3.png`),
            index: 3
        },
        {
            title: "remind your medicine",
            descrption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus n.',
            url: require(`../../assets/images/onboard4.png`),
            index: 3
        },
        {
            title: "consult doctor at home",
            descrption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus n.',
            url: require(`../../assets/images/onboard5.png`),
            index: 3
        }
    ];

    const renderItem = ({ item, index }: { item: slide, index: number }) => {
        return (
            <View style={styles.carosel__Container}>
                <View style={styles.carosel__item}>
                    <Image source={item.url} />
                    <Text style={[globalstyles.heading, globalstyles.padding__top]}>{item.title}</Text>
                    <Text style={[globalstyles.padding__top, globalstyles.description, { width: WIDTH - 2 * INLINE_GAP }]}>{item.descrption}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.carosel}>
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
                <View style={styles.slider__Indicator}>
                    {Slides.map((records, index) => {
                        return (
                            <Eicon key={index} name="dot-single" color={activeCarosel === index ? PRIMARY : GREY} size={15} />
                        )
                    })}
                </View>
                <View style={styles.bottom}>
                    <PrimaryButton title="Get Started" onPress={() => {
                        props.navigation.push('Signup')
                    }} text_style={globalstyles.button__text} />
                    <View style={styles.bottom__Text}>
                        <Text style={globalstyles.description}>Have an Account?</Text>
                        <TouchableOpacity style={globalstyles.padding_left} onPress={() => props.navigation.push('Login')}>
                            <Text style={[globalstyles.description, { color: SECONDARY }]}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Slider



