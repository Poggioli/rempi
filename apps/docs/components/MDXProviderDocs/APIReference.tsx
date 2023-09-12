import { IconButton } from "@rempi-ui/button";
import { Code } from "@rempi-ui/code";
import { styled } from "@rempi-ui/core";
import { Popover } from "@rempi-ui/popover";
import { Table } from "@rempi-ui/table";
import { Typography } from "@rempi-ui/typography";
import { HelpCircleIcon, Minus } from "lucide-react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("api-reference");

  return (
    <StyledMarginTop>
      <Table.Root striped={false}>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-100">{t("props")}</Table.Head>
            <Table.Head>{t("type")}</Table.Head>
            <Table.Head>{t("default-value")}</Table.Head>
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
                        <IconButton
                          aria-label={t("help-label-description")}
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
                        <IconButton
                          aria-label={t("help-label-type")}
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
