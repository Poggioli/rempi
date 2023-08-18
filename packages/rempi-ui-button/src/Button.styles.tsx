import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  RempiVariant,
  RuleSet,
  styled,
} from "@rempi-ui/core";
import { Color, Shape, Size, Variant } from "./Button";

const isUpperCase = css`
  text-transform: uppercase;
`;

const containedAndSolidDisabled = css`
  background-color: ${({ theme }) => theme.colors.grey3};
  color: ${({ theme }) => theme.colors.grey8};

  * {
    color: ${({ theme }) => theme.colors.grey8};
  }
`;

const outlinedDisabled = css`
  background-color: ${({ theme }) => theme.colors.grey2};
  border-color: ${({ theme }) => theme.colors.grey7};
  color: ${({ theme }) => theme.colors.grey8};

  * {
    color: ${({ theme }) => theme.colors.grey8};
  }
`;

const textDisabled = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey8};

  * {
    color: ${({ theme }) => theme.colors.grey8};
  }
`;

const size: Record<Size, RuleSet<object>> = {
  small: css`
    padding: ${({ theme }) => theme.spaces[1]} ${({ theme }) => theme.spaces[2]};
    font-size: ${({ theme }) => theme.fontSizes[3]};
  `,
  standard: css`
    padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[4]};
  `,
  large: css`
    padding: ${({ theme }) => theme.spaces[3]} ${({ theme }) => theme.spaces[6]};
  `,
};

const shape: Record<Shape, RuleSet<object>> = {
  flat: css`
    border-radius: 0;
  `,
  smoth: css`
    border-radius: ${({ theme }) => theme.radii[1]};
  `,
  rounded: css`
    border-radius: ${({ theme }) => theme.radii.pill};
  `,
};

const primaryVariants: Record<Variant, RuleSet<object>> = {
  solid: css`
    background-color: ${({ theme }) => theme.colors.primary9};
    color: ${({ theme }) => theme.colors.grey1};

    * {
      color: ${({ theme }) => theme.colors.grey1};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.primary10};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.primary11};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  contained: css`
    background-color: ${({ theme }) => theme.colors.primary4};
    color: ${({ theme }) => theme.colors.primary12};

    * {
      color: ${({ theme }) => theme.colors.primary12};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.primary5};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.primary6};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  outlined: css`
    background-color: transparent;
    border-width: ${({ theme }) => theme.borderWidths[1]};
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.primary7};
    color: ${({ theme }) => theme.colors.primary11};

    * {
      color: ${({ theme }) => theme.colors.primary11};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.primary4};
      border-color: ${({ theme }) => theme.colors.primary8};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.primary5};
    }

    &:disabled {
      ${outlinedDisabled}
    }
  `,

  text: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary12};

    * {
      color: ${({ theme }) => theme.colors.primary12};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.primary4};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.primary5};
    }

    &:disabled {
      ${textDisabled}
    }
  `,
};

const secondaryVariants: Record<Variant, RuleSet<object>> = {
  solid: css`
    background-color: ${({ theme }) => theme.colors.secondary9};
    color: ${({ theme }) => theme.colors.grey1};

    * {
      color: ${({ theme }) => theme.colors.grey1};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.secondary10};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.secondary11};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  contained: css`
    background-color: ${({ theme }) => theme.colors.secondary4};
    color: ${({ theme }) => theme.colors.secondary12};

    * {
      color: ${({ theme }) => theme.colors.secondary12};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.secondary5};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.secondary6};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  outlined: css`
    background-color: transparent;
    border-width: ${({ theme }) => theme.borderWidths[1]};
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.secondary7};
    color: ${({ theme }) => theme.colors.secondary11};

    * {
      color: ${({ theme }) => theme.colors.secondary11};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.secondary4};
      border-color: ${({ theme }) => theme.colors.secondary8};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.secondary5};
    }

    &:disabled {
      ${outlinedDisabled}
    }
  `,

  text: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondary11};

    * {
      color: ${({ theme }) => theme.colors.secondary11};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.secondary4};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.secondary5};
    }

    &:disabled {
      ${textDisabled}
    }
  `,
};

const successVariants: Record<Variant, RuleSet<object>> = {
  solid: css`
    background-color: ${({ theme }) => theme.colors.success9};
    color: ${({ theme }) => theme.colors.grey1};

    * {
      color: ${({ theme }) => theme.colors.grey1};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.success10};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.success11};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  contained: css`
    background-color: ${({ theme }) => theme.colors.success4};
    color: ${({ theme }) => theme.colors.success12};

    * {
      color: ${({ theme }) => theme.colors.success12};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.success5};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.success6};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  outlined: css`
    background-color: transparent;
    border-width: ${({ theme }) => theme.borderWidths[1]};
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.success7};
    color: ${({ theme }) => theme.colors.success11};

    * {
      color: ${({ theme }) => theme.colors.success11};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.success4};
      border-color: ${({ theme }) => theme.colors.success8};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.success5};
    }

    &:disabled {
      ${outlinedDisabled}
    }
  `,

  text: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.success11};

    * {
      color: ${({ theme }) => theme.colors.success11};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.success4};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.success5};
    }

    &:disabled {
      ${textDisabled}
    }
  `,
};

const errorVariants: Record<Variant, RuleSet<object>> = {
  solid: css`
    background-color: ${({ theme }) => theme.colors.error9};
    color: ${({ theme }) => theme.colors.grey1};

    * {
      color: ${({ theme }) => theme.colors.grey1};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.error10};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.error11};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  contained: css`
    background-color: ${({ theme }) => theme.colors.error4};
    color: ${({ theme }) => theme.colors.error12};

    * {
      color: ${({ theme }) => theme.colors.error12};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.error5};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.error6};
    }

    &:disabled {
      ${containedAndSolidDisabled}
    }
  `,

  outlined: css`
    background-color: transparent;
    border-width: ${({ theme }) => theme.borderWidths[1]};
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.error7};
    color: ${({ theme }) => theme.colors.error11};

    * {
      color: ${({ theme }) => theme.colors.error11};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.error4};
      border-color: ${({ theme }) => theme.colors.error8};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.error5};
    }

    &:disabled {
      ${outlinedDisabled}
    }
  `,

  text: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.error11};

    * {
      color: ${({ theme }) => theme.colors.error11};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors.error4};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.error5};
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
  $isUpperCase: RempiVariant<boolean>;
  $size: RempiVariant<Size>;
  $variant: RempiVariant<Variant>;
  $color: RempiVariant<Color>;
  $shape: RempiVariant<Shape>;
}>`
  -webkit-font-smoothing: antialiased;
  align-items: center;
  appearance: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  justify-content: center;
  line-height: normal;
  min-width: ${({ theme }) => theme.spaces[18]};
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
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
  }

  ${(props) => {
    const apply = (value: boolean) => {
      return value && isUpperCase;
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$isUpperCase
    );
  }}

  ${(props) => {
    const apply = (value: Size) => {
      return value && size[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$size
    );
  }}

  ${(props) => {
    const apply = (value: Color) => {
      return value && color[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$color
    );
  }}

  ${(props) => {
    const apply = (value: Shape) => {
      return value && shape[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$shape
    );
  }}
`;

export const StyledIconButton = styled(StyledButton)<{
  $isUpperCase: RempiVariant<boolean>;
  $size: RempiVariant<Size>;
  $variant: RempiVariant<Variant>;
  $color: RempiVariant<Color>;
  $shape: RempiVariant<Shape>;
}>`
  min-width: inherit;
`;
