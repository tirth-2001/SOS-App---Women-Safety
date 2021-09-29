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
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Women's Safety \nMobile App 📱 \n\nDownload this app now... 👇 \n\nGoogle Playstore Link : \n",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.landscapeImage}>
        <Image
          source={require('../assets/images/landscape.png')}
          style={styles.image2}
        />
      </View>
      <View style={styles.logoContainer}>
        <TouchableOpacity
          onPress={onShare}
          activeOpacity={0.5}
          style={{borderWidth: 0, width: 35, height: 45}}>
          <Icon
            style={styles.logo}
            name={'share-social'}
            color="#2e3e7e"
            size={27}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

  landscapeImage: {
    alignItems: 'center',
    marginTop: 20,
    marginLeft: -20,
  },
  image2: {
    height: 60,
    width: 250,
    borderWidth: 1,
  },
});

export default Header;
