import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Todolist from './TodoList';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Todolist />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#e6e6e6'
  },
});
