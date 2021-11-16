/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-fallthrough */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, Alert, Platform } from 'react-native';
import { Icon } from 'react-native-elements';

// THIRD PARTY IMPORTS
import { CustomInput, SquareButton } from '@components';
import TouchID from 'react-native-touch-id';

// LOCAL IMPORTS
import { fieldObject, IfieldObject } from '@constants';
import { styles } from './style';
import { resetNavigation } from 'navigator/RootNavigation';
import { colors } from '@resources';

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: colors.orange, // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: true, // iOS - allows the devicether
};

interface User {
  _key: string;
  username: IfieldObject;
  password: IfieldObject;
}

const LoginScreen = (props: any) => {
  var inputs = new Array(2);

  const [state, setState]: any = useState<User>({
    _key: '',
    username: fieldObject,
    password: fieldObject,
  });

  useEffect(() => {
    props.isOpenFirstTime('sdf');
  }, [props]);

  //handle of input box for check validation
  const checkValidation = (
    numbers: number,
    _key: string,
    _isFocus: boolean,
  ) => {
    var stateObject: any = {};
    const username = state.username.value;
    const password = state.password.value;
    return new Promise((resolve) => {
      stateObject[_key] = {
        ...state[_key],
        isFocus: _isFocus,
      };
      console.log(stateObject);

      switch (numbers) {
        case 2:
          if (ld.isEmpty(password)) {
            stateObject.password = {
              value: password,
              isError: true,
              errorText: loc('EMPTY_PASSWORD'),
              isFocus: false,
            };
          }
        case 1:
          if (ld.isEmpty(username)) {
            stateObject.username = {
              value: username,
              isError: true,
              errorText: loc('EMPTY_USERNAME'),
              isFocus: false,
            };
          }
        default:
          setState((prevState: any) => ({
            ...prevState,
            ...stateObject,
          }));
          resolve(true);
          break;
      }
    });
  };

  const handleChange = (value: unknown, key: string) => {
    setState({
      ...state,
      [key]: {
        value: value,
        isError: false,
        errorText: '',
        isFocus: true,
      },
    });
  };

  // hadnle onSubmitEditing method of input box
  const onSubmitEditing = (number: number) => {
    if (number < 1) {
      inputs[number + 1].focus();
    } else {
      // this.onLogin();
    }
  };

  const handleBiometicAuthentication = () => {
    console.log('biometric clicked...');
    TouchID.authenticate('Authenticate using', optionalConfigObject)
      .then((success: any) => goToHome())
      .catch((error: any) => {});
  };

  function goToHome() {
    resetNavigation('TabNavigator' as never);
  }

  const _renderInput = (index: number, key: string, extraProps = {}) => {
    /// <reference lib="es2017.string" />
    return (
      <CustomInput
        returnKeyType="done"
        label={loc(key)}
        placeholder={loc(key)}
        refName={(input: any) => (inputs[index] = input)}
        onFocus={() => checkValidation(index, key, true)}
        onBlur={() => {}}
        onEndEditing={() => checkValidation(index + 1, key, false)}
        onSubmitEditing={() => onSubmitEditing(index)}
        onChangeText={(val: string) => handleChange(val, key)}
        {...extraProps}
      />
    );
  };

  return (
    <View style={styles.container}>
      {_renderInput(0, 'username', { valueObject: state.username })}
      {_renderInput(1, 'password', { valueObject: state.password })}
      <SquareButton title="Login" onPress={() => goToHome()} />
      <Text style={{ textAlign: 'center', paddingTop: 30 }}>Login with </Text>
      <View>
        <Icon
          raised
          tvParallaxProperties={false}
          size={30}
          name={Platform.OS === 'ios' ? 'face-recognition' : 'fingerprint'}
          type="material-community"
          color={colors.orange}
          onPress={handleBiometicAuthentication}
          containerStyle={{ alignSelf: 'center' }}
        />
      </View>
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
export const Login = connects(mapStateToProps, mapDispatchToProps)(LoginScreen);
