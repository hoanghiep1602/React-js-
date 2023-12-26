 import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Bai2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://6530db196c756603295f2b0a.mockapi.io/Data');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {data.map((item) => (
        <View key={item.id}>
          <Text>Tên: {item.Name}</Text>
          <Text>MSSV: {item.MSSV}</Text>
          <Text>Lớp: {item.Class}</Text>
        </View>
      ))}
    </View>
  );
};

export default Bai2;
