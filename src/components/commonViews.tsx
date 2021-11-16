import React from 'react';
import { Image } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';

export const RenderIcon = (
  name: string,
  type: string,
  size?: number,
  extraProps?: object,
) => {
  return <Icon name={name} type={type} size={size} {...extraProps} />;
};

export const RenderImage = (uri: string, size: number, extraStyle?: object) => {
  return (
    <Image
      source={{ uri: uri }}
      style={{
        ...extraStyle,
      }}
    />
  );
};

export const renderAvatar = (url: string, size: number, extraProps: object) => {
  return (
    <Avatar
      activeOpacity={0.2}
      containerStyle={{ backgroundColor: '#BDBDBD' }}
      rounded
      size={size}
      source={{ uri: url }}
      title="AP"
      {...extraProps}
    />
  );
};

// antdesign
// entypo
// evilicon
// feather
// font-awesome
// font-awesome-5
// fontisto
// foundation
// ionicon
// material
// material-community
// octicon
// simple-line-icon
// zocial
