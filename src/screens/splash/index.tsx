/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import * as React from 'react';
import { View } from 'react-native';

// LOCAL IMPORTS
import { styles } from './style';
import { navigate } from 'navigator/RootNavigation';
import { images } from '@resources';
import { RenderImage } from '@components';

const Splashs = (props: any) => {
  React.useEffect(() => {
    props.networkListener();
    props.setDarkTheme(false);
    props.setAppLanguage('es');
    setTimeout(() => {
      return navigate('Login' as never);
    }, 2000);
  }, [props]);

  return (
    <View style={styles.container}>{RenderImage(images.splash, 1000)}</View>
  );
};

export default Splash;

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return BindActionCreators(ActionCreators, dispatch);
}

//Connect everything
export const Splash = connects(mapStateToProps, mapDispatchToProps)(Splashs);
