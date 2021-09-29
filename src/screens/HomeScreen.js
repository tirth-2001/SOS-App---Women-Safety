import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Share,
  PermissionsAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FusedLocation from 'react-native-fused-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/Header';
import ContactCard from '../components/ContactCard';

import {sendSms} from '../utils/sendSms';

const AddFab = ({navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.fab}
      onPress={() => navigation.navigate('AddContact')}>
      <Image
        source={require('../assets/images/user-plus-solid.png')}
        style={{width: 22, height: 22, marginRight: 10}}
      />
      <Text style={styles.fabText}>Add Contact</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({navigation, route}) => {
  // make a array of 6 numbers with name dummyArray
  const dummyArray = Array.from({length: 6}, (v, k) => k);
  const [locationData, setLocationData] = useState();
  const [contacts, setContacts] = useState([]);
  const [allphones, setAllphones] = useState([]);

  console.log('Location', locationData);

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

  const getAllPhones = async () => {
    // extract phoneNumber property from contact list
    const allPhones = contacts.map(contact => contact.phoneNumber);
    setAllphones(allPhones);
  };
  useEffect(async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'App needs to access your location',
        message:
          'App needs access to your location ' +
          'so we can let our app be even more awesome.',
      },
    );
    if (granted) {
      FusedLocation.setLocationPriority(FusedLocation.Constants.HIGH_ACCURACY);

      // Get location once.
      const location = await FusedLocation.getFusedLocation();
      setLocationData(location);
      // this.setState({lat: location.latitude, long: location.longitude});

      // Set options.
      FusedLocation.setLocationPriority(FusedLocation.Constants.BALANCED);
      FusedLocation.setLocationInterval(20000);
      FusedLocation.setFastestLocationInterval(15000);
      FusedLocation.setSmallestDisplacement(10);

      // Keep getting updated location.
      FusedLocation.startLocationUpdates();

      // Place listeners.
      var subscription = FusedLocation.on('fusedLocation', location => {
        /* location = {
             latitude: 14.2323,
             longitude: -2.2323,
             speed: 0,
             altitude: 0,
             provider: 'fused',
             accuracy: 30,
             bearing: 10,
             mocked: false,
             timestamp: '1513190221416'
           }
           */
        console.log(location);
      });

      // Optional
      var errSubscription = FusedLocation.on('fusedLocationError', error => {
        console.warn(error);
      });

      return () => {
        FusedLocation.off(subscription);
        // FusedLocation.off(this.errSubscription);
        FusedLocation.stopLocationUpdates();
      };
    }
  }, []);

  useEffect(() => {
    getAllPhones();
  }, [contacts, locationData]);

  useEffect(() => {
    readContacts();
  }, []);

  console.log('All phones,', allphones);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <>
            <Header navigation={navigation} route={route} />
            <View style={{height: 60, backgroundColor: '#fff'}}></View>
            <View style={styles.iconContainer}>
              <Icon
                style={styles.icon}
                name="location-outline"
                size={30}
                color="#c00000"
              />
              <Text style={styles.locationText}>
                {locationData ? (
                  <Text>
                    {locationData.latitude} , {locationData.longitude}{' '}
                  </Text>
                ) : (
                  'Loading'
                )}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                sendSms(
                  contacts.map(contact => contact.phoneNumber),
                  locationData.latitude,
                  locationData.longitude,
                );
              }}>
              <Icon
                style={styles.icon}
                name="chatbox-ellipses-outline"
                size={30}
                color="#2e3e7e"
              />
              <Text style={styles.locationText}>Send SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={readContacts}>
              <Icon style={styles.icon} name="sync" size={20} color="green" />
              <Text style={styles.locationText}>Refresh</Text>
            </TouchableOpacity>
            {contacts ? (
              <>
                {contacts.map((item, index) => (
                  <ContactCard
                    key={index}
                    name={item.name}
                    phone={item.phoneNumber}
                  />
                ))}
              </>
            ) : (
              <View style={styles.noContacts}>
                <Text style={styles.noContactsText}>No Contacts Added.</Text>
                <Text style={styles.noContactsText}>
                  Please add your Emergency Contact
                </Text>
              </View>
            )}

            <View style={{height: 100}}></View>
          </>
        </View>
      </ScrollView>
      <AddFab navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: Dimensions.get('window').height * 1.5,
  },
  container1: {
    // flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logoContainer: {
    margin: 15,
    position: 'absolute',
    right: 6,
    top: 0,
  },
  logo: {
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  locationText: {
    fontSize: 20,
    marginLeft: 10,
  },
  noContacts: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: Dimensions.get('window').height * 0.7,
  },
  noContactsText: {
    fontSize: 17,
  },

  landscapeImage: {
    alignItems: 'center',
    marginTop: 20,
    marginLeft: -10,
  },
  image2: {
    height: 60,
    width: 250,
    borderWidth: 1,
  },
  fab: {
    position: 'absolute',
    flexDirection: 'row',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: '#2e3e7e',
    height: 45,
    width: 140,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 6,
    borderWidth: 0.4,
    borderColor: '#7f7f7f',
  },
  fabText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
