import { styled } from "@rempi-ui/core";
import { Typography } from "@rempi-ui/typography";
import { FC } from "react";

const StyledTypographyP = styled.p`
  margin: ${({ theme }) => theme.spaces[4]} 0;
`;

export const Paragraph: FC<any> = ({ ...props }) => {
  return (
    <StyledTypographyP
      as={(props: any) => <Typography {...props} as="p" />}
      {...props}
    />
  );
};
