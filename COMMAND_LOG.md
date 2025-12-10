# Daily Command Log - Saree Shop Refactor

Here is a summary of all the terminal commands we used today to transform your static site into a modern React application.

## 1. Environment Setup

| Command | Why it was needed |
| :--- | :--- |
| `node -v` | Checks if Node.js is installed. Required to run React. |
| `npm -v` | Checks if npm (Node Package Manager) is available to install libraries. |

## 2. Project Initialization

| Command | Why it was needed |
| :--- | :--- |
| `npm install` | Downloads all the libraries listed in `package.json` (like React, Vite, Supabase) into `node_modules`. |
| `npm run dev` | Starts the local development server so you can see your changes instantly in the browser. |

## 3. Integration & Features

| Command | Why it was needed |
| :--- | :--- |
| `npm install @supabase/supabase-js` | Installs the specific library needed for your React app to talk to the Supabase database. |
| `cp .env.local.example .env.local` | Creates a secure file for your API keys (so you don't accidentally commit them to Git). |

## 4. Deployment (Netlify)

| Command | Why it was needed |
| :--- | :--- |
| `npm run build` | Compiles your React code into a tiny, optimized bundle (`dist` folder) that browsers can read. Netlify needs this folder. |

## 5. Docker

| Command | Why it was needed |
| :--- | :--- |
| `docker build -t saree-shop .` | "Bakes" your application into a Docker image named `saree-shop`. The `.` tells it to use files in the current folder. |
| `docker run -p 8080:80 saree-shop` | Starts a container from your image. `-p 8080:80` connects port 8080 on your laptop to port 80 in the container (web server). |

---

**Tip**: You can save this file for future reference!
