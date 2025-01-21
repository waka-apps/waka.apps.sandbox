import { Link } from "react-router";
import { useState } from "react";
import type { FC } from "react";
import type { Category } from "~/types/category";

type Props = {
  categories: Category[];
};

export const Categories: FC<Props> = ({ categories }: Props) => {
  // const getCategories = async (): Promise<CategoriesResponse> => {
  //   const res = await fetch(`/categories`);
  //   return res.json();
  // };
  // const query = useQuery({ queryKey: ["todos"], queryFn: getCategories });

  const [loadMore, setLoadMoew] = useState(false);

  const handleLoadMore = () => {
    setLoadMoew(!loadMore);
  };

  return (
    <>
      <p className="mb-4">Categories</p>
      {categories
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, loadMore ? 100 : 10)
        .map((category) => (
          <a
            href={`${import.meta.env.VITE_MAIN_SITE_URL}/categories/${category.id}`}
            key={category.id}
            className="text-gray-600 text-sm pl-2 pb-2 block"
          >
            {category.name}
          </a>
        ))}
      <button
        className="text-gray-600 text-sm pl-4 pb-2 font-bold cursor-pointer bg-transparent border-none p-0"
        onClick={handleLoadMore}
      >
        {loadMore ? "Hide extra" : `See all (${categories.length})`}
      </button>
      {/* TODO タグ毎のblog数表示 */}
      {/* TODO n個以上でsee all表示、タグ一覧ページ追加 */}
    </>
  );
};
