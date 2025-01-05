import { Platform } from 'react-native';

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

import { gluestackUIConfig } from '../../config/gluestack-ui.config';


import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';


import { HomeScreen } from '@screens/Home';
import { ExerciseScreen } from '@screens/Exercise';
import { HistoryScreen } from '@screens/History';
import { ProfileScreen } from '@screens/Profile';

type IAppRoutes = {
  homeScreen: undefined;
  historyScreen: undefined;
  profileScreen: undefined;
  exerciseScreen: { exerciseId: string };
};

export type IAppNavigatorRoutesProps = BottomTabNavigationProp<IAppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<IAppRoutes>();

export function AppRoutes() {
  const { tokens } = gluestackUIConfig;

  /**
   * Queremos utilizar o mesmo tamanho de altura e largura
   * para todos os ícones
   */
  const iconSize = tokens.space["6"];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.colors.green500,
        tabBarInactiveTintColor: tokens.colors.gray200,
        tabBarStyle: {
          height: Platform.OS === 'android' ? 'auto' : 96,
          backgroundColor: tokens.colors.gray600,
          borderTopWidth: 0,
          paddingTop: tokens.space["6"],
          paddingBottom: tokens.space["10"],
        },
      }}
    >
      <Screen
        name="homeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="historyScreen"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="profileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="exerciseScreen"
        component={ExerciseScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}
