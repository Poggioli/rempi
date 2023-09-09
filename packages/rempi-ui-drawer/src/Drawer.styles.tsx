import * as Dialog from "@radix-ui/react-dialog";
import {
  ApplyResponsiveVariant,
  css,
  keyframes,
  RempiConfig,
  RempiVariant,
  RuleSet,
  styled,
} from "@rempi-ui/core";
import { Position } from "./Drawer";

const overlayShow = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const contentShowLeft = keyframes`
    from {
      opacity: 0;
      left: -50%;
    }

    to {
      opacity: 1;
      left: 0;
    }
  `;

const contentShowRight = keyframes`
    from {
      opacity: 0;
      right: -50%;
    }

    to {
      opacity: 1;
      right: 0;
    }
  `;

const contentShowTop = keyframes`
    from {
      opacity: 0;
      top: -50%;
    }

    to {
      opacity: 1;
      top: 0;
    }
  `;

const contentShowBottom = keyframes`
    from {
      opacity: 0;
      bottom: -50%;
    }

    to {
      opacity: 1;
      bottom: 0;
    }
  `;

export const StyledDrawerTitle = styled(Dialog.Title)`
  color: ${({ theme }) => theme.colors.grey12};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  margin: 0;
`;

export const StyledDrawerDescription = styled(Dialog.Description)`
  color: ${({ theme }) => theme.colors.grey11};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  margin: ${({ theme }) => theme.spaces[4]} 0 ${({ theme }) => theme.spaces[5]}
    0;
`;

export const StyledDrawerFooter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto 0 0 0;
  row-gap: ${({ theme }) => theme.spaces[5]};

  > * {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints[1]} {
    column-gap: ${({ theme }) => theme.spaces[5]};
    flex-direction: row;
    margin: 0;

    > * {
      width: auto;
    }
  }
`;

export const StyledDrawerCloseCross = styled(Dialog.Close)`
  font-family: inherit;
  border-radius: ${({ theme }) => theme.radii.pill};
  height: ${({ theme }) => theme.spaces[6]};
  width: ${({ theme }) => theme.spaces[6]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grey11};
  position: absolute;
  top: ${({ theme }) => theme.spaces[3]};
  right: ${({ theme }) => theme.spaces[3]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey4};
  }

  &:focus-visible,
  &:focus {
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
  }
`;

const variants: Record<Position, RuleSet<object>> = {
  bottom: css`
    animation: ${contentShowBottom} 300ms cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 0;
    bottom: 0;
    left: 0;
    width: 100%;

    ${({ theme }) => theme.breakpoints[1]} {
      border-radius: ${({ theme }) => theme.radii[2]}
        ${({ theme }) => theme.radii[2]} 0 0;
    }
  `,

  left: css`
    animation: ${contentShowLeft} 300ms cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 0;
    height: 100%;
    left: 0;
    max-width: min(100%, calc(${({ theme }) => theme.spaces[18]} * 6));
    top: 0;

    ${StyledDrawerFooter.toString()} {
      margin-top: auto;
    }

    ${({ theme }) => theme.breakpoints[1]} {
      border-radius: 0 ${({ theme }) => theme.radii[2]}
        ${({ theme }) => theme.radii[2]} 0;
    }
  `,

  right: css`
    animation: ${contentShowRight} 300ms cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 0;
    height: 100%;
    max-width: min(100%, calc(${({ theme }) => theme.spaces[18]} * 6));
    right: 0;
    top: 0;

    ${StyledDrawerFooter.toString()} {
      margin-top: auto;
    }

    ${({ theme }) => theme.breakpoints[1]} {
      border-radius: ${({ theme }) => theme.radii[2]} 0 0
        ${({ theme }) => theme.radii[2]};
    }
  `,

  top: css`
    animation: ${contentShowTop} 300ms cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 0;
    left: 0;
    top: 0;
    width: 100%;

    ${({ theme }) => theme.breakpoints[1]} {
      border-radius: 0 0 ${({ theme }) => theme.radii[2]}
        ${({ theme }) => theme.radii[2]};
    }
  `
};

export const StyledDrawerContent = styled(Dialog.Content)<{
  $position?: RempiVariant<Position>;
}>`
  background-color: ${({ theme }) => theme.colors.grey1};
  box-shadow: ${({ theme }) => theme.shadows[2]};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spaces[6]};
  position: fixed;
  z-index: ${({ theme }) => theme.zIndices[1]};

  &:focus {
    outline: none;
  }

  ${(props) => {
    const apply = (value: Position) => {
      return variants[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$position
    );
  }}
`;

export const StyledDrawerOverlay = styled(Dialog.Overlay)<{
  $blur?: RempiVariant<boolean>;
}>`
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${({ theme }) => theme.colors.black10};
  inset: 0;
  position: fixed;
  z-index: ${({ theme }) => theme.zIndices[1]};

  ${(props) => {
    const apply = (value: boolean) => {
      return (
        value &&
        css`
          backdrop-filter: blur(${props.theme.spaces[1]});
        `
      );
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$blur
    );
  }}
`;
