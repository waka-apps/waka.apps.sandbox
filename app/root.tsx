import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "react-router";
import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import { client } from "./libs/client.server";
import type { Category } from "./types/category";
import { getMonthListFromStartToDate } from "./helper/getMonthListFromStartToDate";
import type { Post } from "./types/post";
import { Profile } from "./components/profile/Profile";
import { Footer } from "./components/footer/Footer";

export const BLOG_TITLE = "Waka sandbox.";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Sawarabi+Gothic&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
];

export const loader = async () => {
  const categories = await client.getList<Category>({
    endpoint: "categories",
    queries: {
      limit: 100, // NOTE 100がmicroCMSのAPIで一度に取得できる最大数
      orders: "-name",
    },
  });

  const months = getMonthListFromStartToDate("2024-04");

  const getPosts = months.map(async (month) => {
    const data = await client.getList<Post>({
      endpoint: "blog",
      queries: {
        limit: 100,
        filters: `publishedAt[begins_with]${month}`,
      },
    });
    return {
      totalCount: data.totalCount,
      month: month,
    };
  });

  const monthlyPosts = await Promise.all(getPosts);

  return {
    categories,
    monthlyPosts,
    gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID,
  };
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { categories, monthlyPosts } = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-auto">
        <section className="mx-auto max-w-6xl md:px-4 xl:px-0">
          <div className="flex">
            <div className="w-screen md:w-2/3 md:border-r border-gray-200 px-8 md:px-0">
              <Outlet />
            </div>
            <div className="hidden md:block md:w-1/3 sticky top-0 h-full">
              <Profile categories={categories.contents} monthlyPosts={monthlyPosts} />
            </div>
          </div>
        </section>
      </div>
      <Footer title={BLOG_TITLE} />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
