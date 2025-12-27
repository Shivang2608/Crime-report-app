<img width="1887" height="918" alt="Screenshot 2025-11-23 122937" src="https://github.com/user-attachments/assets/9b527f76-6af1-457a-93b9-a35efe39a852" />
<img width="1884" height="917" alt="Screenshot 2025-11-23 123028" src="https://github.com/user-attachments/assets/0cdc790d-b104-40a2-a43a-7ec22cd63e4d" />
<img width="1887" height="915" alt="Screenshot 2025-11-23 123053" src="https://github.com/user-attachments/assets/7de62a3e-5403-4c34-9728-da54626d6ad7" />
<img width="1875" height="922" alt="Screenshot 2025-11-23 123553" src="https://github.com/user-attachments/assets/a5c8f380-35ca-415e-9146-41d5a79c9623" />
<img width="1877" height="919" alt="Screenshot 2025-11-23 123705" src="https://github.com/user-attachments/assets/d73856d4-83f3-4cb7-b4d2-d0eb40df4e53" />
<img width="1894" height="915" alt="Screenshot 2025-11-23 123718" src="https://github.com/user-attachments/assets/85c95430-0c0f-406b-ba02-cd3df1126ab1" />
<img width="1891" height="915" alt="Screenshot 2025-11-23 124126" src="https://github.com/user-attachments/assets/80f070cc-2988-43ec-8d3f-49b11317fe03" />
<img width="1893" height="900" alt="Screenshot 2025-11-23 124242" src="https://github.com/user-attachments/assets/ce159425-6eab-47e7-b998-67cdd17c04c6" />
<img width="1900" height="913" alt="Screenshot 2025-11-23 124312" src="https://github.com/user-attachments/assets/0da81535-29b2-4909-8042-3df779f1fa24" />
<img width="1889" height="916" alt="Screenshot 2025-11-23 124343" src="https://github.com/user-attachments/assets/ba13341c-0a52-44c0-b8d2-51e7a4c21b02" />
<img width="1910" height="912" alt="Screenshot 2025-11-23 124400" src="https://github.com/user-attachments/assets/ed429c50-ddc7-46ec-965e-9cd798779c96" />
<img width="1896" height="906" alt="Screenshot 2025-11-23 124418" src="https://github.com/user-attachments/assets/32e4d97f-9dc4-4403-9331-c5ca239291eb" />


<div align="center">

  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Prisma-black?style=for-the-badge&logoColor=white&logo=prisma&color=2D3748" alt="prisma" />
    <img src="https://img.shields.io/badge/-Gemini_AI-black?style=for-the-badge&logoColor=white&logo=googlebard&color=8E75B2" alt="gemini" />
  </div>

  <h1 align="center">🕵️‍♂️ SafeReport: Anonymous Incident Reporting</h1>

   <div align="center">
     <strong>Secure. Anonymous. AI-Powered.</strong><br>
     A modernized platform for civic reporting, rebuilt with Next.js 14, Gemini 2.5 Flash, and MapTiler.
   </div>
</div>

---

## 💡 Project Overview & The "Why"

This project is a **comprehensive refactor and modernization** of an open-source reporting tool. I encountered an older implementation that suffered from broken dependencies, deprecated map APIs, and stability issues.

**My Goal:** To take a broken concept and turn it into a production-grade, fully functional application by upgrading the stack and integrating modern AI capabilities.

### 🔧 Key Engineering Improvements
| Component | Old Status ❌ | My Implementation ✅ |
|-----------|--------------|----------------------|
| **AI Analysis** | Broken/Legacy API | **Google Gemini 2.5 Flash** for real-time image analysis. |
| **Maps** | Deprecated Mapbox API | **MapTiler Integration** (Free-tier friendly & faster). |
| **UI/UX** | Basic styling | **ShadCN + Tailwind** for accessible, responsive components. |
| **Pages** | Missing core pages | Added **Resources** & **Contact** pages for better UX. |

---

## 🏗️ System Architecture

I designed the application to leverage **Serverless Actions** for security and **AI Edge Processing** for immediate report categorization.

```mermaid
graph TD
    User[Client / Browser] -->|Next.js App Router| Auth[NextAuth.js]
    User -->|Server Action| Server[Next.js API Layer]
    
    subgraph "Intelligent Processing"
        Server -->|Image Analysis| Gemini[Google Gemini 2.5 Flash]
        Server -->|Data Validation| Zod[Zod Schema]
    end
    
    subgraph "Data & External Services"
        Gemini -->|Auto-Fill Metadata| Server
        Server -->|Persist| DB[(Neon PostgreSQL)]
        User -->|Geolocation| MapTiler[MapTiler API]
    end


## ⚡ Key Features

- 🕵️‍♂️ **True Anonymity** – Submit reports without account creation.
- 🤖 **AI-Powered Vision** – Upload an image and Gemini AI detects context, severity, and description.
- 🗺️ **Interactive Mapping** – Pinpoint locations using MapTiler vector maps.
- 📊 **Status Tracking** – Track report status via a unique anonymous Report ID.
- 🆘 **Emergency Resources** – Dedicated section for helplines and safety guides.

## 🧩 Tech Stack

| Component | Technology | Purpose |
|---------|-----------|--------|
| Frontend | Next.js 14 (App Router) | Full-stack React framework |
| Backend | Server Actions | Serverless API logic |
| Database | Prisma + Neon (Postgres) | Type-safe ORM with serverless DB |
| AI Engine | Google Gemini 2.5 Flash | Image understanding & text generation |
| Mapping | MapTiler SDK | Lightweight vector maps |
| Auth | NextAuth.js | Secure session management |

## 🚀 Getting Started

### 1️⃣ Prerequisites
- Node.js (v18+)
- PostgreSQL Database (Neon recommended)
- Google Cloud Console Account (Gemini API)

### 2️⃣ Installation

```bash
# Clone the repository
git clone https://github.com/Shivang2608/Crime-report-app.git
cd Crime-report-app

# Install dependencies
npm install

# Database setup
npx prisma generate
npx prisma db push```


3️⃣ Environment SetupCreate a .env file in the root:Code snippet# Database
DATABASE_URL="postgresql://user:password@host/dbname"

# AI & Maps
GEMINI_API_KEY="YOUR_GOOGLE_API_KEY"
NEXT_PUBLIC_MAPBOX_API_KEY="YOUR_MAPTILER_API_KEY"
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN="YOUR_MAPTILER_API_KEY"

# Auth
NEXTAUTH_SECRET="YOUR_RANDOM_SECRET"
NEXTAUTH_URL="http://localhost:3000/api/auth"
4️⃣ Run Development ServerBashnpm run dev
Open http://localhost:3000 to view the app.

```markdown
---

🙌 Acknowledgements & CreditThis project was originally inspired by the work of mendsalbert. I have significantly refactored the codebase, upgraded the dependencies to Next.js 14, and integrated completely new AI and Mapping services to create this enhanced version.

Developed by Shivang Sagar<div align="center">
