import { css, RuleSet, styled } from "@rempi-ui/core";
import {
  Color,
  FontSize,
  FontWeight,
  LineHeight,
  TextAlign,
  Variant,
} from "./Heading";

const variant: Record<Variant, RuleSet<object>> = {
  1: css`
    font-size: ${(props) => props.theme.fontSizes[12]};
    font-weight: ${(props) => props.theme.fontWeights[3]};
    line-height: ${(props) => props.theme.lineHeights[2]};

    * {
      font-size: ${(props) => props.theme.fontSizes[12]};
      font-weight: ${(props) => props.theme.fontWeights[3]};
      line-height: ${(props) => props.theme.lineHeights[2]};
    }
  `,
  2: css`
    font-size: ${(props) => props.theme.fontSizes[11]};
    font-weight: ${(props) => props.theme.fontWeights[3]};
    line-height: ${(props) => props.theme.lineHeights[2]};

    * {
      font-size: ${(props) => props.theme.fontSizes[11]};
      font-weight: ${(props) => props.theme.fontWeights[3]};
      line-height: ${(props) => props.theme.lineHeights[2]};
    }
  `,
  3: css`
    font-size: ${(props) => props.theme.fontSizes[10]};
    font-weight: ${(props) => props.theme.fontWeights[3]};
    line-height: ${(props) => props.theme.lineHeights[2]};

    * {
      font-size: ${(props) => props.theme.fontSizes[10]};
      font-weight: ${(props) => props.theme.fontWeights[3]};
      line-height: ${(props) => props.theme.lineHeights[2]};
    }
  `,
  4: css`
    font-size: ${(props) => props.theme.fontSizes[9]};
    font-weight: ${(props) => props.theme.fontWeights[4]};
    line-height: ${(props) => props.theme.lineHeights[2]};

    * {
      font-size: ${(props) => props.theme.fontSizes[9]};
      font-weight: ${(props) => props.theme.fontWeights[4]};
      line-height: ${(props) => props.theme.lineHeights[2]};
    }
  `,
  5: css`
    font-size: ${(props) => props.theme.fontSizes[8]};
    font-weight: ${(props) => props.theme.fontWeights[5]};
    line-height: ${(props) => props.theme.lineHeights[2]};

    * {
      font-size: ${(props) => props.theme.fontSizes[8]};
      font-weight: ${(props) => props.theme.fontWeights[5]};
      line-height: ${(props) => props.theme.lineHeights[2]};
    }
  `,
  6: css`
    font-size: ${(props) => props.theme.fontSizes[7]};
    font-weight: ${(props) => props.theme.fontWeights[6]};

    * {
      font-size: ${(props) => props.theme.fontSizes[7]};
      font-weight: ${(props) => props.theme.fontWeights[6]};
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
    font-size: ${(props) => props.theme.fontSizes[1]};

    * {
      font-size: ${(props) => props.theme.fontSizes[1]};
    }
  `,
  xsm: css`
    font-size: ${(props) => props.theme.fontSizes[2]};

    * {
      font-size: ${(props) => props.theme.fontSizes[2]};
    }
  `,
  sm: css`
    font-size: ${(props) => props.theme.fontSizes[3]};

    * {
      font-size: ${(props) => props.theme.fontSizes[3]};
    }
  `,
  md: css`
    font-size: ${(props) => props.theme.fontSizes[4]};

    * {
      font-size: ${(props) => props.theme.fontSizes[4]};
    }
  `,
  lg: css`
    font-size: ${(props) => props.theme.fontSizes[5]};

    * {
      font-size: ${(props) => props.theme.fontSizes[5]};
    }
  `,
  xlg: css`
    font-size: ${(props) => props.theme.fontSizes[6]};

    * {
      font-size: ${(props) => props.theme.fontSizes[6]};
    }
  `,
};

const fontWeight: Record<FontWeight, RuleSet<object>> = {
  tiny: css`
    font-weight: ${(props) => props.theme.fontWeights[1]};

    * {
      font-weight: ${(props) => props.theme.fontWeights[1]};
    }
  `,
  normal: css`
    font-weight: ${(props) => props.theme.fontWeights[2]};

    * {
      font-weight: ${(props) => props.theme.fontWeights[2]};
    }
  `,
  regular: css`
    font-weight: ${(props) => props.theme.fontWeights[3]};

    * {
      font-weight: ${(props) => props.theme.fontWeights[3]};
    }
  `,
  "semi-bold": css`
    font-weight: ${(props) => props.theme.fontWeights[4]};

    * {
      font-weight: ${(props) => props.theme.fontWeights[4]};
    }
  `,
  bold: css`
    font-weight: ${(props) => props.theme.fontWeights[5]};

    * {
      font-weight: ${(props) => props.theme.fontWeights[5]};
    }
  `,
  "extra-bold": css`
    font-weight: ${(props) => props.theme.fontWeights[6]};

    * {
      font-weight: ${(props) => props.theme.fontWeights[6]};
    }
  `,
};

const lineHeight: Record<LineHeight, RuleSet<object>> = {
  1: css`
    line-height: ${(props) => props.theme.lineHeights[1]};

    * {
      line-height: ${(props) => props.theme.lineHeights[1]};
    }
  `,
  2: css`
    line-height: ${(props) => props.theme.lineHeights[2]};

    * {
      line-height: ${(props) => props.theme.lineHeights[2]};
    }
  `,
};

const color: Record<Color, RuleSet<object>> = {
  "high-contrast": css`
    color: ${(props) => props.theme.colors.grey12};

    * {
      color: ${(props) => props.theme.colors.grey12};
    }
  `,
  "low-contrast": css`
    color: ${(props) => props.theme.colors.grey11};

    * {
      color: ${(props) => props.theme.colors.grey11};
    }
  `,
};

export const StyledHeading = styled.h1<{
  $fontSize?: FontSize;
  $fontWeight?: FontWeight;
  $lineHeight?: LineHeight;
  $color?: Color;
  $variant?: Variant;
  $textAlign?: TextAlign;
  $isTruncated?: boolean;
}>`
  -webkit-font-smoothing: antialiased;
  color: ${(props) => props.theme.colors.grey12};
  margin: 0;
  padding: 0;
  letter-spacing: 0.05rem;

  & > strong {
    font-weight: ${(props) => props.theme.fontWeights[5]};
  }

  ${(props) => props.$variant && variant[props.$variant]}
  ${(props) => props.$textAlign && textAlign[props.$textAlign]}
  ${(props) => props.$fontSize && fontSize[props.$fontSize]}
  ${(props) => props.$fontWeight && fontWeight[props.$fontWeight]}
  ${(props) => props.$lineHeight && lineHeight[props.$lineHeight]}
  ${(props) => props.$color && color[props.$color]}
  ${(props) =>
    props.$isTruncated &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 100%;
    `}
`;
