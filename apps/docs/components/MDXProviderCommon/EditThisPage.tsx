import { styled } from "@rempi-ui/core";
import { Separator } from "@rempi-ui/separator";
import { Typography } from "@rempi-ui/typography";
import { useTranslations } from "next-intl";
import { FC } from "react";

const StyledSeparator = styled.div`
  margin: ${({ theme }) => theme.spaces[8]} 0;
  max-width: 50%;
`;

type EditThisPageProps = {
  url: string;
};

export const EditThisPage: FC<EditThisPageProps> = ({ url }) => {
  const href = `https://github.com/Poggioli/rempi/edit/main/apps/docs/documentations/${url}`;
  const t = useTranslations("edit-this-page");

  return (
    <>
      <StyledSeparator as={Separator} />
      <Typography
        as="a"
        href={href}
        target="_blank"
        variant="body2"
        color="low-contrast"
      >
        {t("label")}
      </Typography>
    </>
  );
};
