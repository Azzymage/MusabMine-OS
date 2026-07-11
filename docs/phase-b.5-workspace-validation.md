# MMOS PHASE B.5 — Workspace Validation Guide

**Project:** MusabMine-OS (MMOS)  
**Phase:** B.5 — Workspace Validation  
**Status:** Validation Only  
**Architecture Status:** Foundation, Engineering, and Implementation Documentation Frozen

---

# Purpose

The purpose of Phase B.5 is to verify that the complete MMOS development workspace is stable, reproducible, and production-ready **before** any application data models, API endpoints, business logic, or miner communication components are introduced.

This phase validates infrastructure, tooling, dependency management, runtime environments, and developer workflows only.

No application functionality is implemented during this phase.

---

# Validation Scope

This validation covers:

- pnpm Workspace
- Monorepo Resolution
- Shared Packages
- NestJS Bootstrap
- Next.js Bootstrap
- Docker Environment
- PostgreSQL Runtime
- Redis Runtime
- Prisma Readiness
- Build System
- Development Workflow
- CLI Toolchain
- Production Build Integrity

- # 1. Workspace Validation

## Objective

Verify that the pnpm monorepo functions correctly as a unified workspace.

---

## Validation Items

### Workspace Resolution

Verify:

- Root workspace is detected.
- `pnpm-workspace.yaml` is loaded.
- All workspace packages are discovered.

Expected:

- No missing workspace errors.
- All packages appear in dependency graph.

---

### Package Linking

Verify:

- Internal packages are symlinked.
- No duplicated local dependencies.
- Workspace protocol resolves correctly.

Expected:

- `workspace:*` dependencies resolve successfully.

---

### Root Package Scripts

Verify execution of root scripts.

Typical examples include:

- install
- dev
- build
- lint
- format
- clean

Expected:

- Every script executes successfully.
- No missing script errors.

---

### TypeScript Path Mapping

Verify:

- tsconfig.base.json
- path aliases
- compiler resolution

Expected:

- All aliases resolve successfully.
- No unresolved module imports.

---

### Shared Package Resolution

Verify every shared package can be imported by:

- Backend
- Frontend
- Other shared packages

Expected:

- Zero circular dependency errors.
- Successful compilation.

- # 2. Backend Validation (NestJS)

## Objective

Validate the backend runtime environment.

---

## Dependency Installation

Verify:

- pnpm install completed successfully.
- Lockfile integrity maintained.
- No peer dependency failures.

Expected:

- Clean installation.

---

## NestJS Bootstrap

Verify:

- Application starts.
- Dependency Injection container initializes.
- Main bootstrap completes.

Expected:

- Server starts without runtime exceptions.

---

## Module Loading

Verify:

- Root module loads.
- Imported modules initialize.
- Providers register correctly.

Expected:

- No unknown dependency errors.

---

## Configuration Service

Verify:

- ConfigModule initialization.
- Configuration service availability.

Expected:

- Configuration accessible during startup.

---

## Environment Variables

Verify:

- .env loading
- Variable parsing
- Required variables detected

Expected:

- No undefined required variables.

---

## Health Endpoint

Validate availability of health endpoint.

Expected:

- HTTP 200 response.
- Application reachable.

---

## Build Verification

Verify:

- TypeScript compilation
- Output generation

Expected:

- Clean build.
- No compiler errors.

---

## Watch Mode

Verify:

- Incremental compilation.
- Automatic restart.

Expected:

- File changes trigger rebuild.

- # 3. Frontend Validation (Next.js)

## Objective

Validate frontend workspace.

---

## Dependency Verification

Verify:

- Dependencies installed.
- No version conflicts.

---

## App Router

Verify:

- App directory detected.
- Route compilation successful.

Expected:

- Root application loads.

---

## Layout Compilation

Verify:

- Root layout compiles.
- Nested layouts compile.

Expected:

- No React Server Component errors.

---

## Tailwind CSS

Verify:

- Tailwind configuration.
- CSS generation.
- Utility compilation.

Expected:

- Styles generated successfully.

---

## Development Server

Verify:

- Local development server starts.

Expected:

- Browser loads homepage.

---

## Hot Reload

Verify:

- Fast Refresh.
- Live updates.

Expected:

- Changes appear without restart.

---

## Production Build

Verify:

- Static analysis.
- Production optimization.
- Build artifacts generated.

Expected:

- Successful production build.

- # 4. Docker Validation

