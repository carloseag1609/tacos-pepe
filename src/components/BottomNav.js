import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigate} from 'react-router-native';

const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <View style={styles.bottomNav}>
      <Icon name="reorder" style={{fontSize: 30}} />
      <Icon name="shopping-bag-outlined" style={{fontSize: 30}} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,

    backgroundColor: '#E9CDAF',
    paddingHorizontal: 10,
    width: '100%',
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default BottomNav;
