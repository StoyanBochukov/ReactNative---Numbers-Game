import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/color'

const NumberContainer = ({ children }) => {
  return (
   <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
   </View>
  )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold'
    }
})