import { styled } from "@rempi-ui/core";
import { Tabs } from "@rempi-ui/tabs";
import { DollarSignIcon, UsersIcon, CreditCardIcon, LineChartIcon } from "lucide-react";
import { FC } from "react";
import { DashboardCard } from "./DashboardCards";

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
            <Tabs.Content value="overview">
                <StyledCardContainer>
                    {[
                        {
                            title: 'Total Revenue',
                            mainInfo: "$45,231.89",
                            Icon: DollarSignIcon,
                            captionMainInfo: '+20.1% from last month'
                        },
                        {
                            title: 'Subscriptions',
                            mainInfo: "+2350",
                            Icon: UsersIcon,
                            captionMainInfo: '+180.1% from last month'
                        },
                        {
                            title: 'Sales',
                            mainInfo: "+12,234",
                            Icon: CreditCardIcon,
                            captionMainInfo: '+19% from last month'
                        },
                        {
                            title: 'Active Now',
                            mainInfo: "+573",
                            Icon: LineChartIcon,
                            captionMainInfo: '+201 since last hour'
                        }
                    ].map((card) => <DashboardCard {...card} />)}
                </StyledCardContainer>
            </Tabs.Content>
        </Tabs.Root>
    )
}