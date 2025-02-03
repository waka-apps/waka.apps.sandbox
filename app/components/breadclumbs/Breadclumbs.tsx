import { Link, useLocation } from "react-router";

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x: string) => x);

  return (
    <nav className="flex pt-4 text-sm">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
        </li>
        {pathnames.map((name: string, index: number) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {isLast ? (
                <span className="text-gray-900 font-medium">{name}</span>
              ) : (
                <Link to={routeTo} className="text-gray-600 hover:text-gray-900">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
