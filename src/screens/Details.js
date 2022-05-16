import React from 'react';
import {Image, View, Text, ToastAndroid, StyleSheet} from 'react-native';
import {useNavigate} from 'react-router-native';
import categoryTacosImage from '../../assets/category-tacos.jpg';
import Button from '../components/Button';

const Details = () => {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '90%',
          height: 450,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#4E3018',
          marginTop: 15,
        }}>
        <Image
          source={categoryTacosImage}
          style={{
            width: '100%',
            height: '60%',
            borderRadius: 10,
          }}
        />
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 15,
          }}>
          <Text
            style={{
              color: '#4E3018',
              fontSize: 22,
              fontWeight: '600',
            }}>
            Paquete individual $75
          </Text>
          <Text
            style={{
              color: '#4E3018',
              fontSize: 18,
              marginTop: 10,
              lineHeight: 25,
            }}>
            Tres tacos de barbacoa, un amcompañamiento de consomé, agua de
            horchata (450ml), limones y salsa, para quedes bien servido
          </Text>
        </View>
      </View>
      <Button
        text="Agregar"
        backgroundColor="#E46E14"
        onPress={() => {
          ToastAndroid.show(
            'Paquete de tacos agregado al carrito',
            ToastAndroid.SHORT,
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EBD9C6',
  },
});

export default Details;
