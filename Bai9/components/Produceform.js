import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';

const ProductForm = () => {
  const { control, handleSubmit, formState: { errors }, register, reset } = useForm();
  const [products, setProducts] = useState([]);

  const onSubmit = (data) => {
    setProducts([...products, data]);
    reset();
  };

  return (
    <View style={styles.container}>
     <Text style={styles.tilte}>Produce Form</Text>
      <Text>Tên sản phẩm:</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
        name="name"
        rules={{ required: true }}
      />
      {errors.name && <Text style={styles.errorText}>This field is required.</Text>}

      <Text>Giá sản phẩm:</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            onChangeText={field.onChange}
            value={field.value}
            keyboardType="numeric"
          />
        )}
        name="price"
        rules={{ required: true, pattern: /^\d+$/ }}
      />
      {errors.price && <Text style={styles.errorText}>This field is required and must be a number.</Text>}

      <Text>Mô tả sản phẩm:</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
        name="description"
      />

      <Text>Danh mục sản phẩm:</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
        name="category"
        rules={{ required: true }}
      />
      {errors.category && <Text style={styles.errorText}>This field is required.</Text>}

      <Button title="Đăng ký" onPress={handleSubmit(onSubmit)} />

      <Text style={styles.label}>Danh sách sản phẩm đã đăng ký:</Text>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text>Tên sản phẩm: {item.name}</Text>
            <Text>Giá sản phẩm: {item.price}</Text>
            <Text>Mô tả sản phẩm: {item.description}</Text>
            <Text>Danh mục sản phẩm: {item.category}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  errorText: {
color: 'red',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  productContainer: {
    marginTop: 8,
  },
});

export default ProductForm;