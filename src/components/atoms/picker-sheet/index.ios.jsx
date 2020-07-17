import React, { useCallback } from 'react';
import { ActionSheetIOS, Button, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/native';
import propTypes from './prop-types';

const defaultStyle = css`
  justify-content: 'center';
`;

const PickerSheet = ({
  onValueChange,
  style = defaultStyle,
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
    <View style={style}>
      <Button onPress={changeOption} title={currentOption.label || currentOption.value} testID={testID} />
    </View>
  );
};

PickerSheet.propTypes = propTypes;
export default PickerSheet;
