import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Popups from '../components/Popups';
const Home = () => {
  const [popupHeight, setPopUpHeight] = useState(new Animated.Value(0));

  const onPressPopup = () => {
    Animated.spring(popupHeight, {
      toValue: 0,
      duration: 1,
      useNativeDriver: false,
    }).start();
  };
  const onPressPopDown = () => {
    Animated.spring(popupHeight, {
      toValue: 400,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={{backgroundColor: 'yellow', top: '10%'}}
        onPress={() => {
          onPressPopup();
        }}>
        <Text>Press</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'yellow', top: '10%'}}
        onPress={() => {
          onPressPopDown();
        }}>
        <Text>Press Down</Text>
      </TouchableOpacity>
      <Animated.View style={{...styles.popUpBody, marginTop: popupHeight}}>
        <Popups />
      </Animated.View>
    </View>
  );
};

export default Home;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const HEIGHT_SCREEN = Dimensions.get('window').height;
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  bottom: {
    // borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    height: HEIGHT_SCREEN * 0.3,
  },
  popUpBody: {
    width: '100%',
    backgroundColor: 'white',
    height: SCREEN_HEIGHT,
    borderRadius: 20,
    top: SCREEN_HEIGHT * 0.6,
  },
});
