import * as React from 'react';
import { Text, View, StyleSheet, Button ,TouchableOpacity} from 'react-native';
import Voice from 'react-native-voice';
// import Constants from 'expo-constants';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    Voice.onSpeechResults = this.onSpeechResults

    Voice.onSpeechRecognized = this.onSpeechRecognized

  }
  onStartButtonPress=(e)=> {

    // console.log('sdsadsadsa')
    Voice.start('en-US');
  }


  _startRecognition =async (e)=> {
    
    try {
      await Voice.start('en-US');

      this.setState({
        started: '√',
      });

    } catch (e) {
      console.error(e);
    }
  }

  onSpeechResults=(e)=> {
    this.setState({
      results: e.value,
    });
  }

  onSpeechRecognized=(e)=> {
    this.setState({
      recognized: '√',
    });
  };


  render() {

    console.log("state app",this.state)
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.paragraph} onPress={this._startRecognition}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});