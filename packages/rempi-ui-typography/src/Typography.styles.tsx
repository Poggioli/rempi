import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  RuleSet,
  styled,
} from "@rempi-ui/core";
import {
  Color,
  FontSize,
  FontWeight,
  LineHeight,
  TextAlign,
  Variant,
} from "./Typography";

const variant: Record<Variant, RuleSet<object>> = {
  lead1: css`
    line-height: ${({ theme }) => theme.lineHeights[1]};
    font-weight: ${({ theme }) => theme.fontWeights[3]};
    font-size: ${({ theme }) => theme.fontSizes[6]};

    * {
      line-height: ${({ theme }) => theme.lineHeights[1]};
      font-weight: ${({ theme }) => theme.fontWeights[3]};
      font-size: ${({ theme }) => theme.fontSizes[6]};
    }
  `,
  lead2: css`
    line-height: ${({ theme }) => theme.lineHeights[1]};
    font-weight: ${({ theme }) => theme.fontWeights[3]};
    font-size: ${({ theme }) => theme.fontSizes[5]};

    * {
      line-height: ${({ theme }) => theme.lineHeights[1]};
      font-weight: ${({ theme }) => theme.fontWeights[3]};
      font-size: ${({ theme }) => theme.fontSizes[5]};
    }
  `,
  body1: css`
    line-height: ${({ theme }) => theme.lineHeights[2]};
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    font-size: ${({ theme }) => theme.fontSizes[4]};

    * {
      line-height: ${({ theme }) => theme.lineHeights[2]};
      font-weight: ${({ theme }) => theme.fontWeights[2]};
      font-size: ${({ theme }) => theme.fontSizes[4]};
    }
  `,
  body2: css`
    line-height: ${({ theme }) => theme.lineHeights[2]};
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    font-size: ${({ theme }) => theme.fontSizes[3]};

    * {
      line-height: ${({ theme }) => theme.lineHeights[2]};
      font-weight: ${({ theme }) => theme.fontWeights[2]};
      font-size: ${({ theme }) => theme.fontSizes[3]};
    }
  `,
  caption: css`
    line-height: ${({ theme }) => theme.lineHeights[1]};
    font-weight: ${({ theme }) => theme.fontWeights[1]};
    font-size: ${({ theme }) => theme.fontSizes[2]};

    * {
      line-height: ${({ theme }) => theme.lineHeights[1]};
      font-weight: ${({ theme }) => theme.fontWeights[1]};
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }
  `,
  subtitle: css`
    line-height: ${({ theme }) => theme.lineHeights[1]};
    font-weight: ${({ theme }) => theme.fontWeights[1]};
    font-size: ${({ theme }) => theme.fontSizes[1]};

    * {
      line-height: ${({ theme }) => theme.lineHeights[1]};
      font-weight: ${({ theme }) => theme.fontWeights[1]};
      font-size: ${({ theme }) => theme.fontSizes[1]};
    }
  `,
};

const textAlign: Record<TextAlign, RuleSet<object>> = {
  left: css`
    text-align: left;

    * {
      text-align: left;
    }
  `,
  center: css`
    text-align: center;

    * {
      text-align: center;
    }
  `,
  right: css`
    text-align: right;

    * {
      text-align: right;
    }
  `,
};

const fontSize: Record<FontSize, RuleSet<object>> = {
  "2xsm": css`
    font-size: ${({ theme }) => theme.fontSizes[1]};

    * {
      font-size: ${({ theme }) => theme.fontSizes[1]};
    }
  `,
  xsm: css`
    font-size: ${({ theme }) => theme.fontSizes[2]};

    * {
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }
  `,
  sm: css`
    font-size: ${({ theme }) => theme.fontSizes[3]};

    * {
      font-size: ${({ theme }) => theme.fontSizes[3]};
    }
  `,
  md: css`
    font-size: ${({ theme }) => theme.fontSizes[4]};

    * {
      font-size: ${({ theme }) => theme.fontSizes[4]};
    }
  `,
  lg: css`
    font-size: ${({ theme }) => theme.fontSizes[5]};

    * {
      font-size: ${({ theme }) => theme.fontSizes[5]};
    }
  `,
  xlg: css`
    font-size: ${({ theme }) => theme.fontSizes[6]};

    * {
      font-size: ${({ theme }) => theme.fontSizes[6]};
    }
  `,
};

