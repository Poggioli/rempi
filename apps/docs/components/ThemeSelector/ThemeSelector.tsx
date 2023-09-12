import { Select } from "@rempi-ui/select";
import { ThemeProviderContext } from "app/ThemeProvider";
import { MoonStar, Palette, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC, useContext, useEffect, useState } from "react";
import { StyledTrigger } from "./ThemeSelector.styles";

const themes: Record<string, any> = {
  "dark-theme": <MoonStar size={20} />,
  "indigo-pink-theme": <Sun size={20} />,
};

export const ThemeSelector: FC = () => {
  const t = useTranslations("theme-selector");
  const { setTheme, availableThemes } = useContext(ThemeProviderContext);
  const [theme, setSelectTheme] = useState(
    localStorage.getItem("theme") ?? "indigo-pink-theme"
  );

  const handleSelectTheme = (value: string) => {
    localStorage.setItem("theme", value);
    setSelectTheme(value);
    setTheme(
      availableThemes.find(
        (availableTheme) => availableTheme.toString() === value
      ) ?? availableThemes[0]
    );
  };

  useEffect(() => {
    setTheme(
      availableThemes.find(
        (availableTheme) => availableTheme.toString() === theme
      ) ?? availableThemes[0]
    );
  }, []);

  return (
    <Select.Root value={theme} onValueChange={handleSelectTheme}>
      <StyledTrigger as={Select.Trigger} aria-label={t("label")}>
        <Select.Value placeholder={<Palette size={20} />}>
          {themes[theme]}
        </Select.Value>
        <Select.Content>
          <Select.Viewport>
            <Select.Item value="dark-theme">{t("items.0")}</Select.Item>
            <Select.Item value="indigo-pink-theme">{t("items.1")}</Select.Item>
          </Select.Viewport>
        </Select.Content>
      </StyledTrigger>
    </Select.Root>
  );
};
