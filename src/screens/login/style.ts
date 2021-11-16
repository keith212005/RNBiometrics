import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
