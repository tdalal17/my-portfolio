# My Professional Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and professional experience in an elegant and interactive way.

![Portfolio Preview](https://via.placeholder.com/1200x630/1B1814/F5EBE0?text=Tanay+Dalal+Portfolio)

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode Support**: Elegant warm-toned dark theme (default) with light mode option
- **Interactive UI Elements**: Mouse-following spotlight effect, smooth animations, and micro-interactions
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Meta tags and proper semantic HTML
- **Accessibility**: WCAG compliant with proper contrast ratios and focus states

## 💻 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components + [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: CSS animations + Tailwind CSS Animate plugin
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone this repository
   ```bash
   git clone https://github.com/tdalal17/my-portfolio.git
   ```

2. Navigate to the project directory
   ```bash
   cd my-portfolio
   ```

3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website

## 📝 Project Structure

```
.
├── app/                  # Next.js pages and layouts
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── projects/         # Projects page
│   ├── resume/           # Resume page
│   ├── globals.css       # Global CSS
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── hero-section.tsx  # Hero section component
│   ├── navbar.tsx        # Navigation bar
│   └── footer.tsx        # Footer component
├── public/               # Static assets
├── styles/               # Additional styles
├── lib/                  # Utility functions and helpers
├── hooks/                # Custom React hooks
├── next.config.mjs       # Next.js configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## ✨ Key Components

### 1. Interactive Elements

- **SpotlightContainer**: Creates a spotlight effect that follows the user's mouse
- **WaveBackground**: Dynamic wave animation in the hero section
- **AnimatedText**: Text animations for headings and content
- **EnhancedSkillBadge**: Visual skill representations with animated level indicators

### 2. Design Features

- **Warm Color Palette**: Custom warm colors for a cozy, professional feel
- **Custom Typography**: Font pairing with Sora for headings and Inter for body text
- **Micro-interactions**: Subtle animations on hover, scroll, and other user interactions
- **Responsive Layouts**: Carefully crafted responsive designs for all screen sizes

## 📱 Pages

- **Home**: Introduction, key skills, and featured projects
- **About**: Detailed background, education, and personal information
- **Projects**: Showcase of technical projects with details and links
- **Resume**: Professional experience, education, and skills in resume format
- **Contact**: Contact form and connection information

## 🛠️ Customization

To customize this portfolio for your own use:

1. Update personal information in the respective page files
2. Replace images in the `public` directory with your own
3. Modify the color palette in `globals.css` and `tailwind.config.js`
4. Update project details in the projects section

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

- **Tanay Dalal** - [GitHub](https://github.com/tdalal17) | [LinkedIn](https://linkedin.com/in/tanaydalal)

## 🙏 Acknowledgements

- [shadcn/ui](https://ui.shadcn.com/) for UI component inspiration
- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Next.js](https://nextjs.org/) team for the amazing framework