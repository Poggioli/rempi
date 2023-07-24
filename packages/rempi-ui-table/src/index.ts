import {
  TableProps,
  Table as TableComp,
  TableHeaderProps,
  TableHeader,
  TableBodyProps,
  TableBody,
  TableFooterProps,
  TableFooter,
  TableRowProps,
  TableRow,
  TableHeadProps,
  TableHead,
  TableCellProps,
  TableCell,
  TableCaptionProps,
  TableCaption,
} from "./Table";

export const Table = {
  Root: TableComp,
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
  Caption: TableCaption,
};

export type {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableHeadProps,
  TableCellProps,
  TableCaptionProps,
};
