import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useLocation, useNavigate} from 'react-router-native';

const TopNav = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  let title;

  if (pathname.startsWith('/menu')) {
    title = pathname.substring(pathname.lastIndexOf('/') + 1).toUpperCase();
  } else {
    title = pathname.includes('confirmacion') ? 'CONFIRMACIÓN' : 'ORDEN';
  }

  return (
    <View style={styles.topNavBar}>
      <TouchableOpacity onPress={() => navigate(-1)} activeOpacity={0.8}>
        <Icon name="arrow-back" style={{fontSize: 26, color: '#E46E14'}} />
      </TouchableOpacity>
      <Text style={{fontSize: 26, fontWeight: '600', color: '#E46E14'}}>
        {title ||
          pathname.substring(pathname.lastIndexOf('/') + 1).toUpperCase()}
      </Text>
      <TouchableOpacity onPress={() => console.log('Settings')}>
        <Icon name="settings" style={{fontSize: 26, color: '#E46E14'}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topNavBar: {
    backgroundColor: '#EBD9C6',
    paddingHorizontal: 20,
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

    elevation: 5,
  },
});

export default TopNav;
