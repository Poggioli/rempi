import { css, RuleSet, styled } from "@rempi-ui/core";
import { Size } from "./Input";

const size: Record<Size, RuleSet<object>> = {
  small: css`
    padding: ${(props) => props.theme.spaces[1]}
      ${(props) => props.theme.spaces[2]};
    font-size: ${(props) => props.theme.fontSizes[3]};
  `,
  standard: css`
    padding: ${(props) => props.theme.spaces[2]}
      ${(props) => props.theme.spaces[3]};
  `,
  large: css`
    padding: ${(props) => props.theme.spaces[3]}
      ${(props) => props.theme.spaces[6]} ${(props) => props.theme.spaces[3]}
      ${(props) => props.theme.spaces[3]};
  `,
};

export const StyledInput = styled.input<{ $size?: Size }>`
  -webkit-font-smoothing: antialiased;
  background-color: transparent;
  border-color: ${(props) => props.theme.colors.grey11};
  border-radius: ${(props) => props.theme.radii[1]};
  border-style: solid;
  border-width: ${(props) => props.theme.borderWidths[1]};
  color: ${(props) => props.theme.colors.grey12};
  font-size: ${(props) => props.theme.fontSizes[4]};
  font-weight: ${(props) => props.theme.fontWeights[3]};
  line-height: ${(props) => props.theme.lineHeights[1]};
  max-width: calc(${(props) => props.theme.spaces[18]} * 2);
  transition: background-color 200ms ease, color 200ms ease,
    border-color 200ms ease;
  width: 100%;

  &[data-disabled] {
    color: ${(props) => props.theme.colors.grey8};
    cursor: not-allowed;
    border-color: ${(props) => props.theme.colors.grey7};

    &::placeholder {
      color: ${(props) => props.theme.colors.grey6};
    }
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.grey9};
  }

  &:focus-visible,
  &:focus {
    outline-color: ${(props) => props.theme.colors.info9};
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
    border-color: ${(props) => props.theme.colors.primary10};
    background-color: ${(props) => props.theme.colors.primary3};
  }

  ${(props) => props.$size && size[props.$size]}
`;
