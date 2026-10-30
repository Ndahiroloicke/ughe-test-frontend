# UGHE Test Web App — Frontend (Next.js)

Next.js App Router UI for the UGHE homepage assessment. Consumes the [Django backend](https://github.com/ndahiroloicke/ughe-test-backend) REST API.

**This repository:** https://github.com/ndahiroloicke/ughe-test-frontend  
**Backend repository:** https://github.com/ndahiroloicke/ughe-test-backend

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) **or** Node.js 20+
- **Backend must be running** on http://localhost:8000 before the homepage can load data

## Run order (two separate repos)

1. Clone and start the **backend** repo → http://localhost:8000/api/homepage/ should return JSON  
2. Clone and start **this frontend** repo → http://localhost:3000

## Run with Docker (recommended)

From the **repository root** (where `docker-compose.yml` and `Dockerfile` live):

```bash
docker compose up --build
```

The frontend container uses:

- `NEXT_PUBLIC_API_URL=http://localhost:8000/api` (browser calls your machine’s port 8000)
- `API_URL=http://host.docker.internal:8000/api` (Next.js server-side fetch to the host)

Open http://localhost:3000 — login at http://localhost:3000/login

Stop:

```bash
docker compose down
```

## Run locally with npm (optional)

With the backend already on port 8000:

```bash
npm install
```

**Windows (cmd):**

```cmd
set NEXT_PUBLIC_API_URL=http://localhost:8000/api
npm run dev
```

**Windows (PowerShell):**

```powershell
$env:NEXT_PUBLIC_API_URL="http://localhost:8000/api"
npm run dev
```

**macOS/Linux:**

```bash
export NEXT_PUBLIC_API_URL=http://localhost:8000/api
npm run dev
```

Open http://localhost:3000

Production build:

```bash
set NEXT_PUBLIC_API_URL=http://localhost:8000/api
npm run build
npm start
```

## Login (assessment)

| Username | Password |
|----------|----------|
| `ughe_admin` | `UGHE_Test_2024!` |

Same credentials work in Django Admin on the backend.

## Environment variables

| Variable | When | Example |
|----------|------|---------|
| `NEXT_PUBLIC_API_URL` | Browser + required for dev | `http://localhost:8000/api` |
| `API_URL` | Next.js server inside Docker only | `http://host.docker.internal:8000/api` |

## Typography

Roboto Slab is loaded via `next/font/google` (stand-in for Museo Slab). See comments in `src/app/layout.tsx` and `src/app/globals.css`.

## More documentation

See `readme.txt` in this repo for fonts, GitHub links, and submission notes.