const fontWeight: Record<FontWeight, RuleSet<object>> = {
  tiny: css`
    font-weight: ${({ theme }) => theme.fontWeights[1]};

    * {
      font-weight: ${({ theme }) => theme.fontWeights[1]};
    }
  `,
  normal: css`
    font-weight: ${({ theme }) => theme.fontWeights[2]};

    * {
      font-weight: ${({ theme }) => theme.fontWeights[2]};
    }
  `,
  regular: css`
    font-weight: ${({ theme }) => theme.fontWeights[3]};

    * {
      font-weight: ${({ theme }) => theme.fontWeights[3]};
    }
  `,
  "semi-bold": css`
    font-weight: ${({ theme }) => theme.fontWeights[4]};

    * {
      font-weight: ${({ theme }) => theme.fontWeights[4]};
    }
  `,
  bold: css`
    font-weight: ${({ theme }) => theme.fontWeights[5]};

    * {
      font-weight: ${({ theme }) => theme.fontWeights[5]};
    }
  `,
  "extra-bold": css`
    font-weight: ${({ theme }) => theme.fontWeights[6]};

    * {
      font-weight: ${({ theme }) => theme.fontWeights[6]};
    }
  `,
};

const lineHeight: Record<LineHeight, RuleSet<object>> = {
  1: css`
    line-height: ${({ theme }) => theme.lineHeights[1]};

    * {
      line-height: ${({ theme }) => theme.lineHeights[1]};
    }
  `,
  2: css`
    line-height: ${({ theme }) => theme.lineHeights[2]};

    * {
      line-height: ${({ theme }) => theme.lineHeights[2]};
    }
  `,
};

const color: Record<Color, RuleSet<object>> = {
  "high-contrast": css`
    color: ${({ theme }) => theme.colors.grey12};

    * {
      color: ${({ theme }) => theme.colors.grey12};
    }
  `,
  "low-contrast": css`
    color: ${({ theme }) => theme.colors.grey11};

    * {
      color: ${({ theme }) => theme.colors.grey11};
    }
  `,
};

export const StyledTypography = styled.span<{
  $fontSize?: FontSize;
  $fontWeight?: FontWeight;
  $lineHeight?: LineHeight;
  $color?: Color;
  $variant?: Variant;
  $textAlign?: TextAlign;
  $isTruncated?: boolean;
}>`
  -webkit-font-smoothing: antialiased;
  color: ${({ theme }) => theme.colors.grey12};
  margin: 0;
  padding: 0;
  letter-spacing: 0.05rem;

  & > strong {
    font-weight: ${({ theme }) => theme.fontWeights[5]};
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
  }};

  ${(props) => {
    const apply = (value: TextAlign) => {
      return value && textAlign[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$textAlign
    );
  }};

  ${(props) => {
    const apply = (value: FontSize) => {
      return value && fontSize[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$fontSize
    );
  }};

  ${(props) => {
    const apply = (value: FontWeight) => {
      return value && fontWeight[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$fontWeight
    );
  }};

  ${(props) => {
    const apply = (value: LineHeight) => {
      return value && lineHeight[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$lineHeight
    );
  }};

  ${(props) => {
    const apply = (value: Color) => {
      return value && color[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$color
    );
  }};

  ${(props) => {
    const apply = (value: boolean) => {
      return (
        value &&
        css`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
        `
      );
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$isTruncated
    );
  }};

  & > a,
  & > a:visited {
    color: ${({ theme }) => theme.colors.primary12};
    text-decoration: underline;
  }
`;
