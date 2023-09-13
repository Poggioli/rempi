import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  RempiVariant,
  styled,
} from "@rempi-ui/core";

export const StyledCardHeader = styled.div`
  gap: ${({ theme }) => theme.spaces[1]};
  padding: ${({ theme }) => theme.spaces[5]};
  width: 100%;
`;

export const StyledCardContent = styled.div`
  gap: ${({ theme }) => theme.spaces[6]};
  padding: ${({ theme }) => theme.spaces[5]};
  padding-top: 0;
  width: 100%;
`;

export const StyledCardFooter = styled.div`
  padding: ${({ theme }) => theme.spaces[5]};
  padding-top: 0;
  width: 100%;
  gap: ${({ theme }) => theme.spaces[5]};
`;

export const StyledCardRoot = styled.div<{
  $bordered?: RempiVariant<boolean>;
  $colored?: RempiVariant<boolean>;
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
