import { Flex } from "@rempi-ui/Flex";
import { Table } from "@rempi-ui/table";
import { FC } from "react";

export const TablePreview: FC = () => {
  const INVOICES = [
    {
      invoice: "INV001",
      paymentStatus: "Pago",
      totalAmount: "$250.00",
      paymentMethod: "Cartão de crédito",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pendente",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Pagamento pendente",
      totalAmount: "$350.00",
      paymentMethod: "Transferência bancária",
    },
    {
      invoice: "INV004",
      paymentStatus: "Pago",
      totalAmount: "$450.00",
      paymentMethod: "Cartão de crédito",
    },
    {
      invoice: "INV005",
      paymentStatus: "Pago",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pendente",
      totalAmount: "$200.00",
      paymentMethod: "Transferência bancária",
    },
    {
      invoice: "INV007",
      paymentStatus: "Pagamento pendente",
      totalAmount: "$300.00",
      paymentMethod: "Cartão de crédito",
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
        {/* i18n */}
        <Table.Caption>Uma lista de suas faturas recentes.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head
              style={{
                width: 100,
              }}
            >
              {/* i18n */}
              Fatura
            </Table.Head>
            {/* i18n */}
            <Table.Head>Status</Table.Head>
            {/* i18n */}
            <Table.Head>Método</Table.Head>
            <Table.Head
              style={{
                textAlign: "right",
              }}
            >
              {/* i18n */}
              Quantia
            </Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {INVOICES.map((invoice) => (
            <Table.Row key={invoice.invoice}>
              <Table.Cell
                style={{
                  fontWeight: "var(--font-weights-3)",
                }}
              >
                {invoice.invoice}
              </Table.Cell>
              <Table.Cell>{invoice.paymentStatus}</Table.Cell>
              <Table.Cell>{invoice.paymentMethod}</Table.Cell>
              <Table.Cell
                style={{
                  textAlign: "right",
                }}
              >
                {invoice.totalAmount}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
};
