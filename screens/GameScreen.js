import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return rndNum;
    }
}

let minBoundry = 1;
let maxBoundry = 100;

const GameScreen = ({ userNumber, onGameOver }) => {

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

    const nextGuessNumber = (direction) => {
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber) ){
            Alert.alert('Dont lie!', 'You know that thisis wrong...', 
            [{text: 'Sorry!', style: 'cancel'}])
            return
        }
        if(direction === 'lower'){
            maxBoundry = currentGuess;
        }else{
            minBoundry = currentGuess + 1;
        }
        console.log(minBoundry, maxBoundry)
        const newRndNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
        setCurrentGuess(newRndNumber)
    }

  return (
    <View style={styles.screenWrapper}>
       <Title>Opponents's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                 <PrimaryButton onPressBtn={nextGuessNumber.bind(this, 'lower')}>
                    <Ionicons name='md-remove' size={24} color='#fff' />
                 </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                 <PrimaryButton onPressBtn={nextGuessNumber.bind(this, 'greater')}>
                    <Ionicons name='md-add' size={24} color='#fff' />
                 </PrimaryButton>
                </View>
            </View>
        </Card>
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
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    },
    instructionText:{
        marginBottom: 12,
    }
})