import { TouchableOpacity } from 'react-native';

import { Heading, HStack, Icon, Text, VStack } from '@gluestack-ui/themed';

import { LogOut } from 'lucide-react-native';

// import { useAuth } from '@hooks/auth';

import defaultUserPhotoImg from '@assets/userPhotoDefault.png';

import { UserPhoto } from './UserPhoto';
// import { api } from '@services/api';

export function HomeHeader() {
  // const { user, signOut } = useAuth();

  return (
    <HStack
      alignItems="center"
      backgroundColor="$gray600"
      paddingTop="$16"
      paddingBottom="$5"
      px="$8"
      gap="$4"
    >
      {/* <UserPhoto
        w="$16"
        h="$16"
        source={
          user.avatar
            ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
            : defaultUserPhotoImg
        }
        alt="Imagem do usuário"
        marginRight={4}
      /> */}

      <VStack flex={1}>
        <Text fontSize="$sm" color="$gray100">
          Olá,
        </Text>

        <Heading fontFamily="$heading" fontSize="$md" color="$gray100">
          {/* {user.name} */}
        </Heading>
      </VStack>

      <TouchableOpacity activeOpacity={0.7}>
        <Icon as={LogOut} color="$gray200" size="xl" />
      </TouchableOpacity>
    </HStack>
  );
}
