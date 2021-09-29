import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionSpecs} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import AddContact from './screens/AddContact';

const Stack = createNativeStackNavigator();
const Routes = ({navigation}) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'HomeScreen'}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              header: () => {
                null;
              },
            }}
          />

          <Stack.Screen
            name="AddContact"
            component={AddContact}
            options={{
              title: 'Add Emergency Contact',
              headerTitleStyle: {
                color: '#fff',
              },
              headerStyle: {
                backgroundColor: '#2e3e7e',
              },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    backgroundColor: '#fff',
  },
});

export default Routes;
