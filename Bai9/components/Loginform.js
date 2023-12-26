import { Text, SafeAreaView, StyleSheet,Button,TouchableOpacity,TextInput,View } from 'react-native';
import React, { useState } from 'react';


const Loginform = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [data, setData] = useState('');

  const handleLogin = () => {
    console.log("UserName:", username);
    console.log("PassWord:", password);


    
    setData(true);
  }

  const handlelogout = () => {
    setData(false);
    setUserName('');
    setPassWord('');
  }

  return (
    <SafeAreaView style={styles.sectioncontainer}>
      <Text style={styles.tilte}>Welcome Login</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder='UserName'
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder='PassWord'
        onChangeText={setPassWord}
        secureTextEntry
      
      />

      

      <TouchableOpacity style={styles.dangnhapp} onPress={handleLogin}>
        <Text style={styles.textt1}>LOGIN</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.dangnhapp}>
            <Text style={styles.textt2}>SignUp</Text>
          </TouchableOpacity>

          
      {data && (
        <View>
         <Text style={styles.textt1}>Danh sách đã đăng nhập :</Text>
          <Text>Username: {username}</Text>
          <Text>Password: {password}</Text>
         
          

        </View>
      )}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create(
{
sectioncontainer : {
flex :1 ,
padding:50,
fontSize:10,
backgroundColor:'white',
alignItems:'center'
},

tilte :{
  backgroundColor:'black',
  padding :10,
  color:'red',
  textAlign:'center',
  fontWeight:'bold',
  fontSize: 30,
  marginBottom: 20,
  width: '100%',
  height: 60,

},

textt2 :{
  padding :10,
  color:'red',
  textAlign:'center',
  fontSize:20,
  fontWeight:'bold',
 
},

textt1 :{
  padding :10,
  color:'green',
  textAlign:'center',
  fontSize:20,
  fontWeight:'bold',
 
 
},

 dangnhapp :{
  width: '60%',
  height: 50,
  textAlign:'center',
  fontSize:20,
  fontWeight:'bold',
  backgroundColor:'blue',
  marginTop:20,
},


input: {
width: '80%',
height: 40,
borderColor: 'gray',
borderWidth: 1,
marginBottom: 10,
paddingLeft: 10,
},

}
)
export default Loginform;