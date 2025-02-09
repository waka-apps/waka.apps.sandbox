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

  const sourceUrl = notionPage.properties.URL.url;

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
    <article key={notionPage.id} className="mr-0 md:mr-8 pt-8 border-b border-gray-200">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
        <blockquote className="relative">
          <div className="relative z-10">
            <span className="absolute -left-4 -top-4 text-6xl text-gray-200">"</span>
            <p className="relative z-20 text-xl text-gray-700 leading-relaxed pl-6 italic">{getContent()}</p>
          </div>

          <footer className="mt-4">
            <div className="text-right">
              {sourceUrl ? (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  ― {getTitle()}
                </a>
              ) : (
                <cite className="text-gray-600">― {getTitle()}</cite>
              )}
            </div>
            <div className="text-sm text-gray-500 mt-2 text-right">{formatDate()}</div>
          </footer>
        </blockquote>
      </div>
    </article>
  );
});

Row.displayName = "NotionPost";
