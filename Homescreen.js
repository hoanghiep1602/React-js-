import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import background from './assets/photo-1489769002049-ccd828976a6c.webp'

const HomeScreen = ({ navigation }) => {
  function onPressLogin() {
    navigation.navigate('Login');
  }

  function onPressSignUp() {
    navigation.navigate('Signup');
  }

  return (
    <View style={styles.container}>
    <ImageBackground source={background} style={styles.image} >
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome to Student Management</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onPressLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: '#5F9EA0',marginLeft: 30, }]} onPress={onPressSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.quoteText}>
      "The only way to do great work is to love what you do" Steve Jobs
      </Text>    
      </ImageBackground>
    </View>
 
  );

    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 29,
    color:'#E9967A',
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom: 35,
    flexDirection: 'row'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#00FFFF',
    borderRadius: 19,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop:25,
  },
  buttonText: {
    fontSize: 16,
    color:'#000000',
    fontWeight:'bold',
    textAlign: 'center',
  },
  quoteText: {
    fontSize: 20,
    color:	'#CD5C5C',
    fontWeight:'bold',
    marginTop: 50,
    textAlign: 'center',
    marginBottom:110,
  },
  image: {
   width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default HomeScreen;