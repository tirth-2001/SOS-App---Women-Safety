import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

import {MaskImageView} from 'react-native-mask-image';
import Icon from 'react-native-vector-icons/Ionicons';

const SplashScreen = ({navigation}) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('HomeScreen');
      setFlag(true);
    }, 800);
  }, []);

  const image = {
    uri: 'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/Sports_Week%2FIMG_20210816_155623_1629218236127.jpg?alt=media&token=122ff9f3-abda-4c84-9818-e77d8195a102',
  };

  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <View style={styles.sectionOuter}>
          <View style={styles.section}>
            <View style={styles.logoBorder}>
              <Image
                source={require('../assets/images/circle.png')}
                style={styles.logoImage}
              />
            </View>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Welcome to App</Text>
          <View style={styles.landscapeImage}>
            <Image
              source={require('../assets/images/landscape.png')}
              style={styles.image2}
            />
          </View>
          <View style={{height: 70}} />
          {flag ? (
            <>
              <TouchableOpacity
                style={[styles.touchableOpacity]}
                onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.text2}>Get Started </Text>
                <Icon
                  style={[styles.logo, {marginLeft: 7}]}
                  name={'arrow-forward'}
                  color="#2e3e7e"
                  size={26}
                />
              </TouchableOpacity>
              {/* <ActivityIndicator size="large" color="#2e3e7e" /> */}
            </>
          ) : (
            <ActivityIndicator size="large" color="#2e3e7e" />
          )}
        </View>
      </View>
    </View>

    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'grey',
    //   }}>
    //   <MaskImageView
    //     urlMask={'https://i.imgur.com/7rgorlG.png'}
    //     urlImage={
    //       'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/Sports_Week%2FPicture1.png?alt=media&token=93858e19-3325-463b-a204-39e5304beefd'
    //     }
    //     style={{
    //       width: 200,
    //       height: 200,
    //     }}
    //   />
    // </View>

    // <View style={styles.container}>
    //   <ImageBackground source={image} resizeMode="contain" style={styles.image}>
    //     <View style={styles.container1}>
    //       {/* <Text style={styles.text}>Inside</Text> */}
    //       <Image
    //         source={{
    //           uri: 'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/Sports_Week%2FPicture1.png?alt=media&token=93858e19-3325-463b-a204-39e5304beefd',
    //         }}
    //         style={styles.logo}
    //       />
    //     </View>
    //   </ImageBackground>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  first: {
    flexGrow: 1,
    marginTop: 0,
    // borderWidth: 1,
  },
  second: {
    flexGrow: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // borderWidth: 1,
  },
  termTextBox: {
    flexGrow: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // borderWidth: 1,
    width: '100%',
  },
  separator: {
    marginVertical: 10,
  },
  section: {
    width: Dimensions.get('window').width + 240,
    height: 330,
    backgroundColor: '#2e3e7e',
    borderBottomLeftRadius: 295,
    borderBottomRightRadius: 295,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  sectionOuter: {
    width: Dimensions.get('window').width + 240,
    height: 330,
    borderWidth: 2,
    borderColor: '#2e3e7e',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 295,
    borderBottomRightRadius: 295,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    height: 100,
    width: 100,
    marginTop: 10,
    marginLeft: 10,
  },
  logoBorder: {
    height: 180,
    width: 180,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#2e3e7e',
    marginTop: 10,
    marginBottom: 10,
  },
  landscapeImage: {
    width: 600,
    alignItems: 'center',
    marginTop: 10,
  },
  image2: {
    height: 70,
    width: 300,
    borderWidth: 1,
  },
  touchableOpacity: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 30,
    width: 170,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#2e3e7e',
    flexDirection: 'row',
  },
  text2: {
    color: '#2e3e7e',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SplashScreen;
