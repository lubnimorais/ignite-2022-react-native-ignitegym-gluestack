import { useState } from "react";

import { FlatList } from "react-native";

import { Center, Heading, HStack, VStack, Text } from "@gluestack-ui/themed";

import { IExerciseDTO } from "@dtos/ExerciseDTO";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { ExerciseCard } from "@components/ExerciseCard";

export function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  const [groupSelected, setGroupSelected] = useState('');
  const [exercises, setExercises] = useState<IExerciseDTO[]>([]);

  return (
    <Center flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{
          minHeight: 44,
          maxHeight: 44,
          marginVertical: 40,
        }}
        renderItem={({ item: group }) => (
          <Group
            name={group}
            isActive={
              groupSelected.toLocaleUpperCase() === group.toLocaleUpperCase()
            }
            onPress={() => {
              setGroupSelected(group);
            }}
          />
        )}
      />

      <VStack flex={1} px={8}>
        <HStack alignItems="center" justifyContent="space-between" marginBottom="$5">
          <Heading fontFamily="$heading" fontSize="$md" color="$gray200">
            Exercícios
          </Heading>

          <Text fontFamily="$body" fontSize="$sm" color="$gray200" >
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item: exercise }) => (
            <ExerciseCard
            //   exercise={exercise}
            //   onPress={() => {
            //     handleOpenExerciseDetails(exercise.id);
            //   }}
            />
          )}
        />

        
      </VStack>
    </Center>
  )
}