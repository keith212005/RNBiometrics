import React from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@react-navigation/native';
import { fonts, fontSiz } from './fonts';

export type Style = {
  textStyle: (
    fontSize: keyof typeof fontSiz,
    color: string,
    fontFamily: keyof typeof fonts,
  ) => object;
  layoutDirection: (
    direction: string,
    justifyContent: string,
    alignItems: string,
  ) => object;
  squareLayout: (size: number) => object;
};

type CreateStyles = <T extends any>(styles: T) => T;

export const createStyles: CreateStyles = StyleSheet.create;

const getGlobalStyles = (props: { colors: any }) =>
  createStyles<Style>({
    textStyle: (fontSize, color, fontFamily) => {
      return {
        fontSize: fontSiz[fontSize],
        color: props.colors[color],
        fontFamily: fonts[fontFamily],
      };
    },
    layoutDirection: (direction, justifyContent, alignItems) => {
      return {
        flexDirection: direction,
        alignItems: alignItems,
        justifyContent: justifyContent,
      };
    },
    squareLayout: (size) => {
      return {
        width: size,
        aspectRatio: 1,
      };
    },
  });

// This is an example of custom Hook
export function useGlobalStyles() {
  const { colors } = useTheme();
  // We only want to recompute the stylesheet on changes in color.
  const styles = React.useMemo(() => getGlobalStyles({ colors }), [colors]);
  return styles;
}
