import React from 'react';
import { YellowBox } from 'react-native';
import { useSelector } from 'react-redux';

import createRouter from './routes';
import NavigationService from './services/navigation';
import { ApplicationState } from './store';

export default function App() {
  YellowBox.ignoreWarnings(['Warning: componentWillMount is deprecated']);
  const signed = useSelector((state: ApplicationState) => state.auth.signed);

  const Routes = createRouter(signed);

  return (
    <Routes
      ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
    />
  );
}
