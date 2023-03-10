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
                fontWeight: '400',
                color: '#111',
                marginTop: 40,
                marginBottom: 80,
                }}>
                How difficult do you want your champion to be?
            </Text>

            <View style={{alignItems: 'center'}}>
                <Text
                        style={{
                        textAlign: 'center',
                        fontSize: 30,
                        fontWeight: '400',
                        color: '#111',
                        marginBottom: 15,
                        }}>
                        Easy
                    </Text>
                    <Text
                        style={{
                        textAlign: 'center',
                        fontSize: 30,
                        fontWeight: '400',
                        color: '#111',
                        marginBottom: 15,
                        }}>
                        Medium
                    </Text>
                    <Text
                        style={{
                        textAlign: 'center',
                        fontSize: 30,
                        fontWeight: '400',
                        color: '#111',
                        marginBottom: 15,
                        }}>
                        Hard
                    </Text>
            </View>

            <BasicButton label={"Log Out"} color={'#FFCCCB'} onPress={() => navigation.navigate("LoginScreen")} />
          </ImageBackground>
        </View>
    </SafeAreaView>
    );
};

export default CMQ1;