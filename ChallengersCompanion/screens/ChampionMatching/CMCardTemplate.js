import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import BasicButton from '../../components/BasicButton';

const CMQ1 = ({navigation}) => {
    return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <View style={{paddingHorizontal: 25}}>
          <ImageBackground source={require('../../assets/arcane.png')} resizeMode="cover" style={{width: '100%', height: '100%'}} imageStyle={{opacity: 0.4}}>
            <Text
                style={{
                textAlign: 'center',
                fontSize: 45,
                fontWeight: '200',
                color: '#111',
                marginTop: 40,
                marginBottom: 80,
                }}>
                How difficult do you want your champion to be?
            </Text>

            <BasicButton label={"Easy"} color={'#27A8F0'} onPress={() => navigation.navigate("LoginScreen")} />
            <BasicButton label={"Medium"} color={'#D4AF37'} onPress={() => navigation.navigate("LoginScreen")} />
            <BasicButton label={"Hard"} color={'#E3242B'} onPress={() => navigation.navigate("LoginScreen")} />

            <BasicButton label={"Log Out"} color={'#FFCCCB'} onPress={() => navigation.navigate("LoginScreen")} />
          </ImageBackground>
        </View>
    </SafeAreaView>
    );
};

export default CMQ1;