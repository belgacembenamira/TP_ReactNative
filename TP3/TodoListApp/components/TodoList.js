/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 19/12/2023 - 00:04:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const TodoItem = ({ item, onEdit, onDelete }) => (
  <View style={styles.taskItem}>
    <Text>{item.text}</Text>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={[styles.actionButton, styles.updateButton]} onPress={() => onEdit(item)}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionButton, styles.deleteButton]} onPress={() => onDelete(item.id)}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      if (editingTask !== null) {
        handleUpdateTask();
      } else {
        setTasks((prevTasks) => [
          ...prevTasks,
          { id: Date.now().toString(), text: taskText },
        ]);
        setTaskText('');
      }
    }
  };

  const handleUpdateTask = () => {
    if (editingTask !== null && taskText.trim() !== '') {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTask.id ? { ...task, text: taskText } : task
        )
      );
      setTaskText('');
      setEditingTask(null);
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setEditingTask(null);
  };

  const renderItem = ({ item }) => (
    <TodoItem
      item={item}
      onEdit={(editedTask) => {
        setEditingTask(editedTask);
        setTaskText(editedTask.text);
      }}
      onDelete={handleDeleteTask}
    />
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add or Edit a task"
        value={taskText}
        onChangeText={setTaskText}
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.actionButton, styles.addButton]} onPress={handleAddTask}>
          <Text style={styles.buttonText}>
            {editingTask ? 'Update Task' : 'Add Task'}
          </Text>
        </TouchableOpacity>
        {editingTask && (
          <TouchableOpacity
            style={[styles.actionButton, styles.addButton]}
            onPress={() => {
              setTaskText('');
              setEditingTask(null);
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList data={tasks} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f4f4f4',
    },
    input: {
      borderWidth: 1,
      borderColor: '#e74c3c', // Red color
      padding: 12,
      marginBottom: 10,
      borderRadius: 8,
      backgroundColor: '#f8c291', // Apricot color
    },
    actionButton: {
      padding: 12,
      alignItems: 'center',
      borderRadius: 8,
      marginBottom: 10,
      margin: 10,
      backgroundColor: '#5cdb95', // Mint color
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    taskItem: {
      borderWidth: 1,
      borderColor: '#4a69bd', // Dodger Blue color
      padding: 15,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: '#d1ccc0', // Platinum color
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    updateButton: {
      backgroundColor: '#f39c12', // Yellow color
      padding: 12,
      alignItems: 'center',
      borderRadius: 8,
      marginBottom: 10,
    },
    deleteButton: {
      backgroundColor: '#e74c3c', // Red color
      padding: 12,
      alignItems: 'center',
      borderRadius: 8,
      marginBottom: 10,
    },
  });
export default TodoList;
