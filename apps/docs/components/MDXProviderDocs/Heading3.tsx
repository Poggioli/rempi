import { styled } from "@rempi-ui/core";
import { Heading } from "@rempi-ui/heading";
import { FC } from "react";

const StyledHeadingLvl3 = styled.h3`
  margin: ${({ theme }) => theme.spaces[8]} 0 0 0;
  font-size: ${({ theme }) => theme.fontSizes[7]};
`;

export const Heading3: FC<any> = ({ ...props }) => {
  return (
    <StyledHeadingLvl3
      as={(props: any) => <Heading {...props} as="h3" />}
      {...props}
      variant="3"
    />
  );
};
