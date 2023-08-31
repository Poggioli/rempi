import { styled } from "@rempi-ui/core";
import { Heading } from "@rempi-ui/heading";
import { FC } from "react";

const StyledHeadingLvl1 = styled.div`
  margin: 0 0 ${({ theme }) => theme.spaces[3]} 0;
`;

export const Heading1: FC<any> = ({ ...props }) => {
  return (
    <StyledHeadingLvl1 as={Heading} {...props} variant="1" fontWeight="semi-bold" />
  );
};
