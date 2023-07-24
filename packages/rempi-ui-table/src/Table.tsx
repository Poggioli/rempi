import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import "./Table.scss";

export type TableProps = Omit<HTMLRempiProps<"table">, "as"> & {
  striped?: boolean;
  condensed?: boolean;
};

export const Table = forwardRef<"table", TableProps>(
  ({ children, className, striped = true, condensed = true, ...props }, ref) => {
    return (
      <div className="rempi-table">
        <table
          ref={ref}
          {...props}
          className={classNames(
            "rempi-table__root",
            { "rempi-table__root--striped": striped },
            { "rempi-table__root--condensed": condensed },
            className
          )}
        >
          {children}
        </table>
      </div>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableHeaderProps = Omit<HTMLRempiProps<"thead">, "as">;

export const TableHeader = forwardRef<"thead", TableHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        {...props}
        className={classNames("rempi-table__header", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableBodyProps = Omit<HTMLRempiProps<"tbody">, "as">;

export const TableBody = forwardRef<"tbody", TableBodyProps>(
  ({ className, ...props }, ref) => {
    return (
      <tbody
        ref={ref}
        {...props}
        className={classNames("rempi-table__body", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableFooterProps = Omit<HTMLRempiProps<"tfoot">, "as">;

export const TableFooter = forwardRef<"tfoot", TableFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <tfoot
        ref={ref}
        {...props}
        className={classNames("rempi-table__footer", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableRowProps = Omit<HTMLRempiProps<"tr">, "as">;

export const TableRow = forwardRef<"tr", TableRowProps>(
  ({ className, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        {...props}
        className={classNames("rempi-table__row", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableHeadProps = Omit<HTMLRempiProps<"th">, "as">;

export const TableHead = forwardRef<"th", TableHeadProps>(
  ({ className, ...props }, ref) => {
    return (
      <th
        ref={ref}
        {...props}
        className={classNames("rempi-table__head", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableCellProps = Omit<HTMLRempiProps<"td">, "as">;

export const TableCell = forwardRef<"td", TableCellProps>(
  ({ className, ...props }, ref) => {
    return (
      <td
        ref={ref}
        {...props}
        className={classNames("rempi-table__cell", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TableCaptionProps = Omit<HTMLRempiProps<"caption">, "as">;

export const TableCaption = forwardRef<"caption", TableCaptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <caption
        ref={ref}
        {...props}
        className={classNames("rempi-table__caption", className)}
      />
    );
  }
);
