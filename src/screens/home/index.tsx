/* eslint-disable no-undef */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

// THIRD PARTY IMPORTS
import { useTheme } from '@react-navigation/native';

// LOCAL IMPORTS
import styles from './style';
import { Text } from '@components';
import { navigate } from 'navigator/RootNavigation';

const HomeScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text h1> HomeScreen </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigate('Login' as never)}
      >
        <Text color={colors.text}>Go To Detail Screen</Text>
      </TouchableOpacity>
      <Text h5 />
    </View>
  );
};

function mapStateToProps(_state: any) {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const Home = connects(mapStateToProps, mapDispatchToProps)(HomeScreen);
