import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {useNavigate} from 'react-router-native';
import categoryTacosImage from '../../assets/category-tacos.jpg';
import Card from '../components/Card';

const tacos = [
  {
    id: '1',
    name: 'Tacos',
    description: '1 Taco x $20',
    url: categoryTacosImage,
  },
  {
    id: '2',
    name: 'Paquete individual',
    description: '3 tacos x $75',
    url: categoryTacosImage,
  },
  {
    id: '3',
    name: 'Paquete familiar',
    description: '12 x $216',
    url: categoryTacosImage,
  },
];

const Tacos = () => {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '80%'}}
        data={tacos}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Card {...item} onPress={() => navigate('/menu/detalles')} />
        )}
        keyExtractor={item => item.id}
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

export default Tacos;
