# Setup Project Baru

## Overview
Project backend baru. Stack: Bun + ElysiaJs + Drizzle + MySql.

## Kebutuhan
- Bun v1.x+ (runtime)
- Node v18+ (untuk compatibility)
- MySql 8.0+

## Tahapan Setup

### 1. Inisialisasi Proyek
```bash
bun init
```
Setup file structure:
```
src/
├── index.ts (entry point)
├── db/ (database setup)
├── routes/ (API endpoints)
├── middleware/ (ElysiaJs hooks)
└── types/ (TypeScript types)
```

### 2. Install Dependencies
```bash
bun add elysia drizzle-orm mysql2
bun add -d @types/bun
```

### 3. Setup Database
- Config MySql connection di `src/db/config.ts`
- Buat schema drizzle di `src/db/schema.ts`
- Setup migration script di `package.json`

### 4. Setup API Server
- Create Elysia instance di `src/index.ts`
- Routing setup di `src/routes/`
- Middleware (logging, error handling) di `src/middleware/`

### 5. Configuration
- `.env` untuk database credentials
- `tsconfig.json` setup untuk Bun
- `bunfig.toml` jika perlu custom Bun config

## Dependencies Role
- **ElysiaJs**: Framework HTTP, routing, middleware
- **Drizzle**: ORM, database query builder, type-safe
- **MySql2**: Driver database MySql native

## Implementasi Order
1. Project init + dependencies
2. Database connection & schema
3. Basic Elysia server
4. Routes skeleton
5. Database operations via Drizzle
6. Error handling & middleware
7. Testing setup

## Notes
- Drizzle ORM lebih ringan dari Sequelize/Typeorm
- Elysia syntax mirip Express tapi built untuk Bun
- Use `.env` untuk credentials, jangan hardcode
- TypeScript mandatory untuk type safety
