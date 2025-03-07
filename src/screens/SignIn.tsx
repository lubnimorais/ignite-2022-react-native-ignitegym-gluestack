import { Center, Heading, Image, ScrollView, Text, VStack } from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";

import BackgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'

import { IAuthNavigatorRoutesProps } from '@routes/auth.routes'

import { Input } from "@components/Input";
import { Button } from "@components/Button";



export function SignInScreen() {
  const navigation = useNavigation<IAuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('signUpScreen')
  }

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }} 
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <VStack flex={1}>
        <Image
          w="$full"
          h={624}
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          position="absolute"
        />

        <VStack flex={1} paddingHorizontal="$10" paddingBottom="$16">
          <Center my="$24">
            <Logo />

            <Text fontSize="$sm" color="$gray100">Treine sua mente e seu corpo</Text>
          </Center>

          <Center gap="$2">
            <Heading color="$gray100">Acesse a conta</Heading>

            <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />

            <Input placeholder="Senha" secureTextEntry />

            <Button title="Acessar" />
          </Center>

          <Center flex={1} justifyContent="flex-end" marginTop="$4">
            <Text
              fontFamily="$body"
              fontSize="$sm"
              color="$gray100"
              marginBottom="$3"
            >
              Ainda não tem acesso?
            </Text>

            <Button title="Criar conta" variant="outline" onPress={handleNewAccount} />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  )
}