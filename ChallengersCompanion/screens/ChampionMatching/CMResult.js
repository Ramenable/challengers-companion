import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Text,
  Image
} from 'react-native';
import { useRoute } from "@react-navigation/native"
import { db } from '../../Firebase/firebase';
import { collection, query, where, and, or, getDocs } from "firebase/firestore";

import { CHAMPION_IMAGES } from '../../constants/championImages';
import IconButton from '../../components/IconButton';

const DATA = [
  { id: '1', name: 'Garen', title: 'The Might of Demacia', photo: require('../../assets/Champions/ZyraBG.png'), height: 350 },
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
    // send survey results to this page
    const route = useRoute();
    const results = route.params?.results;

    var difficulty = results[0] ? results[0]: 1;
    var meleeRanged = results[1] ? results[1]: 'M';
    var collaboration = results[2] ? results[2]: 'S';
    var support = results[5] ? results[5]: '';
    var gender = results[6] ? results[6]: 'M';
    var champClass = 'Fighter';
    if (results[1] == 'M') {
        champClass = results[3];
    } else {
        champClass = results[4];
    }

    if (support == 'Y') {
        champClass = "Support";
    }

    console.log(champClass);
    var backstory1 = '';
    var backstory2 = '';
    var backstory3 = '';
    var backstory4 = '';
    var backstory5 = '';
    var backstory6 = '';
    var backstory7 = '';
    var backstory8 = '';

    for (i=7; i < 20; i++) {
        if (results[i] && results[i] != '' && backstory1 == ''){
            backstory1 = results[i];
        } else if (results[i] && results[i] != '' && backstory2 == '') {
            backstory2 = results[i];
        } else if (results[i] && results[i] != '' && backstory3 == '') {
            backstory3 = results[i];
        } else if (results[i] && results[i] != '' && backstory4 == '') {
            backstory4 = results[i];
        } else if (results[i] && results[i] != '' && backstory5 == '') {
            backstory5 = results[i];
        } else if (results[i] && results[i] != '' && backstory6 == '') {
            backstory6 = results[i];
        } else if (results[i] && results[i] != '' && backstory7 == '') {
            backstory7 = results[i];
        } else if (results[i] && results[i] != '' && backstory8 == '') {
            backstory8 = results[i];
        }
    }

    if (!backstory1 || !backstory2 || !backstory3 || !backstory4 || !backstory5 || !backstory6 || !backstory7 || !backstory8) {
        backstory1 = 'Demacia';
        backstory2 = 'Freljord';
        backstory3 = 'Ionia';
        backstory4 = 'Shurima';
        backstory5 = 'Zaun';
        backstory6 = 'Piltover';
        backstory7 = 'Targon';
        backstory8 = 'Bandle City';
    }

    const [champList, setChampList] = useState([]);
    readData = async () => {
        const q = query(collection(db, "champions"),
                and(
                    where("difficulty", "==", difficulty),
                    where("meleeRanged", "==", meleeRanged),
                    // where("collaboration", "==", collaboration),
                    where("gender", "==", gender),
                    where("support", "==", support),
                    or(
                        where("class1", "==", champClass),
                        where("class2", "==", champClass),
                    ),
                    or(
                        where("backstory", "==",backstory1),
                        where("backstory", "==",backstory2),
                        where("backstory", "==",backstory3),
                        where("backstory", "==",backstory4),
                        where("backstory", "==",backstory5),
                        where("backstory", "==",backstory6),
                        where("backstory", "==",backstory7),
                        where("backstory", "==",backstory8),
                        where("backstory", "==","Runeterra"),
                    )
                )
            );

        const querySnapshot = await getDocs(q);
        var i = 1;
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            champName = doc.data().id;
            staticPhoto = CHAMPION_IMAGES[champName].uri;
            if (i == 1) {
                setChampList(champList => [...champList, { id: i, name: champName, photo: staticPhoto, height: 350 }])
            } else {
                setChampList(champList => [...champList, { id: i, name: champName, photo: staticPhoto, height: 50 }])
            }
            i++;
        });
    }
    useEffect(() => {
        // write your code here, it's like componentWillMount
        readData();
    }, [])

    return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <View>
          <FlatList
            data={champList}
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