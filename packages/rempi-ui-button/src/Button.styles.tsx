import { css, RuleSet, styled } from "@rempi-ui/core";
import { Color, Shape, Size, Variant } from "./Button";

const isUpperCase = css`
  text-transform: uppercase;
`;

const containedAndSolidDisabled = css`
  background-color: ${(props) => props.theme.colors.grey3};
  color: ${(props) => props.theme.colors.grey8};

  * {
    color: ${(props) => props.theme.colors.grey8};
  }
`;

const outlinedDisabled = css`
  background-color: ${(props) => props.theme.colors.grey2};
  border-color: ${(props) => props.theme.colors.grey7};
  color: ${(props) => props.theme.colors.grey8};

  * {
    color: ${(props) => props.theme.colors.grey8};
  }
`;

const textDisabled = css`
  background-color: transparent;
  color: ${(props) => props.theme.colors.grey8};

  * {
    color: ${(props) => props.theme.colors.grey8};
  }
`;

const size: Record<Size, RuleSet<object>> = {
  small: css`
    padding: ${(props) => props.theme.spaces[1]}
      ${(props) => props.theme.spaces[2]};
    font-size: ${(props) => props.theme.fontSizes[3]};
  `,
  standard: css`
    padding: ${(props) => props.theme.spaces[2]}
      ${(props) => props.theme.spaces[4]};
  `,
  large: css`
    padding: ${(props) => props.theme.spaces[3]}
      ${(props) => props.theme.spaces[6]};
  `,
};

const shape: Record<Shape, RuleSet<object>> = {
  flat: css`
    border-radius: 0;
  `,
  smoth: css`
    border-radius: ${(props) => props.theme.radii[1]};
  `,
  rounded: css`
    border-radius: ${(props) => props.theme.radii.pill};
  `,
};

const primaryVariants: Record<Variant, RuleSet<object>> = {
  solid: css`
    background-color: ${(props) => props.theme.colors.primary9};
    color: ${(props) => props.theme.colors.grey1};

    * {
      color: ${(props) => props.theme.colors.grey1};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.primary10};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.primary11};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  contained: css`
    background-color: ${(props) => props.theme.colors.primary4};
    color: ${(props) => props.theme.colors.primary12};

    * {
      color: ${(props) => props.theme.colors.primary12};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.primary5};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.primary6};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  outlined: css`
    background-color: transparent;
    border-width: ${(props) => props.theme.borderWidths[1]};
    border-style: solid;
    border-color: ${(props) => props.theme.colors.primary7};
    color: ${(props) => props.theme.colors.primary11};

    * {
      color: ${(props) => props.theme.colors.primary11};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.primary4};
      border-color: ${(props) => props.theme.colors.primary8};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.primary5};
    }

    &:disabled {
      ${outlinedDisabled}
    }
  `,

  text: css`
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary12};

    * {
      color: ${(props) => props.theme.colors.primary12};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.primary4};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.primary5};
    }

    &:disabled {
      ${textDisabled}
    }
  `,
};

const secondaryVariants: Record<Variant, RuleSet<object>> = {
  solid: css`
    background-color: ${(props) => props.theme.colors.secondary9};
    color: ${(props) => props.theme.colors.grey1};

    * {
      color: ${(props) => props.theme.colors.grey1};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.secondary10};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.secondary11};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  contained: css`
    background-color: ${(props) => props.theme.colors.secondary4};
    color: ${(props) => props.theme.colors.secondary12};

    * {
      color: ${(props) => props.theme.colors.secondary12};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.secondary5};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.secondary6};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  outlined: css`
    background-color: transparent;
    border-width: ${(props) => props.theme.borderWidths[1]};
    border-style: solid;
    border-color: ${(props) => props.theme.colors.secondary7};
    color: ${(props) => props.theme.colors.secondary11};

    * {
      color: ${(props) => props.theme.colors.secondary11};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.secondary4};
      border-color: ${(props) => props.theme.colors.secondary8};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.secondary5};
    }

    &:disabled {
      ${outlinedDisabled}
    }
  `,

  text: css`
    background-color: transparent;
    color: ${(props) => props.theme.colors.secondary11};

    * {
      color: ${(props) => props.theme.colors.secondary11};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.secondary4};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.secondary5};
    }

    &:disabled {
      ${textDisabled}
    }
  `,
};

