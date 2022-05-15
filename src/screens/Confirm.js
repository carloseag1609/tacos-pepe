import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigate} from 'react-router-native';
import Button from '../components/Button';
import globalStyles from '../styles';

const Confirm = () => {
  const navigate = useNavigate();
  return (
    <View style={globalStyles.container}>
      <View
        style={{
          width: '90%',
          height: 420,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#4E3018',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="check-circle" color={'#009E2F'} size={70} />
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 16,
                maxWidth: 200,
              }}>
              Tu pedido ha sido procesado correctamente.
            </Text>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 16,
                fontWeight: '600',
                maxWidth: 200,
              }}>
              Estará listo a las 10:15 AM
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: '#4E3018',
            fontSize: 24,
            fontWeight: '600',
            marginTop: 25,
          }}>
          Número de orden: #0001
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <View style={{alignItems: 'center', marginRight: 20}}>
            <Icon name="storefront" color="#4E3018" style={{fontSize: 30}} />
            <Text
              style={{
                color: '#4E3018',
                fontSize: 18,
                marginLeft: 10,
                maxWidth: 150,
              }}>
              En restaurante
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 18,
                marginLeft: 10,
                maxWidth: 150,
              }}>
              Sucursal
            </Text>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 18,
                marginLeft: 10,
                maxWidth: 150,
              }}>
              Av. Universidad #42
            </Text>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 18,
                marginLeft: 10,
                maxWidth: 150,
              }}>
              Colima, Col.
            </Text>
          </View>
        </View>

        <Text
          style={{
            color: '#4E3018',
            fontSize: 24,
            fontWeight: '600',
            marginVertical: 20,
          }}>
          Resumen de tu pedido
        </Text>
        <View
          style={{
            width: '90%',
            alignItems: 'flex-start',
            paddingHorizontal: 30,
          }}>
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
      <Button text="Continuar Comprando" onPress={() => navigate('/menu')} />
    </View>
  );
};

export default Confirm;
