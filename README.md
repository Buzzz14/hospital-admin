## Hospital Admin - Next.js App

A simple Hospital Admin dashboard built with Next.js. The UI is implemented using Ant Design (antd) components, and data is served from a mock backend powered by json-server. The app demonstrates a clean CRUD flow for users, form validation, and modern React state/data tools.

### Tech stack
- **Next.js** for the frontend app
- **Ant Design (antd)** for UI components
- **Zod** for schema validation
- **React Hook Form** for form handling
- **Redux Toolkit (RTK)** for state management
- **RTK Query** for data fetching and caching
- **json-server** for a mock REST API

### Features implemented
- **Login page** under `src/app/login`
- **Users CRUD** (list, create, edit, delete)
- **Doctors list** and user-doctor assignment
- **Form validation** with Zod + React Hook Form
- **Data fetching** with RTK Query, including caching and invalidation

### API
The frontend talks to a mock API served by `json-server` on `http://localhost:3001`. Endpoints used include:
- `GET /users`
- `POST /users`
- `PATCH /users/:id`
- `DELETE /users/:id`
- `GET /doctors`

The API base URL is set in:
- `src/redux/features/users/usersApi.ts` → `baseUrl: "http://localhost:3001/"`

---

## Getting started

You will run the backend (json-server) and frontend (Next.js) in two terminals.

### 1) Backend (json-server)
Terminal A:

```bash
cd "Hospital Admin/mock-backend"
npm i
npx json-server --watch db.json --port 3001
```

This starts the mock API at `http://localhost:3001`.

### 2) Frontend (Next.js)
Terminal B:

```bash
cd "Hospital Admin/hospital-admin"
npm i
npm run dev
```

Then open `http://localhost:3000` in your browser.

---

## Notes
- Ensure the backend starts on port `3001` before running the frontend; the frontend is configured to use that port.
- Update the API base URL in `src/redux/features/users/usersApi.ts` if you change the backend port.

---

## Scripts
- Frontend:
  - `npm run dev` – start Next.js dev server
  - `npm run build` – build for production
  - `npm start` – start production server


