import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { gluestackUIConfig } from '../../config/gluestack-ui.config'

// import { useAuth } from '@hooks/auth';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

import { Loading } from '@components/Loading';
import { Box } from '@gluestack-ui/themed';

export function Routes() {
  // const { user, isLoadingUserStorageData } = useAuth();

  const theme = DefaultTheme;
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700

  // if (isLoadingUserStorageData) {
  //   return <Loading />;
  // }

  return (
    <Box flex={1} backgroundColor="gray.700">
      <NavigationContainer theme={theme}>
        <AppRoutes />
        {/* {user.id ? <AppRoutes /> : <AuthRoutes />} */}
      </NavigationContainer>
    </Box>
  );
}
