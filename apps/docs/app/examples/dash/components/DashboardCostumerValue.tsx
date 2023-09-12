import { Card } from "@rempi-ui/card";
import { styled } from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";
import { Typography } from "@rempi-ui/typography";
import { useTranslations } from "next-intl";
import { FC } from "react";

const StyledNPS = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[11]};
`;

const StyledLineHeight1 = styled.span`
  line-height: 1;
`;

const StyledCardRoot = styled.div`
  width: 100%;
`;

export const DashboardCostumerValue: FC = () => {
  const t = useTranslations("dashboard-customers");

  return (
    <StyledCardRoot as={Card.Root}>
      <Card.Header>
        <Card.Title>{t("customers")}</Card.Title>
      </Card.Header>
      <Card.Content
        flexDirection={{
          "@initial": "column",
          "@1": "row",
          "@2": "column",
        }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Flex flexDirection="column" alignItems="center">
          <StyledLineHeight1
            as={Typography}
            fontSize="xlg"
            fontWeight="semi-bold"
          >
            $<StyledNPS as={StyledLineHeight1}>781</StyledNPS>
          </StyledLineHeight1>
          <Typography variant="body2" color="low-contrast">
            LTV
          </Typography>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <StyledLineHeight1
            as={Typography}
            fontSize="xlg"
            fontWeight="semi-bold"
          >
            $<StyledNPS as={StyledLineHeight1}>345</StyledNPS>
          </StyledLineHeight1>
          <Typography variant="body2" color="low-contrast">
            CAC
          </Typography>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <StyledLineHeight1
            as={Typography}
            fontSize="xlg"
            fontWeight="semi-bold"
          >
            <StyledNPS as={StyledLineHeight1}>18{" "}</StyledNPS>
            {t("month")}
          </StyledLineHeight1>
          <Typography variant="body2" color="low-contrast">
            {t("avg-life-time")}
          </Typography>
        </Flex>
      </Card.Content>
    </StyledCardRoot>
  );
};
