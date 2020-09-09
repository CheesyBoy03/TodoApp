import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    }

    //setTodos(todos.concat([ newTodo ]))
    //setTodos((prevTodos) => {
    //  return [
    //  ...prevTodos,
    //    newTodo
    //  ]
    //})

    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title: title,
    }])
  }

  return (
    <View >
      <Navbar title='Todo App'/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <ScrollView>
          {todos.map(todo => {
            return <Todo todo={todo} key={todo.id} />
          })}
        </ScrollView>
      </View>
      
    </View>
  );
};

const arr = [];

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    //justifyContent: 'center',
    //flexDirection: 'row',
    //alignItems: 'center',
  },
});
