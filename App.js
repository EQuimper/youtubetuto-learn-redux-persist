import React from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist'

import store from './src/store';
import Main from './src/Main';

export default class App extends React.Component {
  state = {
    isReady: false
  }

  componentDidMount() {
    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: ['user', 'counter']
      },
      () => {
        this.setState({ isReady: true })
      }
    )
  }


  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
