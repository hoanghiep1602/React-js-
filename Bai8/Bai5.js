import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  TextInput,
  Button
} from 'react-native';
import axios from 'axios';

const Bai5 = () => {
  const [data, setData] = useState([]);
  const [editedItem, setEditedItem] = useState('');
  const [editedValues, setEditedValues] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://6530db196c756603295f2b0a.mockapi.io/Data'
      );
      setData(response.data);
    } catch (error) {
      console.error('Loi goi API', error);
    }
  };

  const handleEdit = (item) => {
    setEditedItem(item);
    setEditedValues({
      Name: item.Name,
      MSSV: item.MSSV.toString(),
      Class: item.Class,
    });
  };

  const handleInputChange = (event) => {
    setEditedValues({
      ...editedValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `https://6530db196c756603295f2b0a.mockapi.io/Data/${editedItem.id}`,
        {
          ...editedItem,
          ...editedValues,
        }
      );
      fetchData();
      setEditedItem(null);
      setEditedValues({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView className="container">
      <View>
        {data.map((item) => (
          <View key={item.id} className="item">
            {editedItem && editedItem.id === item.id ? (
              <View>
                <input
                  type="text"
                  name="Name"
                  value={editedValues.Name || ''}
                  onChange={handleInputChange}
                />

                <input
                 //onChangeText={(value) => handleInputChange('MSSV', value)}
                 type="number"
                  name="MSSV"
                  onChangeText={handleInputChange}
                  value={editedValues.MSSV || ''}
                />
                <input
                  type="text"
                  name="Class"
                  value={editedValues.Class || ''}
                  onChange={handleInputChange}
                />

                <Button title="Save" onPress={handleSave}
                />
              </View>
            ) : (
              <View>
                <Text>Name: {item.Name}</Text>
                <Text>MSSV: {item.MSSV}</Text>
                <Text>Class: {item.Class}</Text>
               <Button title="Edit" onPress={() => handleEdit(item)} color="green" />
              </View>
            )}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Bai5;
