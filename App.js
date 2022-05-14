import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tacos Pepe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBD9C6',
  },
  title: {
    color: '#A44306',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default App;
