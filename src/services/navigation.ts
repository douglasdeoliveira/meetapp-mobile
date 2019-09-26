import { NavigationActions } from 'react-navigation';

let navigator: any;

function setNavigator(ref: any) {
  navigator = ref;
}

function navigate(routeName: string, params?: any) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

export default {
  navigate,
  setNavigator,
};
