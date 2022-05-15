import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../components/Button';
import globalStyles from '../styles';
import {useNavigate} from 'react-router-native';

const ScheduleOrder = () => {
  const [date, setDate] = useState(new Date());
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigate = useNavigate();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showTimepicker = () => {
    showMode('time');
  };

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
          Programa tu orden
        </Text>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              color: '#4E3018',
              fontSize: 20,
              marginBottom: 10,
              fontWeight: '600',
            }}>
            Seleccionar Hora
          </Text>
        </View>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={showTimepicker}>
          <View>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 18,
                fontWeight: '600',
              }}>
              Hora
            </Text>
            <Text
              style={{
                color: '#4E3018',
                fontSize: 18,
              }}>{`${date.getHours()}:${date.getMinutes()}`}</Text>
          </View>
          <Icon
            name="unfold-more"
            style={{
              color: '#4E3018',
              fontSize: 22,
            }}
          />
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            tintColor="#4E3018"
            onCheckColor="#4E3018"
            tintColors={{
              true: '#4E3018',
              false: '#4E3018',
            }}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text
            style={{
              color: '#4E3018',
              fontSize: 18,
              fontWeight: '600',
            }}>
            No deseo programar mi orden
          </Text>
        </View>
      </View>
      <Button text="Siguiente" onPress={() => navigate('/orden/pago')} />
    </View>
  );
};

export default ScheduleOrder;
