import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  RempiVariant,
  RuleSet,
  styled,
} from "@rempi-ui/core";
import { Variant } from "./Badge";

const variant: Record<Variant, RuleSet<object>> = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary9};
    border: ${({ theme }) => theme.borderWidths[1]} solid
      ${({ theme }) => theme.colors.primary9};
    color: ${({ theme }) => theme.colors.primary1};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary11};
      border-color: ${({ theme }) => theme.colors.primary11};
      cursor: text;
    }
  `,

  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary9};
    border: ${({ theme }) => theme.borderWidths[1]} solid
      ${({ theme }) => theme.colors.secondary9};
    color: ${({ theme }) => theme.colors.secondary1};

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary11};
      border-color: ${({ theme }) => theme.colors.secondary11};
      cursor: text;
    }
  `,

  destructive: css`
    background-color: ${({ theme }) => theme.colors.error9};
    border: ${({ theme }) => theme.borderWidths[1]} solid
      ${({ theme }) => theme.colors.error9};
    color: ${({ theme }) => theme.colors.error1};

    &:hover {
      background-color: ${({ theme }) => theme.colors.error11};
      border-color: ${({ theme }) => theme.colors.error11};
      cursor: text;
    }
  `,

  outlined: css`
    background-color: transparent;
    border: ${({ theme }) => theme.borderWidths[1]} solid
      ${({ theme }) => theme.colors.grey9};
    color: ${({ theme }) => theme.colors.grey12};
  `,
};

export const StyledBadge = styled.div<{
  $variant?: RempiVariant<Variant>;
}>`
  -webkit-font-smoothing: antialiased;
  align-items: center;
  appearance: none;
  border: none;
  border-radius: ${({ theme }) => theme.radii[1]};
  display: inline-flex;
  flex-direction: row;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  gap: ${({ theme }) => theme.spaces[2]};
  justify-content: center;
  letter-spacing: 10%;
  line-height: ${({ theme }) => theme.lineHeights[1]};
  outline: none;
  padding: ${({ theme }) => theme.spaces[1]} ${({ theme }) => theme.spaces[2]};
  transition: background-color 200ms ease, color 200ms ease,
    border-color 200ms ease;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:focus-visible,
  &:focus {
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
  }

  ${(props) => {
    const apply = (value: Variant) => {
      return value && variant[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$variant
    );
  }}
`;
