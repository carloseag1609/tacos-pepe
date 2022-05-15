import React from 'react';
import {View, Text} from 'react-native';
import {useNavigate} from 'react-router-native';

import Button from '../components/Button';
import globalStyles from '../styles';

const Summary = () => {
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
            marginBottom: 20,
          }}>
          Resumen de tu pedido
        </Text>
        <View
          style={{
            width: '90%',
            alignItems: 'flex-start',
            paddingHorizontal: 30,
          }}>
          <Text
            style={{
              color: '#4E3018',
              fontSize: 24,
              fontWeight: '600',
              marginBottom: 20,
            }}>
            Tu orden
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 18,
                marginBottom: 20,
              }}>
              Paquete de tacos x3
            </Text>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 18,
                marginBottom: 20,
              }}>
              $189
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 18,
                marginBottom: 20,
              }}>
              Agua de jamaica x3
            </Text>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 18,
                marginBottom: 20,
              }}>
              $75
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 22,
                fontWeight: '600',
                marginBottom: 20,
              }}>
              Total
            </Text>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 22,
                fontWeight: '600',
                marginBottom: 20,
              }}>
              $264
            </Text>
          </View>
        </View>
      </View>
      <Button text="Pagar" onPress={() => navigate('/orden/confirmacion')} />
    </View>
  );
};

export default Summary;
