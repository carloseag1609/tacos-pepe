import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigate} from 'react-router-native';

import Button from '../components/Button';
import globalStyles from '../styles';

const Delivery = () => {
  const navigate = useNavigate();
  return (
    <View style={globalStyles.container}>
      <View
        style={{
          width: '90%',
          height: 300,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#4E3018',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: 20,
        }}>
        <Text
          style={{
            color: '#4E3018',
            fontSize: 24,
            fontWeight: '600',
          }}>
          Elige tu método de entrega
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 50}}>
          <View
            style={{
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="storefront" color="#4E3018" style={{fontSize: 30}} />
          </View>
          <Text
            style={{
              color: '#4E3018',
              fontSize: 20,
              marginLeft: 10,
              maxWidth: 150,
            }}>
            En restaurante
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="delivery-dining"
              color="#4E3018"
              style={{fontSize: 30}}
            />
          </View>
          <Text
            style={{
              color: '#4E3018',
              fontSize: 20,
              marginLeft: 10,
              maxWidth: 150,
            }}>
            A domicilio
          </Text>
        </View>
      </View>
      <Button text="Siguiente" onPress={() => navigate('/orden/sucursal')} />
    </View>
  );
};

export default Delivery;
