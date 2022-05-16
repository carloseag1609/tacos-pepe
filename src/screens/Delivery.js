import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigate} from 'react-router-native';

import Button from '../components/Button';
import globalStyles from '../styles';

const Delivery = () => {
  const navigate = useNavigate();
  const [optSelected, setoptSelected] = useState();

  return (
    <View style={globalStyles.container}>
      <View
        style={{
          width: '90%',
          height: 300,
          borderColor: '#4E3018',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: 20,
          marginBottom: 20,
        }}>
        <Text
          style={{
            color: '#4E3018',
            fontSize: 24,
            fontWeight: '600',
          }}>
          Elige tu método de entrega
        </Text>
        <TouchableOpacity
          onPress={() => {
            setoptSelected('llevar');
            ToastAndroid.show('Para llevar seleccionado', ToastAndroid.SHORT);
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
              optSelected === 'llevar' ? '#E9CDAF' : 'transparent',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="storefront" color="#4E3018" style={{fontSize: 35}} />
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
              Para llevar
            </Text>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 16,
              }}>
              Recógelo en sucursal
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setoptSelected('domicilio');
            ToastAndroid.show('A domicilio seleccionado', ToastAndroid.SHORT);
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
              optSelected === 'domicilio' ? '#E9CDAF' : 'transparent',
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
              style={{fontSize: 35}}
            />
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
              A domicilio
            </Text>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 16,
              }}>
              Lo llevamos hasta tu casa
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Button
        text="Siguiente"
        onPress={() => {
          if (!optSelected) {
            ToastAndroid.show(
              'Selecciona un metodo de entrega',
              ToastAndroid.SHORT,
            );
          } else {
            navigate('/carrito/sucursal');
          }
        }}
      />
    </View>
  );
};

export default Delivery;
