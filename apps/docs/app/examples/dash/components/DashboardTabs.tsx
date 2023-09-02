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
  width: fit-content;
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
    title: "Branded search",
    mainInfo: "+5.540",
    Icon: SearchIcon,
    captionMainInfo: "+54.7% from last month",
  },
  {
    title: "Orders",
    mainInfo: "+5749",
    Icon: TagIcon,
    captionMainInfo: "+392.1% from last month",
  },
  {
    title: "Sales",
    mainInfo: "+11.938",
    Icon: CreditCardIcon,
    captionMainInfo: "+30% from last month",
  },
  {
    title: "Active Now",
    mainInfo: "-1060",
    Icon: LineChartIcon,
    captionMainInfo: "-201 since last hour",
  },
];

export const DashboardTabs: FC = () => {
  return (
    <Tabs.Root value="overview">
      <StyledTabsList as={Tabs.List}>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="analytics" disabled>
          Analytics
        </Tabs.Trigger>
        <Tabs.Trigger value="reports" disabled>
          Reports
        </Tabs.Trigger>
        <Tabs.Trigger value="notifications" disabled>
          Notifications
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
