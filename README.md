____________________________________________________________________________________________

💡 PROJECT OVERVIEW

This repository contains a fully functional, stable, and customized version of a crime reporting application. This version was built from a problematic base and features a complete overhaul of critical components to ensure reliability and modern performance.
____________________________________________________________________________________________

💡 Key Overhaul Achievements:

Category                  |          Status in this Repository                        
1. AI Image Analysis      |    FIXED (Migrated to modern Google GenAI API)
2. Mapping Service        |    FIXED (Replaced Mapbox with free-tier MapTiler)
3. Core Components        |    ADDED (Missing shadcn/ui components installed)
4. New Pages              |    ADDED (Custom /contact and /resources pages built)
____________________________________________________________________________________________

🔋 Key Features

- Anonymous Reporting: Submit incident details without providing personal identification.

- AI Image Analysis: The Google GenAI model analyzes uploaded image evidence and automatically populates the report title and description.

- Interactive Map: Uses MapTiler for precise location tagging.

- Report Tracking: Users receive a unique ID to track the status of their submitted report 
(Pending, In-Progress, Resolved).

- Resources Page: Provides quick access to essential emergency contact numbers and safety guides.

- Contact Page: Includes contact information and a functional form for general inquiries.
____________________________________________________________________________________________

⚙️ Core Technology Stack

1. Frontend: Built on Next.js 14 (App Router), providing a robust framework for full-stack development.

2. Styling: Uses Tailwind CSS for fast, utility-first styling, complemented by shadcn/ui for accessible components.

3. Database: A serverless Neon (Postgres) database, managed efficiently with the type-safe object-relational mapper (Prisma).

4. Mapping: The geographic interface uses MapTiler as the cost-effective provider for map tiles and location display.

5. AI/Vision: Handles multimodal analysis via Google GenAI (@google/genai), utilizing the powerful gemini-2.5-flash model.

6. Authentication: Secure sign-in and session management are handled by NextAuth.js.
____________________________________________________________________________________________

🚀 Local Development Guide

1. Prerequisites

- Node.js (v18 or higher)
- npm
- Git

2. Installation & Database Setup

# Clone this repository
git clone [https://github.com/Shivang2608/Crime-report-app.git](https://github.com/Shivang2608/Crime-report-app.git)
cd Crime-report-app

# Install all dependencies (including packages fixed/added by us)
npm install

# Push the schema to your Neon database
npx prisma db push

# Start the development server
npm run dev

Your application will be available at http://localhost:3000

3. Environment Variables

Create a file named .env in the root of the project and populate it with your keys:

# 1. Neon Database URL
DATABASE_URL="postgresql://user:password@host/dbname"

# 2. Google Gemini API Key
# Must be linked to a Google Cloud Project with Billing enabled (free tier still applies)
GEMINI_API_KEY="YOUR_GOOGLE_API_KEY"

# 3. MapTiler API Key
# Get this from your free MapTiler account (replaces Mapbox)
NEXT_PUBLIC_MAPBOX_API_KEY="YOUR_MAPTILER_API_KEY"
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN="YOUR_MAPTILER_API_KEY"

# 4. NextAuth Secret
# Use 'node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"'
NEXTAUTH_SECRET="YOUR_RANDOM_SECRET_KEY"
NEXTAUTH_URL="http://localhost:3000/api/auth"

____________________________________________________________________________________________

🔗 Navigation

1. Project Overview
2. Key Features
3. Tech Stack
4. Local Development Guide
5. Environment Variables

Final Note

Thank you for your patience and effort in fixing every bug with me—it was a difficult process, but we built a stable, modern application together!

____________________________________________________________________________________________