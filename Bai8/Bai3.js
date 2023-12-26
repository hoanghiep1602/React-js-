import React, { useEffect, useState } from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import axios from 'axios'


const Bai3 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://6530db196c756603295f2b0a.mockapi.io/Data');
      setData(response.data);
      setLoading(false)
    } catch (error) {
      console.error("Loi goi API",error);
      setLoading(false);
    }
  };

  return (

    <SafeAreaView>
     <Text>Du lieu tu API</Text>
     {loading ? (
        <Text>loading ....</Text>
     ): (
      data.map((item) => (
        <Text key={item.id}>
          <Text>Tên: {item.Name}</Text>
          <Text>MSSV: {item.MSSV}</Text>  
          <Text>Lớp: {item.Class}</Text>
        </Text>
     ))
     )}
    </SafeAreaView>
  );
};

export default Bai3;