import { cosmic } from "@/cosmic/client";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/cosmic/elements/Select";

import locales from "@/cosmic/blocks/localization/locales.json";

export async function LocalizationSelect({
  defaultLocale,
  linkPath,
}: {
  defaultLocale: string;
  linkPath: string;
}) {
  // Localization switch
  const { object_type } = await cosmic.objectTypes.findOne("blog-posts");
  const localeData = locales.filter((l) => defaultLocale === l.code)[0];
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`${localeData.flag} ${localeData.title}`} />
      </SelectTrigger>
      <SelectContent>
        {object_type.locales.map((locale: string) => {
          const localeData = locales.filter((l) => locale === l.code)[0];
          return (
            <Link
              className="block p-2"
              key={locale}
              href={linkPath.replace("[locale]", locale)}
            >
              {`${localeData.flag} ${localeData.title}`}
            </Link>
          );
        })}
      </SelectContent>
    </Select>
  );
}
