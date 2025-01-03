import { Outlet, type MetaFunction } from "react-router";
import { ContentHeader } from "~/components/header/ContentlHeader";
import { StickyMenu } from "~/components/header/StickyMenu";
import { MobileProfile } from "~/components/profile/MobileProfile";
import { getMeta } from "~/libs/meta";
import { BLOG_TITLE } from "~/root";

export const meta: MetaFunction = () => {
  return getMeta(
    BLOG_TITLE,
    "富山在住のプログラマーwaka.appsによる個人ブログ。技術のこと、食べたもののこと、見たドラマのこと、子育てのこと、その他諸々を記録する雑多なブログです。",
    "website"
  );
};

export default function Layout() {
  return (
    <>
      <ContentHeader title={BLOG_TITLE} />
      <div className="md:hidden">
        <MobileProfile />
      </div>
      <div className="hidden md:block">
        <StickyMenu />
      </div>
      <div className="space-y-0">
        <Outlet />
      </div>
    </>
  );
}
