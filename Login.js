import axios from 'axios';
import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { message, Input } from 'antd';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity,ImageBackground } from 
'react-native';
import background from './assets/photo-1696713574712-66c97f226146.webp';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        'https://6530db196c756603295f2b0a.mockapi.io/Login'
      );
      const user = response.data.find(
        (user) => user.username === username && user.password === password);
      if (!user || !password) {
        message.error('Username or Password is invalid');
      } else {
        message.success('Login success!');
        navigation.navigate('List');
         setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLoginButtonPress = () => {
    if (!username && !password) {
      message.error('Please enter your username and password!');
    } else {
      handleLogin();
    }
  };

  const returnHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.sectioncontainer}>
        <ImageBackground source={background} style={styles.image}resizeMode="cover">
      <View style={styles.formView}>
        <Text style={styles.tilte}>Welcome Back</Text>
        <Input
          style={styles.input}
          prefix={<UserOutlined />}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
       
        <Input.Password
          style={styles.input}
          prefix={<LockOutlined />}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

         <TouchableOpacity
            style={[styles.button, { marginTop: 5, backgroundColor: '#1E90FF', alignSelf: 'center' }]} onPress={handleLoginButtonPress}>
            <Text style={styles.buttonText}>Đăng Nhập</Text>
          </TouchableOpacity>

        <TouchableOpacity  onPress={returnHome}>
          <Text style={styles.title2}>Back To Home</Text>
        </TouchableOpacity>
      </View>
          </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  sectioncontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '130%',
    borderRadius: 20,
    marginBottom: 10,
  },
  title2: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  formView: {
    backgroundColor: 'rgba(250,250,250)',
    borderRadius: 20,
    alignItems: 'center',
    padding: 45,
    margin: 20,
  },
   buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   button: {
    textAlign:'center',
    paddingVertical: 10,
    borderRadius: 18,
    width: 135,
  },
   image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  tilte: {
    color: '#778899',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 25,
  },
});

export default Login;