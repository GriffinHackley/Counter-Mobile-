import React from 'react';

import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default class Number extends React.Component {
  styles = StyleSheet.create({
    number: {
      fontSize: 48,
      alignSelf: 'center',
      margin: 50,
    }
  });
    render() {
    return (
      <View style={[this.styles.number, this.props.Number]}>
        <Text style={[this.styles.number, this.props.numberStyle]}>{this.props.number}</Text>
      </View>
    );
  }
}
