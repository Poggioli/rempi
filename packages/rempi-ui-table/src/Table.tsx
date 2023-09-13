import { forwardRef, HTMLRempiProps, RempiVariant } from "@rempi-ui/core";
import {
  StyledTableBody,
  StyledTableCaption,
  StyledTableCell,
  StyledTableFooter,
  StyledTableHead,
  StyledTableHeader,
  StyledTableRoot,
  StyledTableRow,
  StyledTableWrapper,
} from "./Table.styles";

export type TableProps = Omit<
  HTMLRempiProps<typeof StyledTableRoot>,
  "as" | "$striped" | "$condensed" | "$bordered"
> & {
  striped?: RempiVariant<boolean>;
  condensed?: RempiVariant<boolean>;
  bordered?: RempiVariant<boolean>;
};

export const Table = forwardRef<"table", TableProps>(
  (
    { children, striped = true, condensed = true, bordered = true, ...props },
    ref
  ) => {
    return (
      <StyledTableWrapper $bordered={bordered}>
        <StyledTableRoot
          ref={ref}
          {...props}
          $striped={striped}
          $condensed={condensed}
        >
          {children}
        </StyledTableRoot>
      </StyledTableWrapper>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableHeaderProps = Omit<
  HTMLRempiProps<typeof StyledTableHeader>,
  "as"
>;

export const TableHeader = forwardRef<
  typeof StyledTableHeader,
  TableHeaderProps
>(({ ...props }, ref) => {
  return <StyledTableHeader ref={ref} {...props} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableBodyProps = Omit<HTMLRempiProps<typeof StyledTableBody>, "as">;

export const TableBody = forwardRef<typeof StyledTableBody, TableBodyProps>(
  ({ ...props }, ref) => {
    return <StyledTableBody ref={ref} {...props} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableFooterProps = Omit<
  HTMLRempiProps<typeof StyledTableFooter>,
  "as"
>;

export const TableFooter = forwardRef<
  typeof StyledTableFooter,
  TableFooterProps
>(({ ...props }, ref) => {
  return <StyledTableFooter ref={ref} {...props} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableRowProps = Omit<HTMLRempiProps<typeof StyledTableRow>, "as">;

export const TableRow = forwardRef<typeof StyledTableRow, TableRowProps>(
  ({ ...props }, ref) => {
    return <StyledTableRow ref={ref} {...props} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableHeadProps = Omit<HTMLRempiProps<typeof StyledTableHead>, "as">;

export const TableHead = forwardRef<typeof StyledTableHead, TableHeadProps>(
  ({ ...props }, ref) => {
    return <StyledTableHead ref={ref} {...props} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableCellProps = Omit<HTMLRempiProps<typeof StyledTableCell>, "as">;

export const TableCell = forwardRef<typeof StyledTableCell, TableCellProps>(
  ({ ...props }, ref) => {
    return <StyledTableCell ref={ref} {...props} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableCaptionProps = Omit<
  HTMLRempiProps<typeof StyledTableCaption>,
  "as"
>;

export const TableCaption = forwardRef<
  typeof StyledTableCaption,
  TableCaptionProps
>(({ ...props }, ref) => {
  return <StyledTableCaption ref={ref} {...props} />;
});
