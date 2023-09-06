import { IconButton } from "@rempi-ui/button";
import { Code } from "@rempi-ui/code";
import { styled } from "@rempi-ui/core";
import { Popover } from "@rempi-ui/popover";
import { Table } from "@rempi-ui/table";
import { Typography } from "@rempi-ui/typography";
import { HelpCircleIcon, Minus } from "lucide-react";
import { FC } from "react";

type PropDef = {
  name: string;
  required?: boolean;
  defaultValue?: string | boolean;
  type?: string;
  typeSimple: string;
  description?: string | React.ReactNode;
};

type APIReferenceProps = {
  data: PropDef[];
};

const StyledMarginTop = styled.div`
  margin-top: ${({ theme }) => theme.spaces[4]};
`;

export const APIReference: FC<APIReferenceProps> = ({ data }) => {
  return (
    <StyledMarginTop>
      <Table.Root striped={false}>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-100">Props</Table.Head>
            {/* i18n */}
            <Table.Head>Tipo</Table.Head>
            {/* i18n */}
            <Table.Head>Valor padrão</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(
            (
              { name, required, defaultValue, type, typeSimple, description },
              index
            ) => (
              <Table.Row key={`${name}-${index}`}>
                <Table.Cell style={{ whiteSpace: "nowrap" }}>
                  <Code>
                    {name}
                    {required ? "*" : null}
                  </Code>
                  {description && (
                    <Popover.Root>
                      <Popover.Trigger>
                        {/* i18n */}
                        <IconButton
                          aria-label="Descrição da prop"
                          variant="text"
                          size="small"
                          style={{ verticalAlign: "middle" }}
                        >
                          <HelpCircleIcon size={14} />
                        </IconButton>
                      </Popover.Trigger>
                      <Popover.Content
                        side="top"
                        align="center"
                        style={{ maxWidth: 350 }}
                        onOpenAutoFocus={(event) => {
                          event.preventDefault();
                          (event.currentTarget as HTMLElement)?.focus();
                        }}
                      >
                        <Typography as="div" variant="body2" fontSize="sm">
                          {description}
                        </Typography>
                      </Popover.Content>
                    </Popover.Root>
                  )}
                </Table.Cell>
                <Table.Cell style={{ whiteSpace: "nowrap" }}>
                  <Code>{Boolean(typeSimple) ? typeSimple : type}</Code>
                  {Boolean(typeSimple) && Boolean(type) && (
                    <Popover.Root>
                      <Popover.Trigger>
                        {/* i18n */}
                        <IconButton
                          aria-label="Ver a tipagem completa"
                          variant="text"
                          size="small"
                          style={{ verticalAlign: "middle" }}
                        >
                          <HelpCircleIcon size={14} />
                        </IconButton>
                      </Popover.Trigger>
                      <Popover.Content
                        side="top"
                        align="center"
                        style={{ maxWidth: 600 }}
                      >
                        <Code
                          style={{ whiteSpace: "pre-line", display: "block" }}
                        >
                          {type}
                        </Code>
                      </Popover.Content>
                    </Popover.Root>
                  )}
                </Table.Cell>
                <Table.Cell style={{ whiteSpace: "nowrap" }}>
                  {Boolean(defaultValue) ? (
                    <Code>{defaultValue}</Code>
                  ) : (
                    <Minus size={14} />
                  )}
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table.Root>
    </StyledMarginTop>
  );
};
