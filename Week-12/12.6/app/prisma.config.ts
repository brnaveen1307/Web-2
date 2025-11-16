import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: 'postgresql://neondb_owner:npg_SEmvnpZ1H3wg@ep-muddy-bird-a4ii182g-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  },
});
