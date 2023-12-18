/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 29/11/2023 - 11:43:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import global from 'react-native';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      text: '',
    };

    setTasks([...tasks, newTask]);
  };

  const editTask = (taskIndex) => {
    const task = tasks[taskIndex];

    const editTaskDialog = (
      <View style={styles.editTaskDialog}>
        <TextInput
          style={styles.editTaskInput}
          value={task.text}
          onChangeText={(text) => {
            task.text = text;
          }}
        />
        <Pressable
          style={styles.editTaskButton}
          onPress={() => {
            setTasks([
              ...tasks.slice(0, taskIndex),
              task,
              ...tasks.slice(taskIndex + 1),
            ]);
          }}
        >
          <Text>Enregistrer</Text>
        </Pressable>
      </View>
    );

    global.showModal(editTaskDialog);
  };

  const deleteTask = (taskIndex) => {
    setTasks([...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskList}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.task}>
            <Text style={styles.taskText}>{task.text}</Text>
            <Pressable
              style={styles.taskAction}
              onPress={() => {
                editTask(index);
              }}
            >
              <Text>Modifier</Text>
            </Pressable>
            <Pressable
              style={styles.taskAction}
              onPress={() => {
                deleteTask(index);
              }}
            >
              <Text>Supprimer</Text>
            </Pressable>
          </View>
        ))}
      </View>
      </View>
     
);
}
export default TaskList ;