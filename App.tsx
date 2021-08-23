import React from 'react'
import { StyleSheet } from 'react-native'
import { AppNavigator } from './src/navigation/App';
import { Provider } from 'react-redux';
import rootReducer from './src/store/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
)

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