## Objective

Validate infrastructure containers.

---

## PostgreSQL Container

Verify:

- Container starts.
- Healthcheck passes.
- Port exposed.

Expected:

- Healthy state.

---

## Redis Container

Verify:

- Startup.
- Health.
- Port mapping.

Expected:

- Healthy state.

---

## Docker Compose

Verify:

- Compose file syntax.
- Service dependency order.
- Startup sequence.

Expected:

- Successful deployment.

---

## Docker Network

Verify:

- Dedicated network created.
- Containers communicate internally.

Expected:

- Network isolation functioning.

---

## Named Volumes

Verify:

- Persistent volumes created.
- Data survives restart.

Expected:

- Volume mounted successfully.

---

## Restart Policies

Verify:

- Restart configuration applied.

Expected:

- Containers restart automatically after failure.

---

## Healthchecks

Verify:

- Health status reporting.

Expected:

- Healthy after startup delay.

---

## Container Logs

Verify:

- Clean startup.
- No crash loops.
- No repeated errors.

Expected:

- Informational logs only.

---

## Cleanup Validation

Verify cleanup process.

Expected:

- Containers stop gracefully.
- Volumes removed only when explicitly requested.

- # 5. PostgreSQL Validation

## Objective

Validate PostgreSQL infrastructure without creating application schema.

---

## Connection

Verify database connection.

Expected:

- Successful authentication.

---

## Authentication

Verify credentials.

Expected:

- Login accepted.

---

## Port

Verify configured port availability.

Expected:

- Port reachable.

---

## pgAdmin Compatibility

Verify pgAdmin connection.

Expected:

- Database visible.

---

## Prisma Readiness

Verify:

- Prisma can establish connection.
- No schema migration executed.

Expected:

- Database ready for future Prisma initialization.

- # 6. Redis Validation

## Objective

Validate Redis runtime.

---

## Connection

Verify Redis accepts connections.

Expected:

- Successful connection.

---

## Ping/Pong

Verify server responsiveness.

Expected:

- PONG response.

---

## Persistence

Verify persistence configuration.

Expected:

- Configuration loaded successfully.

---

## Memory Limits

Verify configured memory policy.

Expected:

- Configuration matches deployment requirements.

---

## BullMQ Readiness

Verify Redis configuration supports BullMQ.

Expected:

- Redis suitable for queue processing.

- # 7. Monorepo Build Validation

## Objective

Validate complete workspace compilation.

---

## Root Build

Expected:

- All packages build successfully.

---

## Backend Build

Expected:

- NestJS compiles.

---

## Frontend Build

Expected:

- Next.js production build succeeds.

---

## Shared Packages

Expected:

- All shared libraries compile.

- # 8. CLI Validation Commands

## pnpm

```bash
pnpm install

pnpm -r build

pnpm -r test

pnpm -r lint

pnpm -r exec tsc --noEmit

pnpm --filter backend dev

pnpm --filter backend build

pnpm --filter frontend dev

pnpm --filter frontend build

pnpm store status
```

---

## Docker

```bash
docker compose config

docker compose up -d

docker compose ps

docker compose logs

docker compose logs postgres

docker compose logs redis

docker compose down

docker compose down -v

docker network ls

docker volume ls

docker inspect <container_name>

docker stats
```

---

## NestJS

```bash
pnpm --filter backend start

pnpm --filter backend start:dev

pnpm --filter backend build
```

---

## Next.js

```bash
pnpm --filter frontend dev

pnpm --filter frontend build

pnpm --filter frontend start
```

---

## Prisma

```bash
pnpm --filter backend prisma validate

pnpm --filter backend prisma format

pnpm --filter backend prisma db pull
```

> **Note:** `prisma db pull` is a read-only introspection command. It does **not** create or modify application tables.

---

## PostgreSQL

```bash
psql -h localhost -p 5432 -U <username> -d <database>

pg_isready
```

---

## Redis

```bash
redis-cli ping

redis-cli info

redis-cli memory stats

redis-cli config get appendonly

redis-cli config get save
```

# 9. Enterprise Validation Checklist

