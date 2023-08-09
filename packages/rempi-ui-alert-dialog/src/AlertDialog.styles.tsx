import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { css, keyframes, styled } from "@rempi-ui/core";

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
  blur?: boolean;
}>`
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${(props) => props.theme.colors.black10};
  inset: 0;
  position: fixed;

  ${(props) => props.blur && css`backdrop-filter: blur(${props.theme.spaces[1]});`}
`;

export const StyledAlertDialogContent = styled(AlertDialog.Content)`
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${(props) => props.theme.colors.primary2};
  box-shadow: ${(props) => props.theme.shadows[2]};
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 50%;
  padding: ${(props) => props.theme.spaces[6]};
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  @media (min-width: 576px) {
    border-radius: ${(props) => props.theme.radii[2]};
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
  color: ${(props) => props.theme.colors.grey12};
  font-size: ${(props) => props.theme.fontSizes[6]};
  font-weight: ${(props) => props.theme.fontWeights[3]};
  margin: 0;
`;

export const StyledAlertDialogDescription = styled(AlertDialog.Description)`
  color: ${(props) => props.theme.colors.grey11};
  font-size: ${(props) => props.theme.fontSizes[4]};
  line-height: ${(props) => props.theme.lineHeights[2]};
  margin: ${(props) => props.theme.spaces[4]} 0
    ${(props) => props.theme.spaces[5]} 0;
`;

export const StyledAlertDialogFooter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto 0 0 0;
  row-gap: ${(props) => props.theme.spaces[5]};

  > * {
    width: 100%;
  }

  @media (min-width: 576px) {
    column-gap: ${(props) => props.theme.spaces[5]};
    flex-direction: row;
    margin: 0;

    > * {
      width: auto;
    }
  }
`;
