import { useState } from 'react';
import Colors from './constants/color';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if(!fontsLoaded){
    return <AppLoading />
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  const gameOverHandler = () => {
    setGameIsOver(true);
  }
  let screen =  <StartGameScreen onConfirmNumber={pickedNumberHandler} />;
  if(userNumber){
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if(gameIsOver && userNumber){
    screen = (
      <GameOverScreen />
    )
  }

  return (
    <LinearGradient colors={['#4e0329', Colors.accent500]} style={styles.screenWrapper}>
      <ImageBackground source={require('./assets/images/background.png')}
      resizeMode='cover' style={styles.screenWrapper} imageStyle={styles.backgroundImage} >
        <SafeAreaView style={styles.screenWrapper}>
        {/* {userNumber ? <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
        : !userNumber ? <StartGameScreen onConfirmNumber={pickedNumberHandler} /> 
        : gameIsOver && userNumber ? <GameOverScreen /> : <StartGameScreen/>} */}
        {screen}
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
