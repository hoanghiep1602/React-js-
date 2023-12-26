
import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
const { Search } = Input;
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios'
import { View, Text, SafeAreaView, StyleSheet,TouchableOpacity,ActivityIndicator } from 'react-native';
const List = ({ navigation }) => {
   const [data, setData] = useState([]);
  useEffect(() => {
   fetchData();
  }, []);
const [search, setSearch] = useState('');

 function onPressLogin() {
    navigation.navigate('Login');
  }

function onPressEdit() {
    navigation.navigate('Api');
  }
   const fetchData = async () => {
    try {
      const response = await axios.get('https://6530db196c756603295f2b0a.mockapi.io/Data');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
   const handleRefesh = async () => {
      try {
        await axios.get(
          'https://6530db196c756603295f2b0a.mockapi.io/Data'
        );
        fetchData();
      } catch (error) {
        console.error(error);  
    } 
  };
  return (
    <SafeAreaView style={styles.sectioncontainer}>
     <View style={styles.container}> 
  <TouchableOpacity onPress={onPressLogin} style={{flexDirection: 'row', alignItems: 'center' ,paddingTop:5,marginRight:45}} >
      <Icon name="stepbackward" size={18}/>
      <Text style={styles.text} >Back</Text>
    </TouchableOpacity>

          <TouchableOpacity  onPress={onPressEdit}>
            <Text style={styles.text2}>Student Management</Text>
          </TouchableOpacity>
 </View>
      <h1 style={styles.title}>DANH SÁCH SINH VIÊN</h1>
   
<View style={styles.container2}>
      <TouchableOpacity onPress={handleRefesh}>
        <Text>Refresh</Text>
      </TouchableOpacity>
      <ActivityIndicator size="small" color="#0000ff" style={styles.activityIndicator} />
    </View>
      <View style={styles.searchContainer}>
    
      <Search
  style={styles.input}
  placeholder="Mời nhập tên sinh viên....."
  enterButton
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
      </View>
   <View style={styles.userListContainer}>
  {data
    .filter((item) =>
      item.Name.toLowerCase().includes(search.toLowerCase())
    )
    .map((item) => (
      <View key={item.id} style={styles.userItem}>
  <Text style={styles.title2}>Thông tin sinh viên</Text>
 
  <View style={styles.userInfoContainer}>
    <View style={{marginRight:15}}>
      <Avatar size={95} icon={<UserOutlined />} />
    </View>
    <View>
      <Text style={styles.contentText}>Tên: {item.Name}</Text>
      <Text style={styles.contentText}>MSSV: {item.MSSV}</Text>
      <Text style={styles.contentText}>Lớp: {item.Class}</Text>
    </View>
  </View>
</View>
    ))}
</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  sectioncontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#B0C4DE',
  },
    text2: {
    paddingTop:9,
    color: '#7B68EE',
    fontWeight: 'bold',
    fontSize:14,
    paddingRight:5,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 5,
  },
   container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
   },
  activityIndicator: {
    marginLeft: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    padding: 10,
    color: '#0000CD',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingRight:70,
    color: '#FF4500',
    fontWeight: 'bold'
  },
 title2: {
    fontSize: 20,
    color: '#D2691E',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 18,
  },
  input: {
    width: '500%',
    marginBottom: 20,
  },
  userListContainer: {
    marginBottom: 100,
    width: '90%',
  },
 userItem: {
   backgroundColor:'#FFF8DC',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  }, 
});
export default List;