import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/color'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
   <View style={styles.rootContainer}>
    <Title>GAME OVER</Title>
    <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
    </View>
        <View>
            <Text style={styles.summaryText}>Your Phone Needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
        </View>
        <PrimaryButton onPressBtn={onStartNewGame}>Start A New Game</PrimaryButton>
   </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
    imageContainer: {
        width: 300,
        height: 300,
        borderWidth: 3,
        borderRadius: 150,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignContent: 'center',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
})