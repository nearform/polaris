import React, { useCallback } from 'react';
import { ActionSheetIOS, Button, StyleSheet, View } from 'react-native';
import propTypes from './prop-types';
import { useTranslation } from 'react-i18next';

const PickerSheet = ({
  onValueChange,
  styles = defaultStyles,
  currentOption,
  testID,
  cancelLabel = 'cancel',
  options
}) => {
  const { t } = useTranslation();
  const translatedCancelLabel = t(cancelLabel);

  const changeOption = useCallback(() => {
    const optionLabels = options.map(option => option.label);

    return ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [translatedCancelLabel, ...optionLabels],
        cancelButtonIndex: 0
      },
      buttonIndex => {
        if (buttonIndex > 0) {
          onValueChange(options[buttonIndex - 1].value);
        }
      }
    );
  }, [translatedCancelLabel, options, onValueChange]);

  return (
    <View style={styles.container}>
      <Button onPress={changeOption} title={currentOption.label || currentOption.value} testID={testID} />
    </View>
  );
};

PickerSheet.propTypes = propTypes;
export default PickerSheet;

const defaultStyles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  }
});
