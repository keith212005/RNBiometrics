import * as React from 'react';

// THIRD PARTY IMPORTS
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-dynamic-vector-icons';

// LOCAL IMPORTS
import { SCREENS } from '@constants';
import * as Screen from '@screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const _addScreen = (
    routeName: keyof typeof SCREENS,
    isNavigator?: boolean,
    extraProps?: any,
  ) => {
    return (
      <Tab.Screen
        name={routeName}
        component={!isNavigator ? Screen[routeName] : routeName}
        {...extraProps}
      />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';
          if (route.name === SCREENS.Home) {
            iconName = focused ? 'home' : 'home-outline';
          }
          return (
            <Icon
              name={iconName}
              type="Ionicons"
              size={size}
              color={focused ? '#5931ff' : color}
            />
          );
        },
      })}
    >
      {_addScreen('Home' as never)}
    </Tab.Navigator>
  );
};

export default TabNavigator;
