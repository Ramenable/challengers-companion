import React, { useState } from 'react';
import { Linking } from 'react-native';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Text,
  Image
} from 'react-native';

import BasicButton from '../components/BasicButton';
import IconButton from '../components/IconButton';
import { CHAMPION_IMAGES } from '../constants/championImages';


import { useRoute } from '@react-navigation/native';

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
        fontSize: 20,
        fontWeight: 500,
        color: '#fff',
        fontFamily: 'Avenir',
        textShadowColor: '#000',
        textShadowRadius: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    title: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Avenir',
        fontWeight: '500',
        color: '#fff',
        textShadowColor: '#000',
        textShadowRadius: 10,
        marginTop: 5,
        marginBottom: 30,
    },
});

const GuideScreen = ({navigation}) => {
  const route = useRoute();
  const name = route.params?.name[route.params?.id - 1];
  const cleanName = name.replace(/[^A-Z0-9]/ig, "");
  const staticPhoto = CHAMPION_IMAGES[name].uri;

  const DATA = [
    { id: '1', name: name, photo: staticPhoto, height: 700 }
  ];
  
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
        <BasicButton label={name + " Guide"} color={"#000000"} 
          onPress={() => Linking.openURL('https://app.mobalytics.gg/lol/champions/' + cleanName + '/build')}
        />
        <BasicButton label={"Beginner Guide"} color={"#000000"} 
          onPress={() => Linking.openURL('https://mobalytics.gg/blog/absolute-beginners-guide-to-league-of-legends/')}
        />
        <View style={styles.buttonsContainer}>
        <IconButton
          name="back"
          onPress={() => navigation.goBack()}
          color="white"
          backgroundColor="#E5566D"
          />
        </View>
      </View>
    </View>
  );
  
  const renderItem = ({ item }) => (
    <Item name={item.name} title={item.title} photo={item.photo} height={item.height} />
  );

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
    </SafeAreaView>
    );
};

export default GuideScreen;