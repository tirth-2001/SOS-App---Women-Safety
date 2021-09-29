import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const RegisterSuccess = ({navigation}) => {
  const [confirmLogout, setConfirmLogout] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Image
          source={require('../assets/images/landscape.png')}
          style={styles.image1}
        />
      </View>
      <View style={styles.main}>
          <View style={styles.imageBox}>
            <Image
              style={styles.image}
              source={require('../assets/images/check.png')}
              size={50}
            />
          </View>
        <View style={styles.logoutBox}>
          <Text style={styles.logoutTitle}>
            Your details are saved successfully!
          </Text>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: '#2e3e7e',
                  borderWidth: 1,
                  borderColor: '#fff',
                },
              ]}
              onPress={() => navigation.navigate('Register')}>
              <Text style={[styles.buttonText, {color: '#fff'}]}>
                Register New Player
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: '#2e3e7e',
                },
              ]}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={[styles.buttonText, {color: '#2e3e7e'}]}>
                Go to Home Screen
              </Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },

  first: {
    flexGrow: 0.2,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  main: {
    flexGrow: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    height: 70,
    width: 280,
    marginTop: 10,

  },
  imageBox: {
    borderWidth: 1,
    borderColor: '#2e3e7e',
    borderRadius: 100,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 53,
  },
  image: {
    height: 95,
    width: 95,
    borderRadius: 60,
    margin:5
  },

  button: {
    width: 200,
    height: 50,
    borderRadius: 23,
    backgroundColor: '#2e3e7e',
    
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 30,

    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutBox: {
    height: 160,
    width: 500,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    marginTop: 55,
    padding: 10,
  },
  buttonView: {
    // flexDirection: 'row',
    marginTop: 30,
  },
  logoutTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    color: '#7f7f7f',
  },
  
});

export default RegisterSuccess;
