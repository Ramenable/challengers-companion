import React from 'react'
import { View, Text, Image, ImageSourcePropType, StyleSheet, Dimensions } from 'react-native'
import { shape, string, number } from 'prop-types'

const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
    card: {
        /* Setting the height according to the screen height, it also could be fixed value or based on percentage. In this example, this worked well on Android and iOS. */
        height: height - 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
      },
      image: {
        borderRadius: 5,
        flex: 1,
        width: '100%',
        opacity: 0.6,
      },
       photoDescriptionContainer: {
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        height: '100%',
        position: 'absolute',
      },
      text: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 700,
        color: '#fff',
        fontFamily: 'Avenir',
        textShadowColor: '#000',
        textShadowRadius: 10,
        margin: 10,
      },
});

const Card = ({ card }) => (
  <View
    activeOpacity={1}
    style={styles.card}
  >
    <Image
      style={styles.image}
      source={card.photo}
      resizeMode="cover"
    />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>
        {`${card.text}`}
      </Text>
    </View>
  </View>
)

Card.propTypes = { 
  card: shape({
    photo: ImageSourcePropType,
    text: string,
    overlayText: Array,
  }).isRequired,
}
export default Card