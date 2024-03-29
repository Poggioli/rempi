import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  RempiVariant,
  styled,
} from "@rempi-ui/core";

export const StyledTableWrapper = styled.div<{
  $bordered?: RempiVariant<boolean>;
}>`
  overflow: auto;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii[2]};

  ${(props) => {
    const apply = (value: boolean) => {
      return (
        value &&
        css`
          box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.grey6};
        `
      );
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$bordered
    );
  }};
`;

export const StyledTableRow = styled.tr`
  background-color: transparent;
  border-bottom: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  transition: background-color 200ms ease;
`;

export const StyledTableHeader = styled.thead``;

export const StyledTableHead = styled.th`
  color: ${({ theme }) => theme.colors.grey11};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  height: ${({ theme }) => theme.spaces[10]};
  padding: ${({ theme }) => theme.spaces[1]} ${({ theme }) => theme.spaces[4]};
  text-align: left;
  vertical-align: middle;
  white-space: nowrap;
`;

export const StyledTableFooter = styled.tfoot`
  color: ${({ theme }) => theme.colors.grey11};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  height: ${({ theme }) => theme.spaces[10]};
  padding: ${({ theme }) => theme.spaces[1]} ${({ theme }) => theme.spaces[4]};
  text-align: left;
  vertical-align: middle;
`;

export const StyledTableCell = styled.td`
  color: ${({ theme }) => theme.colors.grey12};
  padding: ${({ theme }) => theme.spaces[4]};
  vertical-align: middle;
`;

export const StyledTableCaption = styled.caption`
  margin: ${({ theme }) => theme.spaces[2]} 0;
  color: ${({ theme }) => theme.colors.grey11};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  width: 100%;
`;

export const StyledTableBody = styled.tbody`
  ${StyledTableRow.toString()}:last-child {
    border: 0;
  }

  ${StyledTableRow.toString()}:hover {
    background-color: ${({ theme }) => theme.colors.primary3} !important;
  }
`;

export const StyledTableRoot = styled.table<{
  $striped?: RempiVariant<boolean>;
  $condensed?: RempiVariant<boolean>;
}>`
  border-collapse: collapse;
  caption-side: bottom;
  color: ${({ theme }) => theme.colors.grey11};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  width: 100%;

  ${(props) => {
    const apply = (value: boolean) => {
      return (
        value &&
        css`
          ${StyledTableHead.toString()},
          ${StyledTableFooter.toString()} {
            padding: 0 ${({ theme }) => theme.spaces[4]};
          }

          ${StyledTableCell.toString()} {
            padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[4]};
          }
        `
      );
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$condensed
    );
  }};

  ${(props) => {
    const apply = (value: boolean) => {
      return (
        value &&
        css`
          ${StyledTableBody.toString()} ${StyledTableRow.toString()} {
            &:nth-child(even) {
              background-color: ${({ theme }) => theme.colors.primary2};
            }
          }
        `
      );
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$striped
    );
  }};
`;
