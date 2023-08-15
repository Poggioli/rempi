import { css, styled } from "@rempi-ui/core";

export const StyledTableWrapper = styled.div`
  overflow: auto;
  width: 100%;
`;

export const StyledTableRow = styled.tr`
  background-color: transparent;
  border-bottom: ${(props) => props.theme.borderWidths[1]} solid
    ${(props) => props.theme.colors.grey6};
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary4} !important;
  }
`;

export const StyledTableHeader = styled.thead``;

export const StyledTableHead = styled.th`
  color: ${(props) => props.theme.colors.grey11};
  font-weight: ${(props) => props.theme.fontWeights[3]};
  height: ${(props) => props.theme.spaces[10]};
  padding: ${(props) => props.theme.spaces[1]}
    ${(props) => props.theme.spaces[4]};
  text-align: left;
  vertical-align: middle;
`;

export const StyledTableFooter = styled.tfoot`
  color: ${(props) => props.theme.colors.grey11};
  font-weight: ${(props) => props.theme.fontWeights[3]};
  height: ${(props) => props.theme.spaces[10]};
  padding: ${(props) => props.theme.spaces[1]}
    ${(props) => props.theme.spaces[4]};
  text-align: left;
  vertical-align: middle;
`;

export const StyledTableCell = styled.td`
  color: ${(props) => props.theme.colors.grey12};
  padding: ${(props) => props.theme.spaces[4]};
  vertical-align: middle;
`;

export const StyledTableCaption = styled.caption`
  color: ${(props) => props.theme.colors.grey11};
  font-size: ${(props) => props.theme.fontSizes[3]};
  line-height: ${(props) => props.theme.lineHeights[2]};
  width: 100%;
`;

export const StyledTableBody = styled.tbody`
  ${StyledTableRow.toString()}:last-child {
    border: 0;
  }
`;

export const StyledTableRoot = styled.table<{
  $striped?: boolean;
  $condensed?: boolean;
}>`
  border-collapse: collapse;
  caption-side: bottom;
  color: ${(props) => props.theme.colors.grey11};
  font-size: ${(props) => props.theme.fontSizes[3]};
  line-height: ${(props) => props.theme.lineHeights[2]};
  width: 100%;
  margin-top: ${(props) => props.theme.spaces[4]};

  ${(props) =>
    props.$striped &&
    css`
      ${StyledTableBody.toString()} ${StyledTableRow.toString()} {
        &:nth-child(even) {
          background-color: ${(props) => props.theme.colors.primary2};
        }

        &:nth-child(odd) {
          background-color: ${(props) => props.theme.colors.primary3};
        }
      }
    `}

  ${(props) =>
    props.$condensed &&
    css`
      ${StyledTableHead.toString()},
      ${StyledTableFooter.toString()} {
        padding: 0 ${(props) => props.theme.spaces[2]};
      }

      ${StyledTableCell.toString()} {
        padding: ${(props) => props.theme.spaces[2]};
      }
    `}
`;
