import { Card } from "@rempi-ui/card";
import { styled } from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";
import { Typography } from "@rempi-ui/typography";
import { FC } from "react";

const StyledCardHeaderContainer = styled.div`
    gap: ${({ theme }) => theme.spaces[4]};
    width: 100%;
`;

type DashboardCardProps = {
    title: string;
    Icon: any;
    mainInfo: string;
    captionMainInfo: string;
}

export const DashboardCard: FC<DashboardCardProps> = ({ title, mainInfo, captionMainInfo, Icon }) => {
    return (
        <Card.Root>
            <Card.Header>
                <StyledCardHeaderContainer
                    as={Flex}
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Card.Title fontWeight="normal" fontSize="sm">
                        {title}
                    </Card.Title>
                    <Icon size={16} />
                </StyledCardHeaderContainer>
            </Card.Header>
            <Card.Content>
                <Flex flexDirection="column">
                    <Typography fontSize="xlg" fontWeight="semi-bold">
                        {mainInfo}
                    </Typography>
                    <Typography fontSize="xsm" fontWeight="tiny" color="low-contrast">
                        {captionMainInfo}
                    </Typography>
                </Flex>
            </Card.Content>
        </Card.Root>
    )
}