import createClient from "openapi-fetch";
import type { paths } from "./schema";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const CLIENT = createClient<paths>({
  baseUrl: apiUrl,
  headers: { "api-key": apiKey },
});