| Validation Item | PASS | FAIL | Expected Result | Recovery Procedure |
|----------------|------|------|-----------------|--------------------|
| pnpm Workspace | ☐ | ☐ | Workspace resolved | Verify `pnpm-workspace.yaml`, reinstall dependencies |
| Package Linking | ☐ | ☐ | Internal packages linked | Run `pnpm install`, verify `workspace:*` references |
| Root Scripts | ☐ | ☐ | All scripts execute | Restore missing scripts or package manifests |
| TypeScript Paths | ☐ | ☐ | Aliases resolve | Correct `tsconfig` path mappings |
| Shared Packages | ☐ | ☐ | Packages compile | Resolve dependency graph issues |
| Backend Bootstrap | ☐ | ☐ | Server starts | Inspect startup logs and dependency injection errors |
| Module Loading | ☐ | ☐ | Modules initialize | Resolve missing providers or imports |
| Config Service | ☐ | ☐ | Configuration available | Validate `.env` and ConfigModule setup |
| Environment Variables | ☐ | ☐ | Variables loaded | Correct missing or invalid environment variables |
| Health Endpoint | ☐ | ☐ | HTTP 200 | Verify application startup and routing |
| Backend Build | ☐ | ☐ | Build succeeds | Resolve TypeScript compilation errors |
| Backend Watch Mode | ☐ | ☐ | Auto-rebuild works | Verify watcher configuration |
| Frontend Dependencies | ☐ | ☐ | Installation succeeds | Reinstall dependencies and clear cache if required |
| App Router | ☐ | ☐ | Routes compile | Correct routing or layout issues |
| Layout Compilation | ☐ | ☐ | Layout renders | Resolve component compilation errors |
| Tailwind CSS | ☐ | ☐ | CSS generated | Verify Tailwind configuration |
| Frontend Dev Server | ☐ | ☐ | Server starts | Inspect runtime logs |
| Hot Reload | ☐ | ☐ | Live updates | Verify development configuration |
| Frontend Production Build | ☐ | ☐ | Build succeeds | Resolve build-time errors |
| Docker Compose | ☐ | ☐ | Services start | Validate compose configuration |
| Docker Network | ☐ | ☐ | Network operational | Recreate network if necessary |
| Named Volumes | ☐ | ☐ | Persistence available | Recreate or reattach volumes |
| Restart Policy | ☐ | ☐ | Restart configured | Update compose service policies |
| Healthchecks | ☐ | ☐ | Containers healthy | Inspect healthcheck commands and logs |
| Container Logs | ☐ | ☐ | No critical errors | Investigate startup failures |
| PostgreSQL | ☐ | ☐ | Database reachable | Verify credentials, ports, and container status |
| Redis | ☐ | ☐ | Redis responsive | Verify configuration and service health |
| Prisma Connectivity | ☐ | ☐ | Validation succeeds | Check database URL and connectivity |
| Monorepo Build | ☐ | ☐ | Complete build passes | Resolve package-specific compilation issues |

# 10. Exit Criteria

MMOS may proceed to **PHASE C — Database Modeling (Prisma)** only when **all** of the following conditions are satisfied:

- All workspace packages are discovered and resolved by pnpm.
- Internal workspace dependencies resolve without errors.
- Root-level scripts execute successfully.
- TypeScript path aliases compile correctly.
- Shared packages build without circular dependency issues.
- Backend application boots successfully.
- Backend dependency injection container initializes without errors.
- Configuration service loads all required environment variables.
- Health endpoint responds successfully.
- Backend build completes with zero compilation errors.
- Backend watch mode functions correctly.
- Frontend development server starts successfully.
- App Router and layouts compile without errors.
- Tailwind CSS compiles successfully.
- Frontend production build completes successfully.
- Development hot reload operates correctly.
- Docker Compose configuration validates successfully.
- PostgreSQL container is healthy and reachable.
- Redis container is healthy and responsive.
- Docker networking and persistent volumes function correctly.
- Container restart policies and healthchecks operate as expected.
- PostgreSQL accepts authenticated connections.
- PostgreSQL is accessible via pgAdmin.
- Prisma validates connectivity to PostgreSQL without performing schema changes.
- Redis responds to `PING` with `PONG`.
- Redis persistence configuration is verified.
- Redis memory configuration is validated.
- Redis environment is ready for BullMQ integration.
- Root monorepo build completes successfully.
- Backend build succeeds.
- Frontend build succeeds.
- Shared package builds succeed.
- No critical errors remain in application or container logs.
- All validation checklist items are marked **PASS**.
- No application database schema, API endpoint, miner communication logic, or business feature has been introduced during this phase.

Only after every criterion above has been satisfied may MMOS advance to **PHASE C — Database Modeling (Prisma)**.

