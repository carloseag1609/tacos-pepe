import React from 'react';
import {View} from 'react-native';
import {Outlet, useLocation} from 'react-router-native';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';

const MainLayout = ({title}) => {
  const {pathname} = useLocation();

  console.log({pathname});

  return (
    <View style={{flex: 1}}>
      <TopNav />
      <View
        style={{flex: 1, backgroundColor: 'transparent', paddingBottom: 90}}>
        <Outlet />
      </View>
      <BottomNav />
    </View>
  );
};

export default MainLayout;
