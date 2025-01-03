import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVER_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});
