import { useLoaderData } from "react-router";
import { fetchNotionPages } from "~/libs/notion";

export async function loader() {
  try {
    const response = await fetchNotionPages();

    return { response };
  } catch (error) {
    console.error("Error fetching Notion pages:", error);
    return { error: "Failed to load Notion pages" };
  }
}

export function meta() {
  return [{ title: "Notion Posts" }, { name: "description", content: "Notionから取得した投稿一覧" }];
}

export default function NotionSample() {
  const { response, error } = useLoaderData<typeof loader>();

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return <div>{JSON.stringify(response)}</div>;
}
