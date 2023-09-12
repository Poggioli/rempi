import { Code } from "@rempi-ui/code";
import { styled } from "@rempi-ui/core";
import { Table } from "@rempi-ui/table";
import { useTranslations } from "next-intl";
import { FC } from "react";

type PropDef = {
  name: string;
  value: string | string[];
};

type DataReferenceProps = {
  data: PropDef[];
};

const StyledMarginTop = styled.div`
  margin-top: ${({ theme }) => theme.spaces[4]};
`;

export const DataReference: FC<DataReferenceProps> = ({ data }) => {
  const t = useTranslations("data-reference");

  return (
    <StyledMarginTop>
      <Table.Root striped={false}>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-100">{t("attr")}</Table.Head>
            <Table.Head>{t("value")}</Table.Head>
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
    </StyledMarginTop>
  );
};
