export enum NavigationRoutes {
  HOME = 'Home',
  COMPONENT = 'Component',
  LIST = 'List'
}

export type RootStackParamList = {
  [NavigationRoutes.HOME]: undefined;
  [NavigationRoutes.COMPONENT]: undefined;
  [NavigationRoutes.LIST]: undefined;
};
