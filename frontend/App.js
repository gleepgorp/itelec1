import { PostContextProvider } from './context/PostContext'
import { StatusBar } from 'expo-status-bar';
import Post from './pages/Post'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <PostContextProvider>
      <View style={styles.container}>
        <Post />
      </View>
    </PostContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#15202B'
  },
});
