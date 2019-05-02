import React from 'react';
import { View, Text } from 'react-native';

const Main = () => (
  <View style={styles.container} >
    <Text style={styles.welcome}>Welcome react native template!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Main;
