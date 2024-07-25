import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<any>();

export function getNavigationRef() {
  if (navigationRef.isReady()) {
    return navigationRef;
  }
  return null;
}
