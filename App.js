import { useState } from 'react';
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
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.screenWrapper}>
      <ImageBackground source={require('./assets/images/background.png')}
      resizeMode='cover' style={styles.screenWrapper} imageStyle={styles.backgroundImage} >
        <SafeAreaView style={styles.screenWrapper}>
        {userNumber ? <GameScreen /> : <StartGameScreen onConfirmNumber={pickedNumberHandler} /> }
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
