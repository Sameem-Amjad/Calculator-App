
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const [result, setResult] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const off = () => {
    setResult('');
  };
  const resetOrON = () => {
    setResult(0);
  };
  const equal = () => {
    setResult(eval(result));
  };
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View
          style={{
            flex: 1,
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View
            style={{
              flex: 4 / 9,
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 50,
                alignSelf: 'flex-end',
                bottom: 0,
                right: 0,
                marginRight: 50,
                marginBottom: 20,
                borderRadius: 15,
                padding:5,
                backgroundColor: isDarkMode ? Colors.white : Colors.black,
                color: isDarkMode ? Colors.black : Colors.white,
              }}>
              {result}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <View style={styles.mainButtonView}>
              <TouchableOpacity style={styles.mainButtons} onPress={resetOrON}>
                <Text style={styles.mainButtonText}>AC</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.mainButtons} onPress={off}>
                <Text style={styles.mainButtonText}>Off</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mainButtons}
                onPress={() => setResult(result + '%')}>
                <Text style={styles.mainButtonText}>%</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationalButtons}
                onPress={() => setResult(result + '/')}>
                <Text style={styles.operationalText}>÷</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mainButtonView}>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => setResult(result + '7')}>
                <Text style={styles.buttonText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => setResult(result + '8')}>
                <Text style={styles.buttonText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => setResult(result + '9')}>
                <Text style={styles.buttonText}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationalButtons}
                onPress={() => setResult(result + '*')}>
                <Text style={styles.operationalText}>x</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mainButtonView}>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => setResult(result + '4')}>
                <Text style={styles.buttonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => setResult(result + '5')}>
                <Text style={styles.buttonText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => setResult(result + '6')}>
                <Text style={styles.buttonText}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationalButtons}
                onPress={() => setResult(result + '-')}>
                <Text style={styles.operationalText}>-</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mainButtonView}>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => setResult(result + '1')}>
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => setResult(result + '2')}>
                <Text style={styles.buttonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => setResult(result + '3')}>
                <Text style={styles.buttonText}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationalButtons}
                onPress={() => setResult(result + '+')}>
                <Text style={styles.operationalText}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mainButtonView}>
              <TouchableOpacity
                onPress={() => setResult(result + '0')}
                style={{
                  width: '50%',
                  height: '100%',
                  backgroundColor: '#404040',
                  borderRadius: 36,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    marginLeft: '10%',
                    color: App.isDarkMode ? Colors.black : Colors.white,
                    fontSize: 32,
                  }}>
                  0
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => setResult(result + '.')}>
                <Text style={styles.buttonText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.operationalButtons}
                onPress={equal}>
                <Text style={styles.operationalText}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  mainButtonView: {
    width: '80%',
    height: '13%',
    margin: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainButtons: {
    width: '22%',
    height: '100%',
    backgroundColor: '#c0c0c0',
    borderRadius: 36,
    justifyContent: 'center',
  },
  mainButtonText: {
    textAlign: 'center',
    color: App.isDarkMode ? Colors.white : Colors.black,
    fontSize: 32,
  },
  operationalButtons: {
    width: '22%',
    height: '100%',
    backgroundColor: '#f39a07',
    borderRadius: 36,
    justifyContent: 'center',
  },
  operationalText: {
    textAlign: 'center',
    color: App.isDarkMode ? Colors.black : Colors.white,
    fontSize: 42,
  },
  buttons: {
    width: '22%',
    height: '100%',
    backgroundColor: '#404040',
    borderRadius: 36,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: App.isDarkMode ? Colors.black : Colors.white,
    fontSize: 32,
  },
});

export default App;
