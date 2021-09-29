import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

// Import utility features
import moment from 'moment';
import Snackbar from 'react-native-snackbar';

// Import admin api calls
import {getAnnouncements} from '../admin/AnnApi';

import AccCard from '../components/AccCard';

const Announcements = ({navigation, route}) => {
  const [para1, setPara1] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [lastOpenValue, setLastOpenValue] = useState();
  // console.log("Route",route)

  const preloadAnnouncements = async () => {
    setIsLoading(true);
    await getAnnouncements().then(data => {
      // console.log("API Data : ", data);
      if (data.error) {
        Snackbar.show('Error fetching Announcements', 'Try again');
      } else {
        // console.log(data);
        setAnnouncements(data);
        setIsLoading(false);
      }
    });
  };

  const filterAnnouncements = () => {
    // filter announcements only if isPublished is true and publishedDate is not null
    const filteredAnnouncements = announcements.filter(ann => {
      return ann.isPublished && ann.publishedDate !== null;
    });
    console.log(filteredAnnouncements.length);
    // setAnnouncements(filteredAnnouncements);
  };

  console.log(announcements.length);
  console.log(announcements[0]);

  const getLastOpenData = async () => {
    try {
      const value = await AsyncStorage.getItem('lastAnOpen');
      if (value !== null) {
        console.log('=> READ - Last Open Announcement Page : ', value);
        setLastOpenValue(value);
        // console.log('=> Last Open Value', lastOpenValue);
      }
      // else {
      //   storeLastOpenData(moment().valueOf().toString());
      // }
    } catch (e) {
      console.log(e);
    }
  };

  const setLastOpenData = async value => {
    try {
      await AsyncStorage.setItem('lastAnOpen', value);

      console.log('=> SET - Last Open Announcement Page : ', value);
      getLastOpenData();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLastOpenData();
    preloadAnnouncements();
    filterAnnouncements();
    // setLastOpenData(moment().valueOf().toString());
  }, []);

  // useEffect(() => {
  //   filterAnnouncements();
  // }, [announcements]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginRight: 30}}
          onPress={() => {
            setLastOpenData(moment().valueOf().toString());
            navigation.navigate('HomeScreen', {
              dummyValue: 9,
            });
          }}>
          <Icon name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {!isLoading ? (
          <>
            <View style={{height: 20, backgroundColor: '#fff'}} />
            {announcements &&
              announcements
                .filter(ann => ann.isPublished && ann.publishedDate !== null)
                .map((announcement, index) => (
                  <AccCard
                    key={index}
                    ann={announcement}
                    seq={index}
                    len={announcements.length}
                    showNewBadge={
                      parseInt(announcement.publishedDate) >
                      parseInt(lastOpenValue)
                    }
                    lastOpenValue={lastOpenValue}
                  />
                ))}
            <View style={{height: 100, backgroundColor: '#fff'}} />
          </>
        ) : (
          <View style={{height: Dimensions.get('window').height}}>
            <ActivityIndicator
              size="large"
              color="#2e3e7e"
              style={{marginTop: Dimensions.get('window').height / 2 - 50}}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Announcements;
