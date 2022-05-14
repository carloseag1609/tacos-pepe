import {View, Text, Image} from 'react-native';
import React from 'react';

const Card = ({id, name, description, url}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 250,
        borderColor: '#4E3018',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
      }}>
      <Image
        source={url}
        style={{width: '100%', height: '65%', borderRadius: 10}}
      />
      <View style={{paddingHorizontal: 10, paddingVertical: 15}}>
        <Text style={{fontSize: 20, color: '#4E3018', fontWeight: 'bold'}}>
          {name}
        </Text>
        <Text style={{fontSize: 16, color: '#4E3018', fontWeight: 'normal'}}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default Card;
