import { Center, Heading, Image, ScrollView, Text, VStack } from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";

import BackgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'

import { IAuthNavigatorRoutesProps } from "@routes/auth.routes";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUpScreen() {
  const navigation = useNavigation<IAuthNavigatorRoutesProps>()

  function handleGoBack() {
    navigation.goBack()
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

          <Center flex={1} gap="$2">
            <Heading color="$gray100">Crie sua conta</Heading>

            <Input placeholder="Nome" />

            <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />

            <Input placeholder="Senha" secureTextEntry />

            <Button title="Criar e acessar" />
          </Center>

            <Button 
              title="Voltar para o login" 
              variant="outline" 
              marginTop="$12"
              onPress={handleGoBack}
            />
        </VStack>
      </VStack>
    </ScrollView>
  )
}