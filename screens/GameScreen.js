import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const GameScreen = () => {
  return (
    <View style={styles.screenWrapper}>
        <Text>Opponent's Guess</Text>
        {/* GUESS */}
        <View>
            <Text>Higher or Lower</Text>
            {/* +
            _ */}
        </View>
        <View>
            {/* LOG ROUNDS */}
        </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screenWrapper: {
        flex: 1,
        padding: 24,
    }
})