import React from 'react'
import { View, ActivityIndicator, StyleSheet, Text  } from 'react-native'

const Loading = () => {
  
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
            <ActivityIndicator size="large" color="#00ff00" />
            <Text>Cargando...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
  

export default Loading
