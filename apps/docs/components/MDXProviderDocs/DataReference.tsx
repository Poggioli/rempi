import { Code } from "@rempi-ui/code";
import { Table } from "@rempi-ui/table";
import { FC } from "react";

type PropDef = {
  name: string;
  value: string | string[];
};

type DataReferenceProps = {
  data: PropDef[];
};

export const DataReference: FC<DataReferenceProps> = ({ data }) => {
  return (
    <Table.Root striped={false}>
      <Table.Header>
        <Table.Row>
          <Table.Head className="w-100">Data attribute</Table.Head>
          <Table.Head>Values</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(({ name, value }, index) => (
          <Table.Row key={`${name}-${index}`}>
            <Table.Cell style={{ whiteSpace: "nowrap" }}>
              <Code>{name}</Code>
            </Table.Cell>
            <Table.Cell style={{ whiteSpace: "nowrap" }}>
              {Array.isArray(value) ? (
                <Code>{value.map((val) => `"${val}"`).join(" | ")}</Code>
              ) : (
                value
              )}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
