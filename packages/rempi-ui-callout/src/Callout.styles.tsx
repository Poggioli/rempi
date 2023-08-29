import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  RempiVariant,
  RuleSet,
  styled,
} from "@rempi-ui/core";
import { Color, Size, Variant } from "./Callout";

export const StyledCalloutIcon = styled.div`
  line-height: 0;
`;

const size: Record<Size, RuleSet<object>> = {
  small: css`
    padding: ${({ theme }) => theme.spaces[3]};
    font-size: ${({ theme }) => theme.fontSizes[3]};
    letter-spacing: 0.025rem;

    * {
      font-size: ${({ theme }) => theme.fontSizes[3]};
      letter-spacing: 0.025rem;
    }

    ${StyledCalloutIcon.toString()} {
      margin-top: calc(${({ theme }) => theme.spaces[1]} / 2);
    }
  `,

  standard: css`
    padding: ${({ theme }) => theme.spaces[4]};
    font-size: ${({ theme }) => theme.fontSizes[3]};

    * {
      font-size: ${({ theme }) => theme.fontSizes[3]};
    }

    ${StyledCalloutIcon.toString()} {
      margin-top: calc(${({ theme }) => theme.spaces[1]} / 2);
    }
  `,

  large: css`
    padding: ${({ theme }) => theme.spaces[4]};
    font-size: ${({ theme }) => theme.fontSizes[4]};

    * {
      font-size: ${({ theme }) => theme.fontSizes[4]};
    }

    ${StyledCalloutIcon.toString()} {
      margin-top: ${({ theme }) => theme.spaces[1]};
    }
  `,
};

const infoVariants: Record<Variant, RuleSet<object>> = {
  soft: css`
    background-color: ${({ theme }) => theme.colors.info3};
    color: ${({ theme }) => theme.colors.info12};

    * {
      color: ${({ theme }) => theme.colors.info12};
    }
  `,

  surface: css`
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.info9};
    border-style: solid;
    border-width: ${({ theme }) => theme.borderWidths[1]};
    color: ${({ theme }) => theme.colors.info12};

    * {
      color: ${({ theme }) => theme.colors.info12};
    }
  `,

  outlined: css`
    background-color: ${({ theme }) => theme.colors.info3};
    border-color: ${({ theme }) => theme.colors.info8};
    border-style: solid;
    border-width: ${({ theme }) => theme.borderWidths[1]};
    color: ${({ theme }) => theme.colors.info12};

    * {
      color: ${({ theme }) => theme.colors.info12};
    }
  `,
};

const successVariants: Record<Variant, RuleSet<object>> = {
  soft: css`
    background-color: ${({ theme }) => theme.colors.success3};
    color: ${({ theme }) => theme.colors.success12};

    * {
      color: ${({ theme }) => theme.colors.success12};
    }
  `,

  surface: css`
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.success9};
    border-style: solid;
    border-width: ${({ theme }) => theme.borderWidths[1]};
    color: ${({ theme }) => theme.colors.success12};

    * {
      color: ${({ theme }) => theme.colors.success12};
    }
  `,

  outlined: css`
    background-color: ${({ theme }) => theme.colors.success3};
    border-color: ${({ theme }) => theme.colors.success8};
    border-style: solid;
    border-width: ${({ theme }) => theme.borderWidths[1]};
    color: ${({ theme }) => theme.colors.success12};

    * {
      color: ${({ theme }) => theme.colors.success12};
    }
  `,
};

const errorVariants: Record<Variant, RuleSet<object>> = {
  soft: css`
    background-color: ${({ theme }) => theme.colors.error3};
    color: ${({ theme }) => theme.colors.error12};

    * {
      color: ${({ theme }) => theme.colors.error12};
    }
  `,

  surface: css`
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.error9};
    border-style: solid;
    border-width: ${({ theme }) => theme.borderWidths[1]};
    color: ${({ theme }) => theme.colors.error12};

    * {
      color: ${({ theme }) => theme.colors.error12};
    }
  `,

  outlined: css`
    background-color: ${({ theme }) => theme.colors.error3};
    border-color: ${({ theme }) => theme.colors.error8};
    border-style: solid;
    border-width: ${({ theme }) => theme.borderWidths[1]};
    color: ${({ theme }) => theme.colors.error12};

    * {
      color: ${({ theme }) => theme.colors.error12};
    }
  `,
};

const color: Record<Color, RuleSet<object & { $variant: Variant }>> = {
  info: css<{ $variant: Variant }>`
    ${(props) => props.$variant && infoVariants[props.$variant]}
  `,

  success: css<{ $variant: Variant }>`
    ${(props) => props.$variant && successVariants[props.$variant]}
  `,

  error: css<{ $variant: Variant }>`
    ${(props) => props.$variant && errorVariants[props.$variant]}
  `,
};

export const StyledCalloutRoot = styled.div<{
  $color: RempiVariant<Color>;
  $size: RempiVariant<Size>;
}>`
  border-radius: ${({ theme }) => theme.radii[2]};
  color: ${({ theme }) => theme.colors.grey12};
  gap: ${({ theme }) => theme.spaces[2]};

  * {
    color: ${({ theme }) => theme.colors.grey12};
  }

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
    const apply = (value: Size) => {
      return value && size[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$size
    );
  }}
`;
