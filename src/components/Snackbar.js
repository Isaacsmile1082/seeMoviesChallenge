import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import i18n from 'i18n-js';

const SnackbarError = ({ error }) => {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const { error_code, error_message } = error;
  
  return (
    <View style={styles.container}>
      <Button color="white" onPress={onToggleSnackBar}>{visible ? i18n.t('hide') : i18n.t('snackError')}</Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: i18n.t('undo'),
          onPress: () => {
            // Do something
          },
        }}>
       { error || error_message ? error_message : null }
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default SnackbarError;