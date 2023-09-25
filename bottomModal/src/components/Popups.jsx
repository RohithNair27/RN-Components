import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const Popups = () => {
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  return (
    <View style={styles.body}>
      <View style={styles.line}></View>
      <View></View>
    </View>
  );
};

export default Popups;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  line: {
    borderWidth: 2,
    top: '2%',
    alignSelf: 'center',
    width: '30%',
  },
});
