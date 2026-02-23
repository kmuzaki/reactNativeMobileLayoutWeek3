import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    italianoRedText: {
        color: 'red',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

    textContainer: {
        margin: 40,
        padding: 10,
        borderWidth: 3,
    },

    colourContainer: {
        flex: 1,
        padding: 10,
    },

    red: {
        color: 'red',
    },

    bigBlue: {
        color: 'blue',
        fontSize: 30,
        fontWeight: 'bold',
    }   
})

export default index