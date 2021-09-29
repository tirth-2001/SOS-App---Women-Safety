import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContactCard = ({name, phone}) => {
  return (
    <View
      style={{
        height: 150,
        width: Dimensions.get('window').width - 20,
        padding: 10,
        marginHorizontal: 10,
        marginTop: 26,

        borderRadius: 15,
        elevation: 7,
        backgroundColor: '#fff',
        shadowOffset: {width: 0, height: 10},
        shadowColor: '#333',
        shadowOpacity: 1.0,
        shadowRadius: 22,
        borderWidth: 0,
        borderColor: '#ddd',
      }}>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
        <View>
          <Image
            source={require('../assets/images/user.png')}
            style={{width: 120, height: 70, borderRadius: 25}}
            resizeMode="center"
          />
        </View>
        <View>
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                width: Dimensions.get('window').width / 2 + 8,
                textAlign: 'justify',
              }}>
              {name}
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginTop: 8,
                width: Dimensions.get('window').width / 2 + 8,
                height: 58,
                textAlign: 'justify',
                color: '#4f4f4f',
              }}>
              {phone}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 3,
          justifyContent: 'space-between',
          // width: Dimensions.get('window').width,
          // borderWidth: 1,
        }}>
        <View style={{flexDirection: 'row'}}>
          {/* <Icon name="time" size={20} color="#7f7f7f" /> */}
          <TouchableOpacity onPress={() => console.log('edit')}>
            <Text
              style={{
                fontSize: 17,
                color: '#7f7f7f',
                marginHorizontal: 8,
                marginLeft: 18,
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => console.log('edit')}>
          <Text
            style={{
              fontSize: 16,
              color: '#7f7f7f',
              marginRight: 30,
              color: 'red',
            }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContactCard;
