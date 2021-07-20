import { createClient } from "microcms-js-sdk";

export const client = createClient({
  // serviceDomain: process.env.SERVICE_DOMAIN ? process.env.SERVICE_DOMAIN : "",
  // apiKey: process.env.API_KEY ? process.env.API_KEY : "",

  // serviceDomain: process.env.SERVICE_DOMAIN ? process.env.SERVICE_DOMAIN : "",
  // apiKey: process.env.API_KEY,

  // serviceDomain: process.env.SERVICE_DOMAIN || "",

  serviceDomain: "gabutech",
  apiKey: "e7d6b26b-b4e6-4459-87a8-07235e2c97de",
});
