import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigate} from 'react-router-native';

const TopNav = ({title}) => {
  const navigate = useNavigate();
  return (
    <View style={styles.topNavBar}>
      <Icon
        name="arrow-back"
        style={{fontSize: 30, color: '#E46E14'}}
        onPress={() => navigate(-1)}
      />
      <Text style={{fontSize: 22, fontWeight: '600', color: '#E46E14'}}>
        {title}
      </Text>
      <Icon name="settings" style={{fontSize: 30, color: '#E46E14'}} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default TopNav;
