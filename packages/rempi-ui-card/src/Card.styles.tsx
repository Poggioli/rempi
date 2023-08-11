import { css, styled } from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
import { Typography } from "@rempi-ui/typography";

export const StyledCardRoot = styled(Flex)<{ $bordered?: boolean }>`
  background-color: ${(props) => props.theme.colors.grey3};
  border-radius: ${(props) => props.theme.radii[2]};

  ${(props) =>
    props.$bordered &&
    css`
      border-color: ${(props) => props.theme.colors.grey6};
      border-style: solid;
      border-width: ${(props) => props.theme.borderWidths[1]};
    `}
`;

export const StyledCardHeader = styled(Flex)`
  gap: ${(props) => props.theme.spaces[1]};
  padding: ${(props) => props.theme.spaces[5]};
  width: 100%;
`;

// ToDo
export const StyledCardTitle = styled(Heading)``;

export const StyledCardContent = styled(Flex)`
  gap: ${(props) => props.theme.spaces[6]};
  padding: ${(props) => props.theme.spaces[5]};
  padding-top: 0;
  width: 100%;
`;

export const StyledCardFooter = styled(Flex)`
  padding: ${(props) => props.theme.spaces[5]};
  padding-top: 0;
  width: 100%;
  gap: ${(props) => props.theme.spaces[5]};
`;
