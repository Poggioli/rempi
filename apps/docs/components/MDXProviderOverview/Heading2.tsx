import { styled } from "@rempi-ui/core";
import { Heading } from "@rempi-ui/heading";
import { FC } from "react";

const StyledHeadingLvl2 = styled.h2`
  margin: ${({ theme }) => theme.spaces[10]} 0 ${({ theme }) => theme.spaces[2]} 0;
  font-size: ${({ theme }) => theme.fontSizes[9]};
`;

export const Heading2: FC<any> = ({ ...props }) => {
  return (
    <StyledHeadingLvl2
      as={(props: any) => <Heading {...props} as="h2" />}
      {...props}
      variant="2"
      fontWeight="regular"
    />
  );
};
