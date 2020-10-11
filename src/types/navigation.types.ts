export enum NavigationRoutes {
  HOME = 'Home',
  COMPONENT = 'Components',
  LIST = 'List',
  IMAGE = 'Image'
}

export type RootStackParamList = {
  [NavigationRoutes.HOME]: undefined;
  [NavigationRoutes.COMPONENT]: undefined;
  [NavigationRoutes.LIST]: undefined;
  [NavigationRoutes.IMAGE]: undefined;
};
