import { api } from "encore.dev/api";
import { CacheCluster, StringKeyspace } from "encore.dev/storage/cache";

export const cluster = new CacheCluster("default", { evictionPolicy: "allkeys-lru" });

export const testKeyspace = new StringKeyspace<{ key: string }>(cluster, {
  keyPattern: "test/:key",
});

export const set = api(
  { expose: true, method: "GET", path: "/cache/set" },
  async (): Promise<{ ok: boolean }> => {
    await testKeyspace.set({ key: "ping" }, "pong");
    return { ok: true };
  }
);