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
⚡ Key Features🕵️‍♂️ True Anonymity: Submit reports without account creation.🤖 AI-Powered Vision: Upload an image of an incident, and Gemini AI automatically detects the context, severity, and description.🗺️ Interactive Mapping: Pinpoint exact locations using MapTiler's vector maps.📊 Status Tracking: Users receive a unique Report ID to track progress (Pending → In Progress → Resolved) anonymously.🆘 Emergency Resources: Dedicated section for helplines and safety guides.🧩 Tech StackComponentTechnologyPurposeFrontendNext.js 14 (App Router)Full-stack React frameworkBackendServer ActionsServerless API logicDatabasePrisma + Neon (Postgres)Type-safe ORM with Serverless DBAI EngineGoogle Gemini 2.5 FlashImage understanding & text generationMappingMapTiler SDKLightweight, vector-based mappingAuthNextAuth.jsSecure session management🚀 Getting Started1️⃣ PrerequisitesNode.js (v18+)PostgreSQL Database (Neon recommended)Google Cloud Console Account (for Gemini API)2️⃣ InstallationBash# Clone the repository
git clone [https://github.com/Shivang2608/Crime-report-app.git](https://github.com/Shivang2608/Crime-report-app.git)
cd Crime-report-app

# Install dependencies
npm install

# Database Setup
npx prisma generate
npx prisma db push
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
Open http://localhost:3000 to view the app.🙌 Acknowledgements & CreditThis project was originally inspired by the work of mendsalbert. I have significantly refactored the codebase, upgraded the dependencies to Next.js 14, and integrated completely new AI and Mapping services to create this enhanced version.Developed by Shivang Sagar<div align="center">
  <br />
  <a href="#" target="_blank">
    <img src="./public/report.jpg" alt="Project Banner" width="100%" style="border-radius: 10px">
  </a>
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
⚡ Key Features🕵️‍♂️ True Anonymity: Submit reports without account creation.🤖 AI-Powered Vision: Upload an image of an incident, and Gemini AI automatically detects the context, severity, and description.🗺️ Interactive Mapping: Pinpoint exact locations using MapTiler's vector maps.📊 Status Tracking: Users receive a unique Report ID to track progress (Pending → In Progress → Resolved) anonymously.🆘 Emergency Resources: Dedicated section for helplines and safety guides.🧩 Tech StackComponentTechnologyPurposeFrontendNext.js 14 (App Router)Full-stack React frameworkBackendServer ActionsServerless API 
logicDatabasePrisma + Neon (Postgres)Type-safe ORM with Serverless DBAI EngineGoogle Gemini 2.5 FlashImage understanding & text generationMappingMapTiler SDKLightweight, vector-based mappingAuthNextAuth.jsSecure session management🚀 Getting Started1️⃣ PrerequisitesNode.js (v18+)PostgreSQL Database (Neon recommended)Google Cloud Console Account (for Gemini API)2️⃣ InstallationBash# Clone the repository

git clone [https://github.com/Shivang2608/Crime-report-app.git](https://github.com/Shivang2608/Crime-report-app.git)

cd Crime-report-app

# Install dependencies
npm install

# Database Setup
npx prisma generate
npx prisma db push

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

Open http://localhost:3000 to view the app.🙌 
Acknowledgements & CreditThis project was originally inspired by the work of mendsalbert. I have significantly refactored the codebase, upgraded the dependencies to Next.js 14, and integrated completely new AI and Mapping services to create this enhanced version.

Developed by Shivang Sagar