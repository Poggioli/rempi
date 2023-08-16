import { css, RuleSet, styled } from "@rempi-ui/core";
import { Variant } from "./Container";

const variants: Record<Variant, RuleSet<object>> = {
  sm: css`
    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1140px;
    }

    @media (min-width: 1400px) {
      max-width: 1320px;
    }
  `,
  md: css`
    @media (min-width: 576px) {
      max-width: 100%;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1140px;
    }

    @media (min-width: 1400px) {
      max-width: 1320px;
    }
  `,
  lg: css`
    @media (min-width: 576px) {
      max-width: 100%;
    }

    @media (min-width: 768px) {
      max-width: 100%;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1140px;
    }

    @media (min-width: 1400px) {
      max-width: 1320px;
    }
  `,
  xlg: css`
    @media (min-width: 576px) {
      max-width: 100%;
    }

    @media (min-width: 768px) {
      max-width: 100%;
    }

    @media (min-width: 992px) {
      max-width: 100%;
    }

    @media (min-width: 1200px) {
      max-width: 1140px;
    }

    @media (min-width: 1400px) {
      max-width: 1320px;
    }
  `,
  "2xlg": css`
    @media (min-width: 576px) {
      max-width: 100%;
    }

    @media (min-width: 768px) {
      max-width: 100%;
    }

    @media (min-width: 992px) {
      max-width: 100%;
    }

    @media (min-width: 1200px) {
      max-width: 100%;
    }

    @media (min-width: 1400px) {
      max-width: 1320px;
    }
  `,
  fluid: css`
    @media (min-width: 576px) {
      max-width: 100%;
    }

    @media (min-width: 768px) {
      max-width: 100%;
    }

    @media (min-width: 992px) {
      max-width: 100%;
    }

    @media (min-width: 1200px) {
      max-width: 100%;
    }

    @media (min-width: 1400px) {
      max-width: 100%;
    }
  `,
};

export const StyledContainer = styled.div<{
  $variant?: Variant;
  $centered?: boolean;
}>`
  box-sizing: border-box;
  max-width: 100%;
  padding: 0 ${(props) => props.theme.spaces[4]};

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }

  ${(props) => props.$variant && variants[props.$variant]}

  ${(props) =>
    props.$centered &&
    css`
      margin: 0 auto;
    `}
`;
