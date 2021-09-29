import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Snackbar from 'react-native-snackbar';

import AsyncStorage from '@react-native-async-storage/async-storage';

// Import API
import {createPlayer} from '../admin/PlayerApi';
import {getGames} from '../admin/GamesApi';

const AddContact = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [contacts, setContacts] = useState([]);

  // function to read the contacts from the async storage
  const readContacts = async () => {
    try {
      const allContacts = await AsyncStorage.getItem('allContacts');
      if (allContacts !== null) {
        setContacts(JSON.parse(allContacts));
      }

      console.log('READ', contacts);
    } catch (error) {
      console.log(error);
    }
  };

  // create a function to set the contact to async local storage
  const setContact = async () => {
    try {
      var val = {};
      val.name = name;
      val.phoneNumber = phoneNumber;
      console.log(val);
      contacts.push(val);
      console.log('Item Set', contacts);
      await AsyncStorage.setItem('allContacts', JSON.stringify(contacts));
    } catch (error) {
      console.log(error);
    }
  };

  const clearForm = forSubmit => {
    // const [clearConf, setClearConf] = useState(false);

    const clearDetails = () => {
      setName('');
      setPhoneNumber('');

      return (
        !forSubmit &&
        Snackbar.show({
          text: 'Form Data Cleared.',
          duration: Snackbar.LENGTH_SHORT,
        })
      );
    };

    if (forSubmit) {
      clearDetails();
    }

    return (
      !forSubmit &&
      Alert.alert(
        'Confirm',
        'Are you sure, you want to clear the form?',
        [
          {text: 'No', onPress: () => console.log('No'), style: 'cancel'},
          {
            text: 'Yes',
            onPress: () => {
              console.log('Yes'), clearDetails();
            },
          },
        ],
        {cancelable: false},
      )
    );
  };

  const showMessage = txt => {
    console.log(txt);
    Snackbar.show({
      text: txt,
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  const formSubmit = async () => {
    // check form validations and navigate
    if (!name) {
      return showMessage('Enter Name');
    }
    if (!phoneNumber || phoneNumber.length < 10) {
      return showMessage('Enter Valid Phone Number');
    }

    console.log('\n--------------------\n');
    console.log(`Name : ${name}`);
    console.log(`Phone Number : ${phoneNumber}`);
    console.log('\n--------------------\n');

    // save the above data to databases

    await setContact();

    showMessage('Contact Added successfully.');

    setTimeout(() => {
      console.log('Your details are saved.');
      clearForm(true);
      navigation.navigate('HomeScreen');
    }, 100);
  };

  return (
    <ScrollView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" nestedScrollEnabled={true}>
        <View style={{marginLeft: 15, marginTop: 20}}>
          <View style={{marginHorizontal: 8, marginVertical: 12}}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#2e3e7e',
                marginBottom: 5,
              }}>
              Add your Emergency Contact
            </Text>
          </View>

          {/* Name */}
          <View style={{marginTop: 20}}>
            <Text style={styles.fieldLabel}> Name </Text>
            <TextInput
              editable={true}
              style={styles.textInputBox}
              placeholder=""
              onChangeText={text => setName(text)}
              value={name}
            />
          </View>

          {/* Phone Number */}
          <View style={{marginTop: 20}}>
            <Text style={styles.fieldLabel}> Phone Number </Text>
            <TextInput
              editable={true}
              keyboardType={'numeric'}
              style={styles.textInputBox}
              placeholder=""
              onChangeText={text => setPhoneNumber(text)}
              value={phoneNumber}
            />
          </View>

          <View
            style={{
              marginTop: 50,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginLeft: -20,
            }}>
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: '#fff', borderColor: '#2e3e7e'},
              ]}
              onPress={() => clearForm(false)}>
              <Text style={[styles.buttonText, {color: '#2e3e7e'}]}>
                Clear Form
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => formSubmit()}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={{height: 30}}></View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  radioText: {
    fontSize: 15,
    color: '#000',
    marginLeft: 5,
  },
  fieldLabel: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  textInputBox: {
    width: '85%',
    height: 45,
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: 'flex-start',
    borderColor: '#7f7f7f',
    paddingTop: 10,
    paddingLeft: 10,
    textAlignVertical: 'center',
    fontSize: 15,
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: '#2e3e7e',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#2e3e7e',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default AddContact;
