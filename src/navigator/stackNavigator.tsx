import React, { useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import '../../typings/globals';

// THIRD PARTY IMPORTS
import { createStackNavigator } from '@react-navigation/stack';
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

// LOCAL IMPORTS
import { navigationRef } from './RootNavigation';
import { colors } from '@resources';
import { SCREENS } from '@constants';
import * as Screen from '@screens';
import TabNavigator from './tabNavigator';
import { changeLanguage } from '@languages';
import { actionCreators } from '../actions';

const Stack = createStackNavigator();

const forFade = ({ current }: { current: any }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...colors,
  },
};

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};

const App = (props: any) => {
  changeLanguage('es');

  const _addScreen = (
    routeName: keyof typeof SCREENS,
    isNavigator?: boolean,
    extraProps?: any,
  ) => {
    return (
      <Stack.Screen
        name={routeName}
        component={!isNavigator ? Screen[routeName] : routeName}
        {...extraProps}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <NavigationContainer
          ref={navigationRef}
          theme={props.isDarkTheme ? MyDarkTheme : LightTheme}
        >
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
              cardStyleInterpolator: forFade,
            }}
          >
            {_addScreen('Splash' as never)}
            {_addScreen('Login' as never)}
            {_addScreen('TabNavigator' as never, true, {
              component: TabNavigator,
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </View>
  );
};

// export default AppContainer;

function mapStateToProps(state: any) {
  console.log('state>>>>', state);
  return { isOnline: state.isOnline };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return bindActionCreators(actionCreators, dispatch);
}

//Connect everything
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
