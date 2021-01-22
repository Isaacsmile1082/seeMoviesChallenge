import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import Provider from './src/navigation/index';


export default function App() {
  return (
    <PaperProvider>
        <Provider/>
    </PaperProvider>
  );
}
