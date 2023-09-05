import { styled } from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";
import { Tabs } from "@rempi-ui/tabs";
import {
  CreditCardIcon,
  LineChartIcon,
  SearchIcon,
  TagIcon,
} from "lucide-react";
import { FC } from "react";
import { DashboardCard } from "./DashboardCards";
import { DashboardCostumerValue } from "./DashboardCostumerValue";
import { DashboardDeals } from "./DashboardDeals";
import { DashboardNPS } from "./DashboardNPS";

const StyledTabsList = styled.div`
  flex-wrap: wrap;
`;

const StyledCardContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spaces[4]};
  grid-template-columns: repeat(1, minmax(0, 1fr));

  ${({ theme }) => theme.breakpoints[1]} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.breakpoints[3]} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const StyledFlexFullWidth = styled.div`
  width: 100%;
`;

const StyledFlexFullWidthWithGap = styled(StyledFlexFullWidth)`
  gap: ${({ theme }) => theme.spaces[4]};
`;

const StyledFlexFullWidthWithGapAndFlexChild = styled(StyledFlexFullWidth)`
  gap: ${({ theme }) => theme.spaces[4]};

  > :first-child {
    flex: 2;
  }

  > :last-child {
    flex: 1;
  }
`;

const StyledContentGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[4]};

  ${({ theme }) => theme.breakpoints[2]} {
    gap: ${({ theme }) => theme.spaces[8]};
  }
`;

const cards: any[] = [
  {
    // i18n
    title: "Pesquisa de marca",
    mainInfo: "+5.540",
    Icon: SearchIcon,
    // i18n
    captionMainInfo: "+54.7% do mês passado",
  },
  {
    // i18n
    title: "Pedidos",
    mainInfo: "+5749",
    Icon: TagIcon,
    // i18n
    captionMainInfo: "+392.1% do mês passado",
  },
  {
    // i18n
    title: "Vendas",
    mainInfo: "+11.938",
    Icon: CreditCardIcon,
    // i18n
    captionMainInfo: "+30% do mês passado",
  },
  {
    // i18n
    title: "Ativos agora",
    mainInfo: "-1060",
    Icon: LineChartIcon,
    // i18n
    captionMainInfo: "-201 desde a última hora",
  },
];

export const DashboardTabs: FC = () => {
  return (
    <Tabs.Root value="overview">
      <StyledTabsList as={Tabs.List}>
        {/* i18n */}
        <Tabs.Trigger value="overview">Visão geral</Tabs.Trigger>
        <Tabs.Trigger value="analytics" disabled>
          {/* i18n */}
          Analytics
        </Tabs.Trigger>
        <Tabs.Trigger value="reports" disabled>
          {/* i18n */}
          Relatórios
        </Tabs.Trigger>
        <Tabs.Trigger value="notifications" disabled>
          {/* i18n */}
          Notificações
        </Tabs.Trigger>
      </StyledTabsList>
      <StyledContentGap as={Tabs.Content} value="overview">
        <StyledCardContainer>
          {cards.map((card) => (
            <DashboardCard key={card.title} {...card} />
          ))}
        </StyledCardContainer>
        <StyledFlexFullWidthWithGapAndFlexChild
          as={Flex}
          flexDirection={{
            "@initial": "column",
            "@2": "row",
          }}
        >
          <DashboardDeals />
          <StyledFlexFullWidthWithGap
            as={Flex}
            flexDirection="row"
            flexWrap="wrap"
          >
            <DashboardNPS />
            <DashboardCostumerValue />
          </StyledFlexFullWidthWithGap>
        </StyledFlexFullWidthWithGapAndFlexChild>
      </StyledContentGap>
    </Tabs.Root>
  );
};
