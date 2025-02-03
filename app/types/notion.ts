export type NotionResponse = {
  object: "list";
  results: NotionPage[];
  next_cursor: string | null;
  has_more: boolean;
  type: "page_or_database";
  page_or_database: Record<string, never>;
  request_id: string;
};

export type NotionPage = {
  object: "page";
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUser;
  last_edited_by: NotionUser;
  cover: null;
  icon: null;
  parent: {
    type: "database_id";
    database_id: string;
  };
  archived: boolean;
  in_trash: boolean;
  properties: {
    URL: {
      id: string;
      type: "url";
      url: string | null;
    };
    日付: {
      id: string;
      type: "date";
      date: string | null;
    };
    SourceTitle: {
      id: "title";
      type: "title";
      title: NotionRichText[];
    };
  };
  url: string;
  public_url: string | null;
};

type NotionUser = {
  object: "user";
  id: string;
};

type NotionRichText = {
  type: "text";
  text: {
    content: string;
    link: string | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
};
