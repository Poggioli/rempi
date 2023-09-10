import { Card } from "@rempi-ui/card";
import { styled } from "@rempi-ui/core";
import { Typography } from "@rempi-ui/typography";
import { FC } from "react";

const StyledNPS = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  color: ${({ theme }) => theme.colors.success11};
`;

const StyledCardRoot = styled.div`
  width: 100%;
`;

export const DashboardNPS: FC = () => {
  return (
    <StyledCardRoot as={Card.Root}>
      <Card.Header>
        <Card.Title>NPS</Card.Title>
      </Card.Header>
      <Card.Content justifyContent="center">
        <Typography fontSize="xlg" fontWeight="semi-bold">
          <StyledNPS>83</StyledNPS>
          /100
        </Typography>
      </Card.Content>
    </StyledCardRoot>
  );
};
