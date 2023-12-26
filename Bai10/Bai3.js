import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

// Action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Action creators
const login = (username) => ({
  type: LOGIN,
  payload: username,
});

const logout = () => ({
  type: LOGOUT,
});

// Reducer function
const authReducer = (state = { isLoggedIn: false, username: '' }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true,
        username: action.payload,
      };
    case LOGOUT:
      return {
        isLoggedIn: false,
        username: '',
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(authReducer);

// Login component
const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      login(username);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tiltle}>Welcome Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </SafeAreaView>
  );
};

// Connect Login component to Redux store
const ConnectedLogin = connect(null, { login })(Login);

// Logout component
const Logout = ({ logout, username }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Text>Welcome back, {username}.</Text>
      <Button   title="Logout" onPress={handleLogout} />
    </View>
  );
};

// Connect Logout component to Redux store
const ConnectedLogout = connect((state) => ({ username: state.username }), {
  logout,
})(Logout);

// App component
const Bai3 = ({ isLoggedIn }) => {
  return <View>{isLoggedIn ? <ConnectedLogout /> : <ConnectedLogin />}</View>;
};

// Connect App component to Redux store
const ConnectedApp = connect((state) => ({ isLoggedIn: state.isLoggedIn }))(
  Bai3
);

// Render the app
export default function Main() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tiltle: {
    fontSize: 30,
    color: 'red',
    backgroundColor: 'black',
    fontWeight: 'Bold',
    marginTop:90,
    marginBottom:40,
    
  },

 
  input: {
    height: 40,
    width:'90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});
