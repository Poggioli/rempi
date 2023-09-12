import { styled } from "@rempi-ui/core";
import { Typography } from "@rempi-ui/typography";
import { useTranslations } from "next-intl";
import { FC } from "react";

const StyledTypographyP = styled.p`
  margin: ${({ theme }) => theme.spaces[2]} 0 ${({ theme }) => theme.spaces[4]}
    0;

  a,
  a:visited {
    color: ${({ theme }) => theme.colors.info9};
  }
`;

export const MoreInfo: FC<any> = ({
  componentName,
  componentLink,
  ...props
}) => {
  const t = useTranslations("more-info");

  return (
    <StyledTypographyP
      as={(props: any) => (
        <Typography {...props} as="p" color="low-contrast" fontSize="sm" />
      )}
      {...props}
    >
      {t("label")}
      <Typography
        as="a"
        href={componentLink}
        target="_blank"
        color="low-contrast"
        fontSize="sm"
      >
        {componentName}
      </Typography>
      .
    </StyledTypographyP>
  );
};
