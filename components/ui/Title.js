import React from 'react'
import Colors from '../../constants/color'
import { Text, StyleSheet } from 'react-native'

const Title = ({ children }) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12
    }
})