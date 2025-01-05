import { ComponentProps } from "react";

import { ButtonSpinner, Button as GlueStackButton, Text } from "@gluestack-ui/themed";

type IButtonProps = ComponentProps<typeof GlueStackButton> & {
  title: string;
  variant?: 'solid' | 'outline';
  isLoading?: boolean
};

export function Button({ title, variant = 'solid', isLoading = false, ...rest }: IButtonProps) {
  return (
    <GlueStackButton 
      width="$full"
      height="$14"
      backgroundColor={variant === 'outline' ? 'transparent' : "$green700"}
      borderWidth={variant ? '$1' : "$0"}
      borderColor="$green500"
      rounded="$sm"
      $active-backgroundColor={variant === 'outline' ? '$gray500' :"$green500"}
      disabled={isLoading}
      { ...rest }
    >
      {
        isLoading ?
          (
            <ButtonSpinner color="$white" />
          ) : (
            <Text 
              fontFamily="$heading" 
              fontSize="$sm" 
              color={variant === 'outline' ? '$green500' : "$white"}
            >
              {title}
            </Text>
          )
      }
    </GlueStackButton>
  )
}