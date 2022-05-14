import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigate} from 'react-router-native';

const Login = () => {
  const navigate = useNavigate();
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);

  return (
    <View style={styles.container} onTouchStart={() => console.log('asdasd')}>
      <View style={styles.form}>
        <Text style={styles.title}>Iniciar</Text>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: 200,
          }}>
          <TextInput
            onFocus={() => setFocus1(true)}
            onBlur={() => setFocus1(false)}
            style={[styles.input, focus1 && {borderColor: '#E46E14'}]}
            placeholder="Correo electrónico"
          />
          <TextInput
            onFocus={() => setFocus2(true)}
            onBlur={() => setFocus2(false)}
            style={[styles.input, focus2 && {borderColor: '#E46E14'}]}
            placeholder="Contraseña"
          />
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigate('/categories')}
          style={styles.loginButton}>
          <Text style={{color: 'white', fontSize: 18}}>Entrar</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#A44306',
            fontSize: 18,
            fontWeight: '500',
            marginTop: 20,
          }}>
          Ó
        </Text>
        <Text
          style={{
            color: '#A44306',
            fontSize: 18,
            fontWeight: '500',
            marginTop: 20,
            textDecorationLine: 'underline',
          }}>
          Registrarse
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EBD9C6',
    paddingTop: 60,
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#A44306',
    fontSize: 50,
    fontWeight: 'bold',
  },
  input: {
    height: 55,
    width: 300,
    borderWidth: 2,
    borderColor: '#4E3018',
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  forgotPassword: {
    color: '#A44306',
    fontSize: 17,
    textAlign: 'right',
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#4E3018',
    color: '#F9F9F9',
    marginTop: 20,
    height: 55,
    width: 300,
    fontSize: 24,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
