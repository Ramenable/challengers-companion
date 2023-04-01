import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Text,
  Image
} from 'react-native';

import IconButton from '../../components/IconButton';

const DATA = [
  { id: '1', name: 'Garen', title: 'The Might of Demacia', photo: require('../../assets/Champions/GarenBG.png'), height: 350 },
  { id: '2', name: 'Darius', photo: require('../../assets/Champions/DariusBG.png'), height: 50 },
  { id: '3', name: 'Sett', photo: require('../../assets/Champions/SettBG.png'), height: 50 },
  { id: '4', name: 'Aatrox', photo: require('../../assets/Champions/AatroxBG.png'), height: 50 },
  { id: '5', name: 'Jax', photo: require('../../assets/Champions/JaxBG.png'), height: 50 },
];

const styles = StyleSheet.create({
    buttonsContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '15%',
        marginBottom: '10%',
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
    container: {
      flex: 1,
    },
    list: {
      paddingVertical: 10,
    },
    item: {
      width: '100%',
      backgroundColor: '#f9c2ff',
      marginVertical: 4, 
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
    },
    name: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 700,
        color: '#fff',
        fontFamily: 'Avenir',
        textShadowColor: '#000',
        textShadowRadius: 10,
        marginTop: 5,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Avenir',
        fontWeight: '500',
        color: '#fff',
        textShadowColor: '#000',
        textShadowRadius: 10,
        marginTop: 5,
    },
});

const Item = ({ name, title, photo, height }) => (
  <View style={[styles.item, { height }]}>
    <Image
      style={styles.image}
      source={photo}
      resizeMode="cover"
    />
    <View style={styles.photoDescriptionContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const renderItem = ({ item }) => (
  <Item name={item.name} title={item.title} photo={item.photo} height={item.height} />
);

const CMResult = ({navigation}) => {
    return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
          />
        </View>
        <View style={styles.buttonsContainer}>
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

export default CMResult;