import { Flex } from "@rempi-ui/Flex";
import { HoverCard } from "@rempi-ui/hover-card";
import { Typography } from "@rempi-ui/typography";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const HoverCardPreview: FC = () => {
  const t = useTranslations("preview.hover-card");

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      style={{ padding: "var(--spaces-2)" }}
    >
      <HoverCard.Root>
        <HoverCard.Trigger>
          <a
            style={{
              cursor: "pointer",
              borderRadius: "var(--radii-pill)",
              display: "inline-block",
            }}
            href="https://twitter.com/_Poggioli"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              style={{
                display: "block",
                borderRadius: "var(--radii-pill)",
                width: "var(--spaces-11)",
                height: "var(--spaces-11)",
              }}
              src="https://pbs.twimg.com/profile_images/1639359724691808262/UErOMnL2_400x400.jpg"
              alt={t("img-profile-trigger", { value: "@_Poggioli" })}
            />
          </a>
        </HoverCard.Trigger>
        <HoverCard.Content style={{ maxWidth: 300 }}>
          <Flex flexDirection="column" style={{ gap: "var(--spaces-2)" }}>
            <img
              style={{
                display: "block",
                borderRadius: "var(--radii-pill)",
                width: "var(--spaces-15)",
                height: "var(--spaces-15)",
              }}
              src="https://pbs.twimg.com/profile_images/1639359724691808262/UErOMnL2_400x400.jpg"
              alt={t("img-profile-card", { value: "@_Poggioli" })}
            />
            <Flex flexDirection="column" style={{ gap: "var(--spaces-4)" }}>
              <Flex flexDirection="column">
                <Typography
                  as="h6"
                  color="high-contrast"
                  fontWeight="bold"
                  fontSize="md"
                  lineHeight={2}
                >
                  Poggioli
                </Typography>
                <Typography color="low-contrast" fontSize="sm" lineHeight={2}>
                  @_Poggioli
                </Typography>
              </Flex>
              <Typography color="high-contrast" fontSize="md" lineHeight={1}>
                Dev Frontend; A11Y web enthusiast; I love birds, especially my
                cockatiel; I love my angry girlfriend;
              </Typography>
              <Flex style={{ gap: "var(--spaces-4)" }} alignItems="center">
                <Flex style={{ gap: "var(--spaces-1)" }} alignItems="center">
                  <Typography
                    color="high-contrast"
                    fontWeight="bold"
                    fontSize="md"
                    lineHeight={2}
                  >
                    282
                  </Typography>
                  <Typography color="low-contrast" fontSize="sm" lineHeight={2}>
                    {t("followers")}
                  </Typography>
                </Flex>
                <Flex style={{ gap: "var(--spaces-1)" }} alignItems="center">
                  <Typography
                    color="high-contrast"
                    fontWeight="bold"
                    fontSize="md"
                    lineHeight={2}
                  >
                    454
                  </Typography>
                  <Typography color="low-contrast" fontSize="sm" lineHeight={2}>
                    {t("following")}
                  </Typography>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Root>
    </Flex>
  );
};
