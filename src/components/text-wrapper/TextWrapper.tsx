import React from 'react';
import RNText, { IRNTextProps } from '@freakycoder/react-native-custom-text';
/**
 * ? Local Imports
 */
import { fonts } from '@resources';

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily = fonts.PROXIMANOVA_REGULAR,
  color = '#757575',
  children,
  ...rest
}) => {
  return (
    <RNText fontFamily={fontFamily} color={color} {...rest}>
      {children}
    </RNText>
  );
};

export default TextWrapper;
