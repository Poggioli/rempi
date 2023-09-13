import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  RempiVariant,
  RuleSet,
  styled,
} from "@rempi-ui/core";
import { Size } from "./Input";

const size: Record<Size, RuleSet<object>> = {
  small: css`
    padding: ${({ theme }) => theme.spaces[1]} ${({ theme }) => theme.spaces[2]};
    font-size: ${({ theme }) => theme.fontSizes[3]};
  `,
  standard: css`
    padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[3]};
  `,
  large: css`
    padding: ${({ theme }) => theme.spaces[3]} ${({ theme }) => theme.spaces[6]}
      ${({ theme }) => theme.spaces[3]} ${({ theme }) => theme.spaces[3]};
  `,
};

export const StyledInput = styled.input<{ $size?: RempiVariant<Size> }>`
  -webkit-font-smoothing: antialiased;
  background-color: transparent;
  border-color: ${({ theme }) => theme.colors.grey11};
  border-radius: ${({ theme }) => theme.radii[1]};
  border-style: solid;
  border-width: ${({ theme }) => theme.borderWidths[1]};
  color: ${({ theme }) => theme.colors.grey12};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  max-width: calc(${({ theme }) => theme.spaces[18]} * 2);
  transition: background-color 200ms ease, color 200ms ease,
    border-color 200ms ease;
  width: 100%;

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.grey8};
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.grey7};

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey6};
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey9};
  }

  &:focus-visible,
  &:focus {
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
    border-color: ${({ theme }) => theme.colors.primary10};
    background-color: ${({ theme }) => theme.colors.primary3};
  }

  ${(props) => {
    const apply = (value: Size) => {
      return value && size[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$size
    );
  }};
`;
