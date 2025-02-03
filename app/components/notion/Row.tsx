import { format } from "@formkit/tempo";
import { memo } from "react";
import type { FC } from "react";
import type { NotionPage } from "~/types/notion";

type Props = {
  notionPage: NotionPage;
};

export const Row: FC<Props> = memo(({ notionPage }: Props) => {
  const formatDate = () => {
    const date = notionPage.properties.CreatedAt.created_time;
    if (!date) return "";
    return format(date, { date: "full", time: "short" }, "ja");
  };

  const getTitle = () => {
    const rechText = notionPage.properties.SourceTitle.title;
    if (rechText.length > 0) {
      return rechText[0].plain_text;
    }
    return "";
  };

  const getContent = () => {
    const rechText = notionPage.properties.QuoteText.rich_text;
    if (rechText.length > 0) {
      return rechText[0].plain_text;
    }
    return "";
  };

  return (
    <article key={notionPage.id} className="mr-0 md:mr-8  pt-8 border-b border-gray-200">
      <div className="mb-1">
        <time dateTime={`${formatDate()}`} className="text-xs text-gray-600">
          {formatDate()}
        </time>
      </div>
      <h2 className="text-xl font-bold mb-2">{getTitle()}</h2>
      <div className="h-13 mb-6 overflow-hidden line-clamp-2">{getContent()}</div>
    </article>
  );
});

Row.displayName = "NotionPost";
