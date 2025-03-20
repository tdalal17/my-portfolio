# Tanay Dalal - Portfolio Website

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Website-blue)](https://tdalal17.github.io/my-portfolio/)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222222)](https://pages.github.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive portfolio website showcasing my projects, skills, and professional experience. Built with Next.js and Tailwind CSS, featuring a clean design with dark/light mode support.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## ✨ Features

- **Responsive Design** - Optimized for all device sizes (mobile, tablet, desktop)
- **Dark/Light Mode** - Toggle between themes with seamless transitions
- **Interactive UI** - Smooth animations and transitions with Framer Motion
- **Project Showcase** - Filterable gallery with categorized projects
- **Contact Form** - Interactive form with validation and error handling
- **Static Site Generation** - Optimized for performance and SEO
- **Accessibility** - WCAG-compliant for inclusive user experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS for utility-first design
- **Components**: Radix UI primitives for accessible components
- **Animations**: Framer Motion for fluid transitions
- **Form Handling**: React Hook Form with Zod schema validation
- **Development**: TypeScript for type safety and better DX
- **Deployment**: GitHub Pages via GitHub Actions automation

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/tdalal17/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📂 Project Structure

```
my-portfolio/
├── app/                  # Next.js App Router (Pages)
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── projects/         # Projects page
│   ├── resume/           # Resume page
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── hero-section.tsx  # Hero section component
│   └── ui/               # UI component library
├── lib/                  # Utility functions and helpers
├── public/               # Static assets and images
├── styles/               # Global styles and themes
├── next.config.js        # Next.js configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## 🔧 Configuration

- **next.config.js**: Configured for static export and GitHub Pages compatibility
- **tailwind.config.js**: Custom theme with dark mode support
- **postcss.config.js**: Set up for Tailwind CSS processing

## 📤 Deployment

This portfolio automatically deploys to GitHub Pages using GitHub Actions workflow when changes are pushed to the master branch.

The GitHub Actions workflow:
1. Checks out the repository
2. Sets up Node.js environment
3. Installs dependencies
4. Builds the static site
5. Deploys to GitHub Pages

## 👨‍💻 Author

**Tanay Dalal** - Software Engineer

- [GitHub](https://github.com)
- [LinkedIn](https://linkedin.com/in/tanaydalal7)
- [Email](mailto:dalaltanay7@gmail.com)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ by Tanay Dalal