import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Heading, HStack, Image, VStack, Text } from "@gluestack-ui/themed";

import { ChevronRight } from 'lucide-react-native'
import { Icon } from "@gluestack-ui/themed";


type IExerciseCardProps = TouchableOpacityProps

export function ExerciseCard({ ...rest }: IExerciseCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        backgroundColor="$gray500"
        alignItems="center"
        marginBottom="$3"
        padding="$2"
        paddingRight="$4"
        rounded="$2"
      >
        <Image
          w="$16"
          h="$16"
          source={{ uri: "https/github.com/lubnimorais.png" }} alt="Imagem do exercício"
          rounded="$md"
          marginRight="$4"
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontFamily="$heading" fontSize="$lg" color="$white">
            Puxada frontal
          </Heading>

          <Text fontSize="$sm" color="$gray200" marginTop="$1" numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  )
}