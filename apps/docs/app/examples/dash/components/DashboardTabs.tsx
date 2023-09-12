import { styled } from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";
import { Tabs } from "@rempi-ui/tabs";
import {
  CreditCardIcon,
  LineChartIcon,
  SearchIcon,
  TagIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
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
    title: (index: number) => `cards.${index}.title`,
    mainInfo: "+5.540",
    Icon: SearchIcon,
    captionMainInfo: (index: number) => `cards.${index}.caption`,
    value: "+54.7%",
  },
  {
    title: (index: number) => `cards.${index}.title`,
    mainInfo: "+5749",
    Icon: TagIcon,
    captionMainInfo: (index: number) => `cards.${index}.caption`,
    value: "+392.1%",
  },
  {
    title: (index: number) => `cards.${index}.title`,
    mainInfo: "+11.938",
    Icon: CreditCardIcon,
    captionMainInfo: (index: number) => `cards.${index}.caption`,
    value: "+30%",
  },
  {
    title: (index: number) => `cards.${index}.title`,
    mainInfo: "1060",
    Icon: LineChartIcon,
    captionMainInfo: (index: number) => `cards.${index}.caption`,
    value: "-201",
  },
];

export const DashboardTabs: FC = () => {
  const t = useTranslations("dashboard-tabs");

  return (
    <Tabs.Root value="overview">
      <StyledTabsList as={Tabs.List}>
        <Tabs.Trigger value="overview">{t("overview")}</Tabs.Trigger>
        <Tabs.Trigger value="analytics" disabled>
          {t("analytics")}
        </Tabs.Trigger>
        <Tabs.Trigger value="reports" disabled>
          {t("reports")}
        </Tabs.Trigger>
        <Tabs.Trigger value="notifications" disabled>
          {t("notifications")}
        </Tabs.Trigger>
      </StyledTabsList>
      <StyledContentGap as={Tabs.Content} value="overview">
        <StyledCardContainer>
          {cards.map(({ title, captionMainInfo, value, ...card }, index) => (
            <DashboardCard
              key={card.title}
              {...card}
              title={t(title(index))}
              captionMainInfo={t(captionMainInfo(index), { value })}
            />
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
