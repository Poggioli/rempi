import { Flex } from "@rempi-ui/Flex";
import { Table } from "@rempi-ui/table";
import { FC } from "react";

export const TablePreview: FC = () => {
  const INVOICES = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
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
        <Table.Caption>A list of your recent invoices.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head
              style={{
                width: 100,
              }}
            >
              Invoice
            </Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head
              style={{
                textAlign: "right",
              }}
            >
              Amount
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
