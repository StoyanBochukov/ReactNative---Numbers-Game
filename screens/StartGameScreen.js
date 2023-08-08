import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/color'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

const StartGameScreen = ({ onConfirmNumber }) => {

    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const resetInputNandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!',
             'Number has to be a number between 1 and 99',
             [{text: 'Okay', style: 'destructive', onPress: resetInputNandler }])
            return;
        };
        console.log('Valid Number')
        onConfirmNumber(chosenNumber);
    }

  return (
   <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
    <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput style={styles.textInput} maxLength={2} keyboardType='number-pad'
         autoCapitalize='none' autoCorrect={false}
         value={enteredNumber} onChangeText={numberInputHandler} />

        <View style={styles.buttonsContainer}>

            <View style={styles.buttonContainer}>
                <PrimaryButton onPressBtn={resetInputNandler}>Reset</PrimaryButton> 
            </View>

            <View style={styles.buttonContainer}>
                <PrimaryButton onPressBtn={confirmInputHandler}>Confirm</PrimaryButton>
            </View>

        </View>
    </Card>
   </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    },
});