import { styled } from "@rempi-ui/core";
import { Typography } from "@rempi-ui/typography";
import { FC } from "react";

const StyledTypographyP = styled.p`
  margin: ${({ theme }) => theme.spaces[4]} 0;
`;

export const Description: FC<any> = ({ text, children, ...props }) => {
  return (
    <StyledTypographyP
      {...props}
      as={(props: any) => <Typography {...props} as="p" />}
      variant="lead1"
      color="low-contrast"
      fontWeight="normal"
    >
      {text}
    </StyledTypographyP>
  );
};
