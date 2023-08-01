import React, { useState } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

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

const GameScreen = ({ userNumber }) => {

    const initialGuess = generateRandomBetween(minBoundry, maxBoundry, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

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
        <View>
            <Text>Higher or Lower</Text>
            <View>
                <PrimaryButton onPressBtn={nextGuessNumber.bind(this, 'lower')}>-</PrimaryButton>
                <PrimaryButton onPressBtn={nextGuessNumber.bind(this, 'greater')}>+</PrimaryButton>
            </View>
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
    },
})