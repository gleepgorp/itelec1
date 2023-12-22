import React from "react";
import { RootTagContext, TouchableOpacity } from "react-native";
import { Text,
        View,
        StyleSheet } from "react-native";
const Task = (props) => {
  return(
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderRadius: 10,
    marginTop: 16,
    fontSize: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  itemLeft: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12
  },
  square: {
    backgroundColor: '#a8caff',
    height: 22,
    width: 22,
    borderRadius: 4
  },
  itemText: {

  },
  circular: {
    height: 14,
    width: 14,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#a8caff'
  }
});

export default Task