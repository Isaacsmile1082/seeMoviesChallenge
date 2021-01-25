import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import Provider from './src/navigation/index';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { lenguages } from './config/i18n';

i18n.translations = lenguages;

i18n.locale = Localization.locale;

i18n.fallbacks = true;

export default function App() {
  return (
    <PaperProvider>
        <Provider/>
    </PaperProvider>
  );
}
