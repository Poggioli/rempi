import { Flex } from "@rempi-ui/flex";
import { Table } from "@rempi-ui/table";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const TablePreview: FC = () => {
  const t = useTranslations("preview.table");

  const INVOICES = [
    {
      invoice: "INV001",
      paymentStatus: t("invoices.0.payment-status"),
      totalAmount: "$250.00",
      paymentMethod: t("invoices.0.payment-method"),
    },
    {
      invoice: "INV002",
      paymentStatus: t("invoices.1.payment-status"),
      totalAmount: "$150.00",
      paymentMethod: t("invoices.1.payment-method"),
    },
    {
      invoice: "INV003",
      paymentStatus: t("invoices.2.payment-status"),
      totalAmount: "$350.00",
      paymentMethod: t("invoices.2.payment-method"),
    },
    {
      invoice: "INV004",
      paymentStatus: t("invoices.3.payment-status"),
      totalAmount: "$450.00",
      paymentMethod: t("invoices.3.payment-method"),
    },
    {
      invoice: "INV005",
      paymentStatus: t("invoices.4.payment-status"),
      totalAmount: "$550.00",
      paymentMethod: t("invoices.4.payment-method"),
    },
    {
      invoice: "INV006",
      paymentStatus: t("invoices.5.payment-status"),
      totalAmount: "$200.00",
      paymentMethod: t("invoices.5.payment-method"),
    },
    {
      invoice: "INV007",
      paymentStatus: t("invoices.6.payment-status"),
      totalAmount: "$300.00",
      paymentMethod: t("invoices.6.payment-method"),
    },
  ];

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      style={{ padding: "var(--spaces-2)" }}
    >
      <Table.Root>
        <Table.Caption>{t("caption")}</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head
              style={{
                width: 100,
              }}
            >
              {t("invoice-header")}
            </Table.Head>
            <Table.Head>{t("status-header")}</Table.Head>
            <Table.Head>{t("method-header")}</Table.Head>
            <Table.Head
              style={{
                textAlign: "right",
              }}
            >
              {t("value-header")}
            </Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {INVOICES.map(
            ({ invoice, paymentStatus, paymentMethod, totalAmount }) => (
              <Table.Row key={invoice}>
                <Table.Cell
                  style={{
                    fontWeight: "var(--font-weights-3)",
                  }}
                >
                  {invoice}
                </Table.Cell>
                <Table.Cell>{paymentStatus}</Table.Cell>
                <Table.Cell>{paymentMethod}</Table.Cell>
                <Table.Cell
                  style={{
                    textAlign: "right",
                  }}
                >
                  {totalAmount}
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
};
