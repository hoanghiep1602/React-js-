import { Text, SafeAreaView, StyleSheet,Button,TouchableOpacity,TextInput,View,FlatList } from 'react-native';
import React, { useState } from 'react';


const Oderform = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [data, setData] = useState('');
  const [products, setProducts] = useState([]);

  const handleLogin = () => {
    console.log("UserName:", username);
    console.log("Phone:", phone);
    console.log("Address:", address); 
    setData(true);
  }
 const handleoderlist = () => {
   const newProduct = `Product ${products.length + 1}`;
    setProducts([...products, newProduct]);
   
 }
 

  return (
    <SafeAreaView style={styles.sectioncontainer}>
      <Text style={styles.tilte}>Welcome To Oder</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder='UserName'
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        value={phone}
        placeholder='Phone'
        onChangeText={setPhone}
   
      
      />

        <TextInput
        style={styles.input}
        value={address}
        placeholder='Address'
        onChangeText={setAddress}
     
      
      />
      <TouchableOpacity style={styles.dangnhapp} onPress={handleLogin}>
        <Text style={styles.textt1}>Order Now</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.dangnhapp} onPress={handleoderlist}>
            <Text style={styles.textt2}>Order List</Text>
          </TouchableOpacity>

           <Text>Danh sách sản phẩm :</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      {data && (
        <View>
          <Text>Username: {username}</Text>
          <Text>Password: {address}</Text>
          <Text>Phone: {phone}</Text>        
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
  fontSize:40,
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
export default Oderform;