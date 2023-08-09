import { css, DefaultTheme, styled } from "@rempi-ui/core";
import { Variant } from "./Badge";

export const StyledBadge = styled.div<{
  variant?: Variant;
}>`
  -webkit-font-smoothing: antialiased;
  align-items: center;
  appearance: none;
  border: none;
  border-radius: ${(props) => props.theme.radii[1]};
  display: inline-flex;
  flex-direction: row;
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-weight: ${(props) => props.theme.fontWeights[3]};
  gap: ${(props) => props.theme.spaces[2]};
  justify-content: center;
  letter-spacing: 10%;
  line-height: ${(props) => props.theme.lineHeights[1]};
  outline: none;
  padding: ${(props) => props.theme.spaces[1]}
    ${(props) => props.theme.spaces[2]};
  transition: background-color 200ms ease, color 200ms ease,
    border-color 200ms ease;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:focus-visible,
  &:focus {
    outline-color: ${(props) => props.theme.colors.info9};
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
  }

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background-color: ${props.theme.colors.primary9};
          border: ${props.theme.borderWidths[1]} solid
            ${props.theme.colors.primary9};
          color: ${props.theme.colors.primary1};

          &:hover {
            background-color: ${props.theme.colors.primary11};
            border-color: ${props.theme.colors.primary11};
            cursor: text;
          }
        `;
      case "secondary":
        return css`
          background-color: ${props.theme.colors.secondary9};
          border: ${props.theme.borderWidths[1]} solid
            ${props.theme.colors.secondary9};
          color: ${props.theme.colors.secondary1};

          &:hover {
            background-color: ${props.theme.colors.secondary11};
            border-color: ${props.theme.colors.secondary11};
            cursor: text;
          }
        `;
      case "destructive":
        return css`
          background-color: ${props.theme.colors.error9};
          border: ${props.theme.borderWidths[1]} solid
            ${props.theme.colors.error9};
          color: ${props.theme.colors.error1};

          &:hover {
            background-color: ${props.theme.colors.error11};
            border-color: ${props.theme.colors.error11};
            cursor: text;
          }
        `;
      case "outlined":
        return css`
          background-color: transparent;
          border: ${props.theme.borderWidths[1]} solid
            ${props.theme.colors.grey9};
          color: ${props.theme.colors.grey12};
        `;
    }
  }}
`;

StyledBadge.defaultProps = {
  variant: "primary",
};
