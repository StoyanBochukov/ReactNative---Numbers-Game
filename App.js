import { useState } from 'react';
import Colors from './constants/color';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const [userNumber, setUserNumber] = useState(null);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  }

  return (
    <LinearGradient colors={['#4e0329', Colors.accent500]} style={styles.screenWrapper}>
      <ImageBackground source={require('./assets/images/background.png')}
      resizeMode='cover' style={styles.screenWrapper} imageStyle={styles.backgroundImage} >
        <SafeAreaView style={styles.screenWrapper}>
        {userNumber ? <GameScreen userNumber={userNumber} /> : <StartGameScreen onConfirmNumber={pickedNumberHandler} /> }
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
  },
  backgroundImage: {
    opacity:0.15
  }
});
