# Rahul Jha Portfolio — React + Vite

A classic, responsive monochrome portfolio built with React, Vite, and Lucide icons. Ready for Vercel deployment.

## Before publishing
Update the contact links near the top of `src/App.jsx`:
- `YOUR_EMAIL@example.com`
- `YOUR_GITHUB`
- `YOUR_LINKEDIN`

Review the portfolio content for accuracy. In particular, add verified details for:
- CamelQ training/internship dates and responsibilities
- Decision OS: actual problem statement, your contribution, technologies, and demo/repository link
- College hackathon names or awards, if applicable
- Exact JPMorgan Chase & Co. Forage program title
- Any course completion dates

Avoid publishing claims, credentials, or results that you cannot substantiate.

## Run locally
Install Node.js, then in this folder run:

```bash
npm install
npm run dev
```

To test a production build:

```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Upload this project to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository.
4. Vercel should detect Vite automatically. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy and copy the resulting public URL into your SDOC application.

No environment variables are required.
