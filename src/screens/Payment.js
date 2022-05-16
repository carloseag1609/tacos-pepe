import React, {useState} from 'react';
import {View, Text, ToastAndroid, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigate} from 'react-router-native';

import Button from '../components/Button';
import globalStyles from '../styles';

const Payment = () => {
  const navigate = useNavigate();
  const [optSelected, setoptSelected] = useState();

  return (
    <View style={globalStyles.container}>
      <View
        style={{
          width: '90%',
          height: 300,
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginBottom: 20,
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
        <TouchableOpacity
          onPress={() => {
            setoptSelected('tarjeta');
            ToastAndroid.show('Tarjeta seleccionada', ToastAndroid.SHORT);
          }}
          style={{
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#4E3018',
            borderRadius: 10,
            padding: 10,
            marginTop: 50,
            backgroundColor:
              optSelected === 'tarjeta' ? '#E9CDAF' : 'transparent',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="payment" color="#4E3018" style={{fontSize: 35}} />
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              width: '50%',
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: '#4E3018',
                fontWeight: '600',
                fontSize: 20,
              }}>
              Tarjeta
            </Text>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 16,
              }}>
              Débito o crédito
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setoptSelected('efectivo');
            ToastAndroid.show('Efectivo seleccionado', ToastAndroid.SHORT);
          }}
          style={{
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#4E3018',
            borderRadius: 10,
            padding: 10,
            marginTop: 20,
            backgroundColor:
              optSelected === 'efectivo' ? '#E9CDAF' : 'transparent',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="attach-money" color="#4E3018" style={{fontSize: 35}} />
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              width: '60%',
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: '#4E3018',
                fontWeight: '600',
                fontSize: 20,
              }}>
              Efectivo
            </Text>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 16,
              }}>
              Paga cuando te entreguemos
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Button
        text="Siguiente"
        onPress={() => {
          if (!optSelected) {
            ToastAndroid.show(
              'Selecciona un metodo de pago',
              ToastAndroid.SHORT,
            );
          } else {
            navigate('/carrito/entrega');
          }
        }}
      />
    </View>
  );
};

export default Payment;
