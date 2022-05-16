import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';
import MainLayout from './src/layouts/MainLayout';
import Menu from './src/screens/Menu';
import Details from './src/screens/Details';
import Login from './src/screens/Login';
import SplashScreen from './src/screens/SplashScreen';
import Tacos from './src/screens/Tacos';
import ScheduleOrder from './src/screens/ScheduleOrder';
import Payment from './src/screens/Payment';
import Delivery from './src/screens/Delivery';
import Sucursal from './src/screens/Sucursal';
import Summary from './src/screens/Summary';
import Confirm from './src/screens/Confirm';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<SplashScreen />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="main" element={<MainLayout />}></Route> */}
        <Route path="menu" element={<MainLayout />}>
          <Route index element={<Menu />} />
          <Route path="tacos" element={<Tacos />} />
          <Route path="detalles" element={<Details />} />
        </Route>
        <Route path="carrito" element={<MainLayout />}>
          <Route index element={<ScheduleOrder />} />
          <Route path="pago" element={<Payment />} />
          <Route path="entrega" element={<Delivery />} />
          <Route path="sucursal" element={<Sucursal />} />
          <Route path="resumen" element={<Summary />} />
          <Route path="confirmacion" element={<Confirm />} />
        </Route>
        {/* <Route path="carrito" element={<MainLayout />}>
          <Route index element={<ScheduleOrder />} />
        </Route> */}
      </Routes>
    </NativeRouter>
  );
};

export default App;
