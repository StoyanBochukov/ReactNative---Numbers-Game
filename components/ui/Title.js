import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Title = ({ children }) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
      fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12,
        maxWidth: '80%',
    }
})