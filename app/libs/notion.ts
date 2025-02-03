import { Client } from "@notionhq/client";
import type { NotionResponse } from "../types/notion";

const NOTION_API_KEY = import.meta.env.VITE_NOTION_API_KEY;
const NOTION_DATABASE_ID = import.meta.env.VITE_NOTION_DATABASE_ID;

if (!NOTION_API_KEY) {
  throw new Error("NOTION_API_KEY is not defined");
}

if (!NOTION_DATABASE_ID) {
  throw new Error("NOTION_DATABASE_ID is not defined");
}

const notion = new Client({
  auth: NOTION_API_KEY,
});

export async function fetchNotionPages(): Promise<NotionResponse> {
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    sorts: [
      {
        property: "日付",
        direction: "descending",
      },
    ],
  });

  return response as NotionResponse;
}
