import React, {useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useNavigate} from 'react-router-native';

import Button from '../components/Button';
import globalStyles from '../styles';

const items = [
  {label: 'Av. Universidad #42 ', value: 'Av. Universidad #42 '},
  {label: 'Av. Constitución #120', value: 'Av. Constitución #120'},
  {label: 'Fco. Javier Mina #309', value: 'Fco. Javier Mina #309'},
  {label: 'Av. Teconologíco #10', value: 'Av. Teconologíco #10'},
];

const placeholder = {
  label: 'Selecciona la sucursal',
  value: '',
};

const Sucursal = () => {
  const navigate = useNavigate();
  const [sucursal, setSucursal] = useState();

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
        }}>
        <Text
          style={{
            color: '#4E3018',
            fontSize: 24,
            fontWeight: '600',
            marginBottom: 20,
          }}>
          Elige tu sucursal más cercana
        </Text>
        <RNPickerSelect
          placeholder={placeholder}
          style={{
            placeholder: {
              color: '#4E3018',
            },
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            borderColor: 'purple',
            borderRadius: 8,
            color: 'black',
          }}
          onValueChange={value => setSucursal(value)}
          items={items}
        />
      </View>
      <Button
        text="Siguiente"
        // backgroundColor={!sucursal ? '#'}
        onPress={() => {
          if (!sucursal) {
            ToastAndroid.show('Selecciona una sucursal', ToastAndroid.SHORT);
          } else {
            navigate('/carrito/resumen');
          }
        }}
      />
    </View>
  );
};

export default Sucursal;
