// components/Header.tsx
import Link from "next/link";
import { cosmic } from "@/cosmic/client";
import { NavMenu } from "@/cosmic/blocks/navigation-menu/NavMenu";
import { CheckOut } from "@/cosmic/blocks/ecommerce/CheckOut";

export async function Header() {
  // Header data
  const { object: settings } = await cosmic.objects
    .findOne({
      type: "global-settings",
      slug: "settings",
    })
    .props("metadata")
    .depth(1);

  return (
    <div className="space-x-4 sticky top-0 bg-white/20 dark:bg-black/20 backdrop-blur-lg py-2 w-full z-[9999]">
      <div className="m-auto flex items-center md:container justify-between pl-2 pr-4">
        <Link href="/">
          <img
            src={`${settings.metadata.logo.imgix_url}?w=500&auto=format,compression`}
            alt={settings.metadata.company}
            className="h-10 m-auto dark:hidden"
          />
          <img
            src={`${settings.metadata.dark_logo.imgix_url}?w=500&auto=format,compression`}
            alt={settings.metadata.company}
            className="h-10 m-auto hidden dark:block"
          />
        </Link>
        <NavMenu query={{ type: "navigation-menus", slug: "header" }} />
        <CheckOut className="ml-4" productPath={"/shop"} />
      </div>
    </div>
  );
}
