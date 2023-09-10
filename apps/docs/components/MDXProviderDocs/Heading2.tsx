import { styled } from "@rempi-ui/core";
import { Heading } from "@rempi-ui/heading";
import { FC } from "react";

const StyledHeadingLvl2 = styled.h2`
  border-bottom: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  margin: ${({ theme }) => theme.spaces[12]} 0 ${({ theme }) => theme.spaces[4]}
    0;
  padding-bottom: ${({ theme }) => theme.spaces[2]};
  font-size: ${({ theme }) => theme.fontSizes[10]};
`;

export const Heading2: FC<any> = ({ ...props }) => {
  return (
    <StyledHeadingLvl2
      as={(props: any) => <Heading {...props} as="h2" />}
      {...props}
      variant="2"
    />
  );
};
