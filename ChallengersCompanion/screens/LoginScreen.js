import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BasicButton from '../components/BasicButton';
import Input from '../components/Input';

const LoginScreen = ({navigation}) => {
    return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <View style={{paddingHorizontal: 25}}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{ 
                width: 200,
                height: 200,
              }}
              source={require('../assets/league-icon.png')} />
          </View>

          <Text
            style={{
              fontSize: 45,
              fontWeight: '600',
              color: '#333',
              marginLeft: 40,
              marginBottom: 30,
            }}>
            Challenger's Companion
          </Text>
  
          <Text
            style={{
              fontSize: 28,
              fontWeight: '500',
              color: '#333',
              marginBottom: 30,
            }}>
            Login
          </Text>
  
          <Input
            label={'Email ID'}
            icon={
              <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
            }
            keyboardType="email-address"
          />
  
          <Input
            label={'Password'}
            icon={
              <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
             />
            }
            inputType="password"
            fieldButtonLabel={"Forgot?"}
            fieldButtonFunction={() => {}}
          />
          
          <BasicButton label={"Login"} color={"#AD40AF"} onPress={() => navigation.navigate("CMStartScreen")} />
          <BasicButton label={"Jedd"} color={"#AD40AF"} onPress={() => navigation.navigate("ExternalGuideScreen")} />
        </View>
    </SafeAreaView>
    );
};

export default LoginScreen;