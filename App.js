import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop: 30}}>
        <Text style={styles.paragraph}>ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ</Text>
        <Text style={styles.paragraph}>これでちょうど十文字これでちょうど十文字これでちょうど十文字これでちょうど十文字</Text>
        <Text style={styles.paragraph}>これでちょうど十文字これでちょうど十文字</Text>
        <Text style={styles.paragraph}>你好早上好你们好老师好你好早上好你们好老师好你好早上好你们好老师好</Text>
        <Text style={styles.paragraph}>你好早上好你们好老师好</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
  },
});

