import { styled } from "@rempi-ui/core";
import { FC } from "react";

const StyledCode = styled.code`
  display: grid;
  min-width: 100%;
  overflow-wrap: break-word;
  border-radius: 0;
  border-width: 0;
  background-color: transparent;
  padding: 0;
  counter-reset: line;
  -webkit-box-decoration-break: clone;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
`;

export const Code: FC = ({ ...props }) => {
  return <StyledCode {...props} />;
};
