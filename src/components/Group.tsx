import { ComponentProps } from "react";
 
import { Button, Text } from "@gluestack-ui/themed";


interface IGroupProps extends ComponentProps<typeof Button> {
  name: string;
  isActive: boolean;
}

export function Group({ name, isActive, ...rest }: IGroupProps) {
  return (
    <Button
      minWidth="$24"
      height="$10"
      marginRight="$3"
      backgroundColor="$gray600"
      rounded="$md"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      isPressed={isActive}
      borderWidth={isActive ? 1 : 0}
      borderColor="$green500"
      // UM PSEUDO-ELEMENTO IGUAL NA WEB
      sx={{
        ":active": {
          borderWidth: 1
        }
      }}
      {...rest}
    >
      <Text
        fontFamily="$heading"
        fontSize="$xs"
        color={isActive ? '$green500' : '$gray200'}
        textTransform="uppercase"
      >
        {name}
      </Text>
    </Button>
  );
}
