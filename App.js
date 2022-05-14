import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';
import Categories from './src/screens/Categories';
import Login from './src/screens/Login';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
