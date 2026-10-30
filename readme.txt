UGHE Test Web App — Frontend (readme.txt)
==========================================

GitHub repositories (public):
  Backend (Django):     https://github.com/ndahiroloicke/ughe-test-backend
  Frontend (this repo): https://github.com/ndahiroloicke/ughe-test-frontend

HOW TO RUN THIS REPO ALONE (Docker)
------------------------------------
IMPORTANT: Start the backend first on port 8000.

1. Clone and run backend:
   git clone https://github.com/ndahiroloicke/ughe-test-backend.git
   cd ughe-test-backend
   docker compose up --build -d

2. Clone and run frontend:
   git clone https://github.com/ndahiroloicke/ughe-test-frontend.git
   cd ughe-test-frontend
   docker compose up --build

3. Open http://localhost:3000
   Login: http://localhost:3000/login
   User: ughe_admin  Password: UGHE_Test_2024!

Stop frontend: docker compose down (in frontend folder)

Font: Roboto Slab via next/font/google — src/app/layout.tsx, src/app/globals.css
Full assessment notes: see README.md in this repo
