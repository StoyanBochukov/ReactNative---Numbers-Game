import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Colors from '../../constants/color'

const NumberContainer = ({ children }) => {
  return (
   <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
   </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8,
        padding: 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    }
})