import { FC } from "react";
import { Typography } from "@rempi-ui/typography";
import "./footer.scss";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <Typography as="p" fontSize="sm">
        Construído por{" "}
        <Typography
          as="a"
          href="https://twitter.com/_Poggioli"
          target="_blank"
          fontWeight="regular"
          className="footer__link"
        >
          Pogiolli
        </Typography>{" "}
        e muitos outros. O código esta disponível no{" "}
        <Typography
          as="a"
          href="https://github.com/Poggioli/rempi"
          target="_blank"
          fontWeight="regular"
          className="footer__link"
        >
          Github
        </Typography>
      </Typography>
    </footer>
  );
};
