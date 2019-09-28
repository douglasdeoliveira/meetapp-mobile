import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Header from '~/components/Header';
import Meetups from '~/screens/Meetups';
import Profile from '~/screens/Profile';
import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';
import Subscriptions from '~/screens/Subscriptions';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createStackNavigator(
          {
            Container: createBottomTabNavigator(
              {
                Meetups,
                Subscriptions,
                Profile,
              },
              {
                tabBarOptions: {
                  keyboardHidesTabBar: true,
                  activeTintColor: '#fff',
                  inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                  style: {
                    backgroundColor: '#2B1A2F',
                    borderTopWidth: 0,
                  },
                },
              },
            ),
          },
          {
            defaultNavigationOptions: () => ({
              headerTransparent: true,
              headerTitle: () => <Header />,
            }),
          },
        ),
      },
      { initialRouteName: isSigned ? 'App' : 'Sign' },
    ),
  );
