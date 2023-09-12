import { styled } from "@rempi-ui/core";
import { Table } from "@rempi-ui/table";
import { FC } from "react";

type TableHeader = {
  [key: string]: string;
};

type TableRow = {
  [Value in keyof TableHeader]: string;
};

type TableProps = {
  headers: TableHeader;
  rows: TableRow[];
  caption?: string;
};

const StyledMarginTop = styled.div`
  margin-top: ${({ theme }) => theme.spaces[4]};
`;

export const TableOverview: FC<TableProps> = ({ headers, rows, caption }) => {
  return (
    <StyledMarginTop>
      <Table.Root>
        {caption ? <Table.Caption>{caption}</Table.Caption> : null}
        <Table.Header>
          <Table.Row>
            {Object.values(headers).map((label) => (
              <Table.Head>{label}</Table.Head>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row, index) => (
            <Table.Row key={index}>
              {Object.keys(headers).map((key) => (
                <Table.Cell
                  key={`${key}-${index}`}
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  {row[key]}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </StyledMarginTop>
  );
};
