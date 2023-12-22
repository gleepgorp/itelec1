import React, {useState} from 
'react';
import { Text, 
        View,
        TextInput,
        StyleSheet, 
        Button,
        FlatList,
        KeyboardAvoidingView,
        Platform,
        TouchableOpacity,
        Keyboard, } from "react-native";
import Task from './Tasks';

export default function Todolist() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  //ADD TASK
  const handleAddTask =() => {
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  //REMOVE TASK
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return(
    <>
      <View style={styles.taskWrapper}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 24
        }}>Today's Tasks</Text>
        <View style={styles.taskItemWrapper}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <View style={styles.addTaskWrapper}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding': 'height'} style={styles.writeTaskWrapper}>
            <TextInput 
              style={styles.input}
              value={task} onChangeText={text => setTask(text)}
              placeholder='Add a new task'/>
           <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.text}>+</Text>
            </View>
          </TouchableOpacity>   
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  taskWrapper: {
    flex: 2,
  },
  addTaskWrapper: {
    
  },
  taskItemWrapper: {

  },  
  writeTaskWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 12
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 12,
    flex: 1
  },
  addWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  text: {
    fontSize: 24
  }
});

