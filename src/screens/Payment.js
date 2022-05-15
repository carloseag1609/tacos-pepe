import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigate} from 'react-router-native';

import Button from '../components/Button';
import globalStyles from '../styles';

const Payment = () => {
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
          Elige tu método de pago
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 50}}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: '#3467A4',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="payment" color="white" style={{fontSize: 25}} />
          </View>
          <Text
            style={{
              color: '#4E3018',
              fontSize: 20,
              marginLeft: 30,
              maxWidth: 150,
            }}>
            Tarjeta de débito/crédito
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '60%',
            marginTop: 20,
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: '#649757',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="attach-money" color="white" style={{fontSize: 25}} />
          </View>
          <Text
            style={{
              color: '#4E3018',
              fontSize: 20,
              marginLeft: 30,
              maxWidth: 150,
            }}>
            Efectivo
          </Text>
        </View>
      </View>
      <Button text="Siguiente" onPress={() => navigate('/orden/entrega')} />
    </View>
  );
};

export default Payment;
