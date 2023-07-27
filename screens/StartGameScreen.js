import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

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
    <View style={styles.inputContainer}>
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
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,    
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4,  //Androind Only
        shadowColor: 'black',  //iOS only
        shadowOffset: {width:5, height: 5},  //iOS only
        shadowRadius: 6,  //iOS only
        shadowOpacity: .5,  //iOS only
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    }
});