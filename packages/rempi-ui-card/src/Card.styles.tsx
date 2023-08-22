import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  styled,
} from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";

export const StyledCardRoot = styled(Flex)<{
  $bordered?: boolean;
  $colored?: boolean;
}>`
  border-radius: ${({ theme }) => theme.radii[2]};

  ${(props) => {
    const apply = (value: boolean) => {
      return (
        value &&
        css`
          background-color: ${({ theme }) => theme.colors.grey3};
        `
      );
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$colored
    );
  }}

  ${(props) => {
    const apply = (value: boolean) => {
      return (
        value &&
        css`
          border-color: ${({ theme }) => theme.colors.grey6};
          border-style: solid;
          border-width: ${({ theme }) => theme.borderWidths[1]};
        `
      );
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$bordered
    );
  }}
`;

export const StyledCardHeader = styled(Flex)`
  gap: ${({ theme }) => theme.spaces[1]};
  padding: ${({ theme }) => theme.spaces[5]};
  width: 100%;
`;

export const StyledCardContent = styled(Flex)`
  gap: ${({ theme }) => theme.spaces[6]};
  padding: ${({ theme }) => theme.spaces[5]};
  padding-top: 0;
  width: 100%;
`;

export const StyledCardFooter = styled(Flex)`
  padding: ${({ theme }) => theme.spaces[5]};
  padding-top: 0;
  width: 100%;
  gap: ${({ theme }) => theme.spaces[5]};
`;
