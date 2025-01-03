export function getMeta(
  title: string,
  description: string,
  ogType: string,
  path?: string
) {
  const url = !path ? `https://wakaapps.com/` : `https://wakaapps.com/${path}/`;
  return [
    { title: title },
    {
      property: "og:title",
      content: title,
    },
    {
      name: "description",
      content: description,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:type",
      content: ogType,
    },
    {
      property: "og:locale",
      content: "ja_JP",
    },
    {
      property: "og:site_name",
      content: "Waka blog sandbox.",
    },
    {
      property: "og:url",
      content: url,
    },
    {
      property: "og:image",
      content: "https://wakaapps.com/ava.webp",
    },
  ];
}
