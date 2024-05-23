import React from 'react';
import { StatusBar } from 'react-native';
import { store } from './src/store';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-native-toast-notifications'
import RootNavigation from './src/navigation';
export default function App(): React.JSX.Element{
  return (
    <Provider store={store}>
      <StatusBar />
      <ToastProvider>
        <RootNavigation />
      </ToastProvider>
    </Provider>
  )
}

