import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Card from '../components/Card';
import categoryTacosImage from '../../assets/category-tacos.jpg';
import categoryTortasImage from '../../assets/category-tortas.jpg';
import categoryBebidasImage from '../../assets/category-bebidas.jpg';
import categoryExtrasImage from '../../assets/category-extras.jpg';
import {useNavigate} from 'react-router-native';

const categoriesList = [
  {
    id: '1',
    name: 'Tacos',
    description: 'Suaves, regulares o dorados',
    url: categoryTacosImage,
  },
  {
    id: '2',
    name: 'Tortas',
    description: 'Regulares o doradas',
    url: categoryTortasImage,
  },
  {
    id: '3',
    name: 'Bebidas',
    description: 'Aguas frescas y refrescos',
    url: categoryBebidasImage,
  },
  {
    id: '4',
    name: 'Extras',
    description: 'Salsas y consome',
    url: categoryExtrasImage,
  },
];

const Menu = () => {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '80%'}}
        data={categoriesList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Card {...item} onPress={() => navigate('/menu/tacos')} />
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
  topNavBar: {
    backgroundColor: '#EBD9C6',
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default Menu;
