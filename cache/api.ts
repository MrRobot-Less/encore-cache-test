// cache/api.ts  
import { api } from "encore.dev/api";
import { testKeyspace } from "./encore.service";

export const set = api(
  { expose: true, method: "GET", path: "/cache/set" },
  async (): Promise<{ ok: boolean }> => {
    await testKeyspace.set({ key: "ping" }, "pong");
    return { ok: true };
  }
);