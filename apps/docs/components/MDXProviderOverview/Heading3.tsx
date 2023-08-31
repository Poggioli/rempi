import { styled } from "@rempi-ui/core";
import { Heading } from "@rempi-ui/heading";
import { FC } from "react";

const StyledHeadingLvl3 = styled.h3`
  margin: ${({ theme }) => theme.spaces[10]} 0 ${({ theme }) => theme.spaces[2]}
    0;
  font-size: ${({ theme }) => theme.fontSizes[6]};

  &+p {
    margin-top: ${({ theme }) => theme.spaces[2]};
  }
`;

export const Heading3: FC<any> = ({ ...props }) => {
  return (
    <StyledHeadingLvl3
      as={(props: any) => <Heading {...props} as="h3" />}
      {...props}
      variant="3"
      fontWeight="semi-bold"
    />
  );
};
