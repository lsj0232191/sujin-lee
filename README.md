# Sujin Lee Portfolio

A modern, responsive developer portfolio built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). This site is statically deployed on [Vercel](https://vercel.com/) with a custom domain managed via GoDaddy.

## 🚀 Project Overview
Showcase your skills, experience, and projects with a beautiful, customizable portfolio. Features animated hero sections, responsive layouts, and easy content management via TypeScript data files.

## ✨ Features
- Next.js App Router (app directory)
- Tailwind CSS for rapid, utility-first styling
- Animated hero and section transitions
- Responsive design for all devices
- Social links and contact form
- Instant deployment with Vercel
- Custom domain support (GoDaddy, etc.)

## 🛠 Tech Stack
- [Next.js 15+](https://nextjs.org/)
- [React 19+](https://react.dev/)
- [Tailwind CSS 3+](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/)

## 🏁 Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/lsj0232191/sujin-lee.git
   cd sujin-lee
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🚀 Deployment (Vercel)

1. **Push your code to GitHub.**
2. **Go to [Vercel](https://vercel.com/) and import your repository.**
3. **Configure build settings (defaults work for Next.js projects).**
4. **Deploy!**
5. **Your site will be live at a Vercel-provided URL (e.g., `https://your-project.vercel.app`).**

## 🌐 Custom Domain (GoDaddy + Vercel)
- In your Vercel dashboard, go to your project and add your custom domain (e.g., `sujin-lee.com`).
- Vercel will provide DNS records (CNAME or A records) to add to your GoDaddy DNS settings.
- In GoDaddy, update your DNS:
  - **A record:** Point `@` to the Vercel-provided IP (if using A record)
  - **CNAME:** Point `www` to the Vercel-provided CNAME
- Wait for DNS propagation and SSL certificate issuance (Vercel handles SSL automatically).
