import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useLocation, useNavigate} from 'react-router-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentLocation = location.pathname.substring(6);
  const {pathname} = location;

  console.log({currentLocation});

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}>
        <Icon
          name="restaurant-menu"
          style={{
            fontSize: 35,
            color:
              pathname.startsWith('/menu') || pathname.startsWith('/orden')
                ? '#E46E14'
                : '#4E3018',
          }}
        />
        <Text
          style={{
            color:
              pathname.startsWith('/menu') || pathname.startsWith('/orden')
                ? '#E46E14'
                : '#4E3018',
            fontWeight: '600',
          }}>
          Menú
        </Text>
      </TouchableOpacity>
      <View style={styles.navItem}>
        <Icon
          name="shopping-cart"
          style={{
            fontSize: 35,
            color: pathname.includes('carrito') ? '#E46E14' : '#4E3018',
          }}
          onPress={() => navigate('/carrito')}
        />
        <Text
          style={{
            color: pathname.includes('carrito') ? '#E46E14' : '#4E3018',
            fontWeight: '600',
          }}>
          Carrito
        </Text>
      </View>
      <View style={styles.navItem}>
        <Icon
          name="place"
          style={{
            fontSize: 35,
            color: currentLocation === 'sucursal' ? '#E46E14' : '#4E3018',
          }}
        />
        <Text
          style={{
            color: currentLocation === 'sucursal' ? '#E46E14' : '#4E3018',
            fontWeight: '600',
          }}>
          Sucursal
        </Text>
      </View>
      <View style={styles.navItem}>
        <Icon
          name="person"
          style={{
            fontSize: 35,
            color: currentLocation === 'cuenta' ? '#E46E14' : '#4E3018',
          }}
        />
        <Text
          style={{
            color: currentLocation === 'cuenta' ? '#E46E14' : '#4E3018',
            fontWeight: '600',
          }}>
          Cuenta
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#E9CDAF',
    paddingHorizontal: 25,
    width: '100%',
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
});
export default BottomNav;
