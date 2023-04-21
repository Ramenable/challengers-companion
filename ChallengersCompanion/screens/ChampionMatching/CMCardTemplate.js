import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions
} from 'react-native';

import Swiper from 'react-native-deck-swiper';

import surveyCards from '../../constants/surveyCards';

import Card from '../../components/Card';
import IconButton from '../../components/IconButton';
import OverlayLabel from '../../components/OverlayLabel';

const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
     swiperContainer: {
        height: height - 250,
    },
    buttonsContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '15%',
        marginBottom: '10%',
    },
    tipText: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Avenir',
        fontWeight: '500',
        color: '#111',
        marginBottom: 5,
    }
  });

var index = 0;

const CMCardTemplate = ({navigation}) => {
    const [swipeCt, setSwipeCt] = useState(0);
    const [attributes, setAttributes] = useState([]);
    const useSwiper = useRef(null).current

    // const handleOnSwipedLeft = () => useSwiper.swipeLeft()
    // const handleOnSwipedBottom = () => useSwiper.swipeBottom()
    // const handleOnSwipedRight = () => useSwiper.swipeRight()
    return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={styles.swiperContainer}>
            <Swiper
                ref={useSwiper}
                cards={surveyCards}
                renderCard={card => <Card card={card} />}
                onSwiped={(cardIndex) => swipeCt < 7 ? setSwipeCt(cardIndex + 1) : setSwipeCt(cardIndex)}
                onSwipedLeft={(cardIndex) => setAttributes(attributes => [...attributes, 0])}
                onSwipedBottom={(cardIndex) => setAttributes(attributes => [...attributes, 1])}
                onSwipedRight={(cardIndex) => setAttributes(attributes => [...attributes, 2])}
                onSwipedAll={() => navigation.navigate("CMResult")}
                cardIndex={0}
                backgroundColor={'transparent'}
                stackSize={3}
                showSecondCard
                animateOverlayLabelsOpacity
                horizontalThreshold={30}
                overlayLabels={{
                left: {
                    title: 'EASY',
                    element: <OverlayLabel label={surveyCards[swipeCt].overlayText[0]} color="#4CCC93" />,
                    style: {
                    wrapper: {
                        ...styles.overlayWrapper,
                        alignItems: 'flex-start',
                        marginTop: 30,
                        marginLeft: 180,
                      },
                    },
                },
                bottom: {
                    title: 'MEDIUM',
                    element: <OverlayLabel label={surveyCards[swipeCt].overlayText[1]} color="#FDDA0D" />,
                    style: {
                    wrapper: {
                        ...styles.overlayWrapper
                      },
                    },
                },
                right: {
                    title: 'HARD',
                    element: <OverlayLabel label={surveyCards[swipeCt].overlayText[2]} color="#E5566D" />,
                    style: {
                    wrapper: {
                        ...styles.overlayWrapper,
                        alignItems: 'flex-start',
                        marginLeft: -70,
                        marginTop: 30,
                      },
                    },
                },
                }}>
            </Swiper>
        </View>
        <View style={styles.buttonsContainer}>
            <Text
                style= {styles.tipText}>
                Try swiping up, down, and right!
            </Text>
            <Text> {attributes} </Text>
            <IconButton
            name="close"
            onPress={() => navigation.navigate("LoginScreen")}
            color="white"
            backgroundColor="#E5566D"
            />
        </View>
    </SafeAreaView>
    );
};

export default CMCardTemplate;