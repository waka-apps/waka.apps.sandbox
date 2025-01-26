import { convert } from "html-to-text";

export function htmlToText(html: string): string {
  const text = convert(html, {
    wordwrap: false,
  });

  return text;
}
