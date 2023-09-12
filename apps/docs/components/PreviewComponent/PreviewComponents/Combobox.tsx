import { Combobox } from "@rempi-ui/combobox";
import { Flex } from "@rempi-ui/flex";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const ComboboxPreview: FC = () => {
  const t = useTranslations("preview.combobox");

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Combobox.Root>
        <Combobox.Trigger>
          <Combobox.Value placeholder={t("trigger-placeholder")} />
        </Combobox.Trigger>
        <Combobox.Content condensed={false}>
          <Combobox.Input placeholder={t("input-placeholder")} />
          <Combobox.Empty>{t("not-found")}</Combobox.Empty>
          <Combobox.Label>Backend</Combobox.Label>
          <Combobox.Item value="spring-boot">SpringBoot</Combobox.Item>
          <Combobox.Item value="django" disabled>
            Django
          </Combobox.Item>
          <Combobox.Item value="laravel">Laravel</Combobox.Item>
          <Combobox.Item value="express-js">Express.js</Combobox.Item>
          <Combobox.Item value="ruby-on-rails">Ruby on Rails</Combobox.Item>
          <Combobox.Separator />
          <Combobox.Label>Frontend</Combobox.Label>
          <Combobox.Item value="next-js">Next.js</Combobox.Item>
          <Combobox.Item value="svelte-kit">SvelteKit</Combobox.Item>
          <Combobox.Item value="remix">Remix</Combobox.Item>
          <Combobox.Item value="astro">Astro</Combobox.Item>
        </Combobox.Content>
      </Combobox.Root>
    </Flex>
  );
};
