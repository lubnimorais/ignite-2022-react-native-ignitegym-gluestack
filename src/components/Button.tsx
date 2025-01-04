import { ComponentProps } from "react";

import { ButtonSpinner, Button as GlueStackButton, Text } from "@gluestack-ui/themed";

type IButtonProps = ComponentProps<typeof GlueStackButton> & {
  title: string;
  isLoading?: boolean
};

export function Button({ title, isLoading = false, ...rest }: IButtonProps) {
  return (
    <GlueStackButton 
      width="$full"
      height="$14"
      backgroundColor="$green700"
      borderWidth="$0"
      borderColor="$green500"
      rounded="$sm"
      $active-backgroundColor="$green500"
      disabled={isLoading}
      { ...rest }
    >
      {
        isLoading ?
          (<ButtonSpinner color="$white" />) :
          (<Text fontFamily="$heading" fontSize="$sm" color="$white">{title}</Text>)
      }
    </GlueStackButton>
  )
}