const successVariants: Record<Variant, RuleSet<object>> = {
  solid: css`
    background-color: ${(props) => props.theme.colors.success9};
    color: ${(props) => props.theme.colors.grey1};

    * {
      color: ${(props) => props.theme.colors.grey1};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.success10};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.success11};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  contained: css`
    background-color: ${(props) => props.theme.colors.success4};
    color: ${(props) => props.theme.colors.success12};

    * {
      color: ${(props) => props.theme.colors.success12};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.success5};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.success6};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  outlined: css`
    background-color: transparent;
    border-width: ${(props) => props.theme.borderWidths[1]};
    border-style: solid;
    border-color: ${(props) => props.theme.colors.success7};
    color: ${(props) => props.theme.colors.success11};

    * {
      color: ${(props) => props.theme.colors.success11};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.success4};
      border-color: ${(props) => props.theme.colors.success8};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.success5};
    }

    &:disabled {
      ${outlinedDisabled}
    }
  `,

  text: css`
    background-color: transparent;
    color: ${(props) => props.theme.colors.success11};

    * {
      color: ${(props) => props.theme.colors.success11};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.success4};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.success5};
    }

    &:disabled {
      ${textDisabled}
    }
  `,
};

const errorVariants: Record<Variant, RuleSet<object>> = {
  solid: css`
    background-color: ${(props) => props.theme.colors.error9};
    color: ${(props) => props.theme.colors.grey1};

    * {
      color: ${(props) => props.theme.colors.grey1};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.error10};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.error11};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  contained: css`
    background-color: ${(props) => props.theme.colors.error4};
    color: ${(props) => props.theme.colors.error12};

    * {
      color: ${(props) => props.theme.colors.error12};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.error5};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.error6};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  outlined: css`
    background-color: transparent;
    border-width: ${(props) => props.theme.borderWidths[1]};
    border-style: solid;
    border-color: ${(props) => props.theme.colors.error7};
    color: ${(props) => props.theme.colors.error11};

    * {
      color: ${(props) => props.theme.colors.error11};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.error4};
      border-color: ${(props) => props.theme.colors.error8};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.error5};
    }

    &:disabled {
      ${outlinedDisabled}
    }
  `,

  text: css`
    background-color: transparent;
    color: ${(props) => props.theme.colors.error11};

    * {
      color: ${(props) => props.theme.colors.error11};
    }

    &:hover:enabled {
      background-color: ${(props) => props.theme.colors.error4};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.error5};
    }

    &:disabled {
      ${textDisabled}
    }
  `,
};

const color: Record<Color, RuleSet<object & { $variant: Variant }>> = {
  primary: css<{ $variant: Variant }>`
    ${(props) => props.$variant && primaryVariants[props.$variant]}
  `,

  secondary: css<{ $variant: Variant }>`
    ${(props) => props.$variant && secondaryVariants[props.$variant]}
  `,

  success: css<{ $variant: Variant }>`
    ${(props) => props.$variant && successVariants[props.$variant]}
  `,

  error: css<{ $variant: Variant }>`
    ${(props) => props.$variant && errorVariants[props.$variant]}
  `,
};

export const StyledButton = styled.button<{
  $isUpperCase: boolean;
  $size: Size;
  $variant: Variant;
  $color: Color;
  $shape: Shape;
}>`
  -webkit-font-smoothing: antialiased;
  align-items: center;
  appearance: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  font-size: ${(props) => props.theme.fontSizes[4]};
  font-weight: ${(props) => props.theme.fontWeights[3]};
  justify-content: center;
  line-height: normal;
  min-width: ${(props) => props.theme.spaces[18]};
  outline: none;
  transition: background-color 200ms ease, color 200ms ease,
    border-color 200ms ease;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus-visible,
  &:focus {
    outline-color: ${(props) => props.theme.colors.info9};
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
  }

  ${(props) => props.$isUpperCase && isUpperCase}
  ${(props) => props.$size && size[props.$size]}
  ${(props) => props.$color && color[props.$color]}
  ${(props) => props.$shape && shape[props.$shape]}
`;

export const StyledIconButton = styled(StyledButton)<{
  $isUpperCase: boolean;
  $size: Size;
  $variant: Variant;
  $color: Color;
  $shape: Shape;
}>`
  min-width: inherit;
`;
