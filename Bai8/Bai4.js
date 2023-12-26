import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text,TextInput,Button,SafeAreaView } from 'react-native';

const Bai4 = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ Name: '', MSSV: '', Class: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://6530db196c756603295f2b0a.mockapi.io/Data');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://6530db196c756603295f2b0a.mockapi.io/Data', newItem);
      fetchData();
      setNewItem({ Name: '', MSSV: '', Class: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={newItem.Name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="MSSV"
          placeholder="MSSV"
          value={newItem.MSSV}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="Class"
          placeholder="Class"
          value={newItem.Class}
          onChange={handleInputChange}
        />
        <Button title="Add new user" color="blue" onPress={handleSubmit}/>
     
      <Text>
        {data.map((item) => (
          <Text key={item.id}>
            <p>Tên: {item.Name}</p>
            <p>MSSV: {item.MSSV}</p>
            <p>Lớp: {item.Class}</p>
         
          </Text>
        ))}
      </Text>
    </SafeAreaView>
  );
};

export default Bai4;