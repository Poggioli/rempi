import * as AlertDialog from "@radix-ui/react-alert-dialog";
import {
  ApplyResponsiveVariant,
  css,
  keyframes,
  RempiConfig,
  RempiVariant,
  styled,
} from "@rempi-ui/core";

const overlayShow = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const StyledAlertDialogOverlay = styled(AlertDialog.Overlay)<{
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

export const StyledAlertDialogContent = styled(AlertDialog.Content)`
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${({ theme }) => theme.colors.grey1};
  box-shadow: ${({ theme }) => theme.shadows[2]};
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 50%;
  padding: ${({ theme }) => theme.spaces[6]};
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices[1]};

  ${({ theme }) => theme.breakpoints[1]} {
    border-radius: ${({ theme }) => theme.radii[2]};
    display: block;
    height: auto;
    max-height: 85vh;
    width: min(90vw, 576px);
  }

  &:focus {
    outline: none;
  }
`;

export const StyledAlertDialogTitle = styled(AlertDialog.Title)`
  color: ${({ theme }) => theme.colors.grey12};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  margin: 0;
`;

export const StyledAlertDialogDescription = styled(AlertDialog.Description)`
  color: ${({ theme }) => theme.colors.grey11};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  margin: ${({ theme }) => theme.spaces[4]} 0 ${({ theme }) => theme.spaces[5]}
    0;
`;

export const StyledAlertDialogFooter = styled.div`
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
