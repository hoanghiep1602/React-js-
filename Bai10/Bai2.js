import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { View, Button, Text,  StyleSheet,SafeAreaView } from 'react-native';

// Action types
const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';

// Action creators
const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
});

const updateTodo = (id, updatedTodo) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    todo: updatedTodo
  }
});

const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
});

// Reducer function
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          todo: action.payload
        }
      ];
    case UPDATE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            todo: action.payload.todo
          };
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(todoReducer);

// TodoList component
const TodoList = ({ todos, addTodo, updateTodo, deleteTodo }) => {
  const handleAddTodo = () => {
    const todo = prompt('Enter a new todo');
    if (todo) {
      addTodo(todo);
    }
  };

  const handleUpdateTodo = (id, todo) => {
    const updatedTodo = prompt('Enter an updated todo', todo);
    if (updatedTodo) {
      updateTodo(id, updatedTodo);
    }
  };

  const handleDeleteTodo = id => {
    deleteTodo(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tiltle}>To do List</Text>
      <Button  title="Add To Do"  onPress={handleAddTodo}/>
      <View>
           <Text style={styles.tiltle2} >List To Do Here </Text>
        {todos.map(todo => (
          <p key={todo.id}>
            {todo.todo}
            <button style={styles.inputt} onClick={() => handleUpdateTodo(todo.id, todo.todo)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            
          </p>
        ))}
        
      </View>
    </SafeAreaView>
  );
};

// Connect TodoList component to Redux store
const ConnectedTodoList = connect(
  state => ({ todos: state }),
  { addTodo, updateTodo, deleteTodo }
)(TodoList);

// App component
const Bai2 = () => {
  return (
    <Provider store={store}>
      <ConnectedTodoList />
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'pink',
  },
  tiltle: {
    fontSize: 30,
    color: 'red',
    backgroundColor: 'black',
    fontWeight: 'Bold',
    marginTop:90,
    marginBottom:40,
    
  },

   tiltle2: {
    fontSize: 20,
    color: 'purple',
    fontWeight: 'Bold',
    marginTop:90,
    marginBottom:40,
    
  },

 
  inputt: {
    marginLeft: 50,
    marginRight:50,
    
  },
});


export default Bai2;