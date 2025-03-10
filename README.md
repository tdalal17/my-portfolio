# Tanay Dalal's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern UI**: Clean, professional design with custom animations and transitions
- **Responsive**: Fully responsive layout that works on all devices
- **Interactive Components**: Custom components like SpotlightContainer for engaging user experience
- **Performance Optimized**: Built with Next.js for optimal performance and SEO

## Technologies Used

- **Next.js**: React framework for production
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **Framer Motion**: For animations and transitions

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tdalal17/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/`: Next.js app directory with pages and layouts
- `components/`: Reusable UI components
- `lib/`: Utility functions and shared code
- `public/`: Static assets like images

## Custom Components

### SpotlightContainer

A container component that creates an interactive spotlight effect following the user's cursor.

```tsx
<SpotlightContainer className="p-8">
  <h2>Your content here</h2>
  <p>This will have a spotlight effect on hover</p>
</SpotlightContainer>
```

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftdalal17%2Fmy-portfolio)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Tanay Dalal - [LinkedIn](https://linkedin.com/in/tanay-dalal) - [GitHub](https://github.com/tdalal17)