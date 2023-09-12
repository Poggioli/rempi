import { Select } from "@rempi-ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useContext, useState } from "react";
import { VersionContext } from "@/components/VersionProvider/VersionProvider";
import { useTranslations } from "next-intl";

export const SelectVersion: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("select-version");

  const { versions } = useContext(VersionContext);

  if (versions.length <= 1) {
    return null;
  }

  const versionParamAsString = searchParams.get("v") as string;

  const initialVersionValue: string = versions.includes(versionParamAsString)
    ? versionParamAsString
    : versions[0];

  const [value, setValue] = useState<string>(initialVersionValue);

  const handleOnChangeValue = (newValue: string) => {
    setValue(newValue);
    if (newValue !== value) {
      const params = new URLSearchParams({
        v: newValue,
      });
      router.push(pathname.concat("?", params.toString()));
    }
  };

  return (
    <Select.Root value={value} onValueChange={handleOnChangeValue}>
      <Select.Trigger aria-label={t("aria-label")}>
        <Select.Value placeholder={t("placeholder")} />
      </Select.Trigger>
      <Select.Content>
        <Select.Viewport>
          {versions.map((version, index) => (
            <Select.Item key={version} value={version}>
              {version} {index === 0 ? t("latest") : null}
            </Select.Item>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};
