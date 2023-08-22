import { styled } from "@rempi-ui/core";
import { FC } from "react";

const StyledPre = styled.pre`
  background-color: ${({ theme }) => theme.colors.grey3};
  border: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  border-radius: ${({ theme }) => theme.radii[2]};
  margin: ${({ theme }) => theme.spaces[4]} 0;
  overflow-x: auto;
  padding: ${({ theme }) => theme.spaces[4]};
`;

export const Pre: FC = ({ ...props }) => {
  return <StyledPre {...props} />;
};
