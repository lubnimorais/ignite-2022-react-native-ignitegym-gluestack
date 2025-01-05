import { ComponentProps } from "react";

import { Image } from "@gluestack-ui/themed";


interface IUserPhotoProps extends ComponentProps<typeof Image> { }

export function UserPhoto({ ...rest }: IUserPhotoProps) {
  return (
    <Image
      {...rest}
      backgroundColor="$gray500"
      rounded="$full"
      borderWidth="$2"
      borderColor="$gray400"
      {...rest}
    />
  );
}
