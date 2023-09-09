import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  RempiVariant,
  RuleSet,
  styled,
} from "@rempi-ui/core";
import { Variant } from "./Container";

const variants: Record<Variant, RuleSet<object>> = {
  sm: css`
    ${({ theme }) => theme.breakpoints[1]} {
      max-width: 540px;
    }

    ${({ theme }) => theme.breakpoints[2]} {
      max-width: 720px;
    }

    ${({ theme }) => theme.breakpoints[3]} {
      max-width: 960px;
    }

    ${({ theme }) => theme.breakpoints[4]} {
      max-width: 1140px;
    }

    ${({ theme }) => theme.breakpoints[5]} {
      max-width: 1320px;
    }
  `,
  md: css`
    ${({ theme }) => theme.breakpoints[1]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[2]} {
      max-width: 720px;
    }

    ${({ theme }) => theme.breakpoints[3]} {
      max-width: 960px;
    }

    ${({ theme }) => theme.breakpoints[4]} {
      max-width: 1140px;
    }

    ${({ theme }) => theme.breakpoints[5]} {
      max-width: 1320px;
    }
  `,
  lg: css`
    ${({ theme }) => theme.breakpoints[1]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[2]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[3]} {
      max-width: 960px;
    }

    ${({ theme }) => theme.breakpoints[4]} {
      max-width: 1140px;
    }

    ${({ theme }) => theme.breakpoints[5]} {
      max-width: 1320px;
    }
  `,
  xlg: css`
    ${({ theme }) => theme.breakpoints[1]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[2]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[3]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[4]} {
      max-width: 1140px;
    }

    ${({ theme }) => theme.breakpoints[5]} {
      max-width: 1320px;
    }
  `,
  "2xlg": css`
    ${({ theme }) => theme.breakpoints[1]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[2]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[3]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[4]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[5]} {
      max-width: 1320px;
    }
  `,
  fluid: css`
    ${({ theme }) => theme.breakpoints[1]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[2]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[3]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[4]} {
      max-width: 100%;
    }

    ${({ theme }) => theme.breakpoints[5]} {
      max-width: 100%;
    }
  `,
};

export const StyledContainer = styled.div<{
  $variant?: Variant;
  $centered: RempiVariant<boolean>;
}>`
  box-sizing: border-box;
  max-width: 100%;
  padding: 0 ${({ theme }) => theme.spaces[4]};

  ${({ theme }) => theme.breakpoints[1]} {
    max-width: 540px;
  }

  ${({ theme }) => theme.breakpoints[2]} {
    max-width: 720px;
  }

  ${({ theme }) => theme.breakpoints[3]} {
    max-width: 960px;
  }

  ${({ theme }) => theme.breakpoints[4]} {
    max-width: 1140px;
  }

  ${({ theme }) => theme.breakpoints[5]} {
    max-width: 1320px;
  }

  ${(props) => {
    const apply = (value: Variant) => {
      return value && variants[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$variant
    );
  }}

  ${(props) => {
    const applyCentered = (centered: boolean) => {
      return (
        centered &&
        css`
          margin: 0 auto;
        `
      );
    };

    return ApplyResponsiveVariant(
      applyCentered,
      props.theme as RempiConfig,
      props.$centered
    );
  }}
`;
