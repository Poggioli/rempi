import { styled } from "@rempi-ui/core";
import { Typography } from "@rempi-ui/typography";
import { FC } from "react";

const StyledTypographyP = styled.p`
  margin: ${({ theme }) => theme.spaces[4]} 0;

  a,
  a:visited {
    color: ${({ theme }) => theme.colors.info10};
    font-weight: ${({ theme }) => theme.fontWeights[2]};
  }
`;

export const Paragraph: FC<any> = ({ ...props }) => {
  return (
    <StyledTypographyP
      as={(props: any) => <Typography {...props} as="p" />}
      {...props}
      fontWeight="tiny"
    />
  );
};
