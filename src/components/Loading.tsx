import { Center, Spinner } from "@gluestack-ui/themed";

export function Loading() {
  return (
    <Center flex={1} backgroundColor="$gray700">
      <Spinner color="$green500" size="large" />
    </Center>
  )
}