import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';

const EventForm = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [datetime, setDatatime] = useState('');
  const [place, setPlace] = useState('');
  const [des, setdes] = useState('');
  const [data, setData] = useState('');

  const handlesummit = () => {
    console.log('Tilte:', title);
    console.log('DateTime:', datetime);
    console.log('Place:', place);
    console.log('description:', des);

    setData(true);
  };

  return (
    <SafeAreaView style={styles.sectioncontainer}>
      <Text style={styles.tilte}>Event Form</Text>
      <TextInput
        style={styles.input}
        value={title}
        placeholder="Tiêu đề"
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        value={datetime}
        placeholder="Datime"
        onChangeText={setDatatime}
      />

      <TextInput
        style={styles.input}
        value={place}
        placeholder="Place"
        onChangeText={setPlace}
      />

      <TextInput
        style={styles.input}
        value={des}
        placeholder="Description"
        onChangeText={setdes}
      />

      <TouchableOpacity style={styles.dangnhapp}onPress={handlesummit}>
        <Text style={styles.textt1}>Summit</Text>
      </TouchableOpacity>

      {data && (
        <View>
        <Text style={styles.textt1}>Event List :</Text>
          <Text>Tilte: {title}</Text>
          <Text>Datime: {datetime}</Text>
          <Text>Place: {place}</Text>
          <Text>Description: {des}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  sectioncontainer: {
    flex: 1,
    padding: 50,
    fontSize: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  tilte: {
    backgroundColor: 'black',
    padding: 10,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    width: '100%',
    height: 60,
  },

  textt2: {
    padding: 10,
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  textt1: {
    padding: 10,
    color: 'green',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  dangnhapp: {
    width: '60%',
    height: 50,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    marginTop: 20,
  },

  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
export default EventForm;
