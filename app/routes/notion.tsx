import { useLoaderData } from "react-router";
import { Row } from "~/components/notion/Row";
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

  return (
    <div>
      {response?.results.map((notionPage) => (
        <Row key={notionPage.id} notionPage={notionPage} />
      ))}
    </div>
  );
}
