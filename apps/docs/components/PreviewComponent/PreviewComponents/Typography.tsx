import { Flex } from "@rempi-ui/Flex";
import { Typography } from "@rempi-ui/typography";
import { FC } from "react";

export const TypographyPreview: FC = () => {
  return (
    <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
      <Typography>Hello I'm a Typography</Typography>
    </Flex>
  );
};
