import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { downCounter, upCounter } from './actions/counter';
import { login } from './actions/user';

class Main extends Component {
  state = {
    username: '',
  };

  _onUsernameChange = username => this.setState({ username });

  _onIncrementPress = () => this.props.upCounter();

  _onDecrementPress = () => this.props.downCounter();

  _onLoginPress = () => this.props.login({ username: this.state.username });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Learn to use Redux-Persist!!!</Text>

        <View style={styles.form}>
          <FormLabel>Username</FormLabel>
          <FormInput
            value={this.state.username}
            onChangeText={this._onUsernameChange}
          />
          <Button onPress={this._onLoginPress} title="Login" />

          <Text>Logged ?: {this.props.user.isLogged.toString()}</Text>
          <Text>Username ?: {this.props.user.info ? this.props.user.info.username : ''}</Text>
        </View>

        <View style={styles.counterWrapper}>
          <Text>
            The count is:{' '}
            <Text style={styles.countText}>{this.props.counter}</Text>
          </Text>
          <Button
            onPress={this._onIncrementPress}
            title="Increment"
            backgroundColor="blue"
          />
          <Button
            onPress={this._onDecrementPress}
            title="Decrememt"
            backgroundColor="red"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  counterWrapper: {
    marginTop: 50,
    justifyContent: 'space-around',
    flex: 1,
  },
  title: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  countText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default connect(
  state => ({
    user: state.user,
    counter: state.counter,
  }),
  { downCounter, upCounter, login },
)(Main);
