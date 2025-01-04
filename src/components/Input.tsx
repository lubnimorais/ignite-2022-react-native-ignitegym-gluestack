import { ComponentProps } from "react";

import { Input as GlueStackInput, InputField } from "@gluestack-ui/themed";

type IInputProps = ComponentProps<typeof InputField>;

export function Input({ ...rest }: IInputProps) {
  return (
    <GlueStackInput 
      height="$14" 
      backgroundColor="$gray700" 
      paddingHorizontal="$4" 
      borderWidth="$0" 
      borderRadius="$md"
      $focus={{
        borderWidth: 1,
        borderColor: '$green500'
      }}
    > 
      <InputField
        fontFamily="$body"
        color="$white"
        placeholderTextColor="$gray300"
        {...rest}
      />
    </GlueStackInput>
  )
}