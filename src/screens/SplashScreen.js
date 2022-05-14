import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useNavigate} from 'react-router-native';
import tacosIcon from '../../assets/tacos_icon.png';

const SplashScreen = () => {
  const navigate = useNavigate();
  return (
    <View
      style={styles.container}
      onTouchStart={() => {
        navigate('/login');
      }}>
      <Image source={tacosIcon} style={{width: 150, height: 150}} />
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
    fontSize: 65,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
