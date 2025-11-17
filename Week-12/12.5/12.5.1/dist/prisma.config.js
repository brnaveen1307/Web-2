import { defineConfig, env } from "prisma/config";
export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    engine: "classic",
    datasource: {
        url: "postgres://postgres:password@localhost:5432/postgres",
    },
});
//# sourceMappingURL=prisma.config.js.map