import { Service } from "encore.dev/service";
import { CacheCluster, StringKeyspace } from "encore.dev/storage/cache";

export const cluster = new CacheCluster("default", { evictionPolicy: "allkeys-lru" });

export const testKeyspace = new StringKeyspace<{ key: string }>(cluster, {
  keyPattern: "test/:key",
});

export default new Service("cache");