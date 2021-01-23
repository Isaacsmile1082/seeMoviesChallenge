import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import Provider from './src/navigation/index';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { lenguages } from './config/i18n';
// Set the key-value pairs for the different languages you want to support.
i18n.translations = lenguages;
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default function App() {
  return (
    <PaperProvider>
        <Provider/>
    </PaperProvider>
  );
}
