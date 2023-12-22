import { useEffect } from 'react';
import { usePostContext } from '../hooks/usePostContext'
import { StatusBar } from 'expo-status-bar';
import PostDetails from './PostsDetails'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Post() {
  const { posts, dispatch } = usePostContext()

  useEffect(() => {
    const fetchPosts = async () => {
      // const response = await fetch('http://localhost:3001/posts')
      
      // const json = await response.json()

      // if (response.ok) {
      //   dispatch({type: 'SET_POSTS', payload: json})
      // }
    }

    fetchPosts()

  }, [dispatch, posts])

  const handleSubmit = () => {
    console.log('hello')
  }

  return (
    <View style={styles.container}>
      <View style={styles.postWrapper}>
        <View style={styles.flex}>
          <TextInput style={styles.input} 
            placeholder='Whats happening'
            placeholderTextColor={'gray'}
          />
          <Button 
            style={styles.postButton}
            title='Post' onPress={handleSubmit}
          />
        </View>
        <View style={styles.posts}>
          {posts && posts.map((post) => (
            <PostDetails 
              key={post.id}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#15202B'
  },
  input : {
    color: 'white',
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }, 
  postButton: {
    fontSize: 100
  },
  posts: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }
});
