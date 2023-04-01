import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
} from 'react-native';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import BasicButton from '../../components/BasicButton';

const CMStartScreen = ({navigation}) => {
    return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <View style={{paddingHorizontal: 25}}>
          <ImageBackground source={require('../../assets/arcane.png')} resizeMode="cover" style={{width: '100%', height: '100%'}} imageStyle={{opacity: 0.4}}>
            <Text
                style={{
                textAlign: 'center',
                fontFamily: 'Avenir',
                fontWeight: '600',
                fontSize: 50,
                color: '#111',
                textShadowColor: '#000',
                textShadowRadius: 3,
                marginTop: 80,
                marginBottom: 80,
                }}>
                Champion Matching
            </Text>
            
            <BasicButton label={"Let's Go"} color={'#AEF359'} onPress={() => navigation.navigate("CMCardTemplate")} />
            <BasicButton label={"Log Out"} color={'#FFCCCB'} onPress={() => navigation.navigate("LoginScreen")} />
          </ImageBackground>
        </View>
    </SafeAreaView>
    );
};

export default CMStartScreen;