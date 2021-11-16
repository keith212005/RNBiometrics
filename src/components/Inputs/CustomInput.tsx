/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react';
import { StyleSheet, TextInput, TextInputProps, Text } from 'react-native';

import { IfieldObject } from '@constants';
import { useTheme } from '@react-navigation/native';
import { useGlobalStyles } from '@resources';

interface Props extends TextInputProps {
  label?: string;
  refName?: any;
  valueObject?: IfieldObject;
}

const CustomInput: React.FC<Props> = (props: Props) => {
  const globalStyle = useGlobalStyles();
  const { colors } = useTheme();

  useEffect(() => {
    console.log('useEffect called....');
  }, []);

  return (
    <>
      {props.label && (
        <Text
          style={globalStyle.textStyle(
            '_14',
            'textPrimaryColor',
            'PROXIMANOVA_SEMIBOLD',
          )}
        >
          {props.label}
        </Text>
      )}
      <TextInput
        {...props}
        ref={props.refName}
        style={[
          styles.input,
          {
            borderColor:
              props.valueObject && props.valueObject.isError
                ? colors.hot_red
                : props.valueObject && props.valueObject.isFocus
                ? colors.primaryColor
                : colors.unfocusBorder,
          },
        ]}
      />
      <Text
        style={[
          globalStyle.textStyle('_14', 'hot_red', 'PROXIMANOVA_SEMIBOLD'),
        ]}
      >
        {props.valueObject && props.valueObject.isError
          ? props.valueObject.errorText
          : ''}
      </Text>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
