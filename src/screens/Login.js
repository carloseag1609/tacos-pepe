import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigate} from 'react-router-native';
import globalStyles from '../styles';

const Login = () => {
  const navigate = useNavigate();
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);

  return (
    <View style={globalStyles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Iniciar</Text>
        <View style={styles.form}>
          <TextInput
            onFocus={() => setFocus1(true)}
            onBlur={() => setFocus1(false)}
            style={[styles.input, focus1 && styles.yellowBorder]}
            placeholder="Correo electrónico"
          />
          <TextInput
            onFocus={() => setFocus2(true)}
            onBlur={() => setFocus2(false)}
            style={[styles.input, focus2 && styles.yellowBorder]}
            placeholder="Contraseña"
          />
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigate('/menu')}
          style={styles.loginButton}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.brownText}>Ó</Text>
        <Text style={[styles.brownText, styles.textUnderlined]}>
          Registrarse
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#A44306',
    fontSize: 50,
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 200,
  },
  yellowBorder: {borderColor: '#E46E14'},
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
  btnText: {color: 'white', fontSize: 18},
  brownText: {
    color: '#A44306',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
  },
  textUnderlined: {
    textDecorationLine: 'underline',
  },
});

export default Login;
