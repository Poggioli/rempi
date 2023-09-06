import { styled } from "@rempi-ui/core";
import { Separator } from "@rempi-ui/separator";
import { Typography } from "@rempi-ui/typography";
import { FC } from "react";

const StyledSeparator = styled.div`
  margin: ${({ theme }) => theme.spaces[8]} 0;
  max-width: 50%;
`;

type EditThisPageProps = {
  url: string;
};

export const EditThisPage: FC<EditThisPageProps> = ({ url }) => {
  const href = `https://github.com/Poggioli/rempi/edit/docs/apps/docs/documentations/${url}`;

  return (
    <>
      <StyledSeparator as={Separator} />
      {/* i18n */}
      <Typography
        as="a"
        href={href}
        target="_blank"
        variant="body2"
        color="low-contrast"
      >
        Edite esta página no Github.
      </Typography>
    </>
  );
};
