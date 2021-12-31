import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "hello--world",
  apiKey: process.env.API_KEY ?? "",
});
