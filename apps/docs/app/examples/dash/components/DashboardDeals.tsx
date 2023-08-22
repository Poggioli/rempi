import { Avatar } from "@rempi-ui/avatar";
import { Card } from "@rempi-ui/card";
import { styled } from "@rempi-ui/core";
import { Table } from "@rempi-ui/table";
import { FC } from "react";

const data: any[] = [
  {
    img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?&w=128&h=128&dpr=2&q=80",
    name: "Boval Deun",
    amount: 94445,
    bestAmount: 94445,
  },
  {
    img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?&w=128&h=128&dpr=2&q=80",
    name: "Fexea Faogoul",
    amount: 15066,
    bestAmount: 37283,
  },
  {
    img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?&w=128&h=128&dpr=2&q=80",
    name: "Deifurun Soyer",
    amount: 64602,
    bestAmount: 70291,
  },
  {
    img: "https://images.unsplash.com/photo-1528892952291-009c663ce843?&w=128&h=128&dpr=2&q=80",
    name: "Wafuiorr Muduru",
    amount: 40227,
    bestAmount: 40227,
  },
  {
    img: "https://images.unsplash.com/photo-1687360440667-493016988a1a?&w=128&h=128&dpr=2&q=80",
    name: "Tanar Guirs",
    amount: 36830,
    bestAmount: 50391,
  },
  {
    img: "https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?&w=128&h=128&dpr=2&q=80",
    name: "Siuha Enray",
    amount: 84783,
    bestAmount: 84783,
  },
  {
    img: "https://images.unsplash.com/photo-1596075780750-81249df16d19?&w=128&h=128&dpr=2&q=80",
    name: "Wibae Taciaxea",
    amount: 23964,
    bestAmount: 63934,
  },
];

const StyledFullWidth = styled.div`
  width: 100%;
`;

const StyledRightAlign = styled.div`
  text-align: right;
`;

const StyledCenterAlign = styled.div`
  text-align: center;
`;

const StyledWidth80 = styled(StyledCenterAlign)`
  width: 80px;
`;

export const DashboardDeals: FC = () => {
  const orderedData = data.sort(
    (dataOne, dataTwo) => dataTwo.amount - dataOne.amount
  );

  return (
    <StyledFullWidth as={Card.Root}>
      <Card.Header>
        <Card.Title fontWeight="regular" fontSize="lg">
          Biggest deals this month
        </Card.Title>
      </Card.Header>
      <Card.Content>
        <StyledFullWidth as={Table.Root} condensed striped>
          <Table.Header>
            <StyledWidth80 as={Table.Head}>#</StyledWidth80>
            <Table.Head>Name</Table.Head>
            <StyledRightAlign as={Table.Head}>Deal value</StyledRightAlign>
            <StyledRightAlign as={Table.Head}>Best deal value</StyledRightAlign>
          </Table.Header>
          <Table.Body>
            {orderedData.map(({ img, name, amount, bestAmount }) => (
              <Table.Row>
                <StyledWidth80 as={Table.Cell}>
                  <Avatar.Root size="small">
                    <Avatar.Image src={img} />
                    <Avatar.Fallback delayMs={600}>
                      {name
                        .split(" ")
                        .map((word: string) => word[0])
                        .slice(0, 1)
                        .join("")}
                    </Avatar.Fallback>
                  </Avatar.Root>
                </StyledWidth80>
                <Table.Cell>{name}</Table.Cell>
                <StyledRightAlign as={Table.Cell}>$ {amount}</StyledRightAlign>
                <StyledRightAlign as={Table.Cell}>
                  $ {bestAmount}
                </StyledRightAlign>
              </Table.Row>
            ))}
          </Table.Body>
        </StyledFullWidth>
      </Card.Content>
    </StyledFullWidth>
  );
};
