# Portfolio Website

A modern, responsive portfolio website showcasing my work as a Data Scientist and Software Engineer.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.x-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)

## Live Demo

Visit the live site: [https://akshatbhargava2906.github.io/myintroduction/](https://akshatbhargava2906.github.io/myintroduction/)

## About

This is my personal portfolio website built with React and Tailwind CSS. It showcases my professional experience, technical skills, projects, and provides a way to get in touch with me.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Sections:**
  - Hero section with introduction and social links
  - Projects carousel with GitHub integration
  - Skills showcase with categorized tech stack
  - Professional experience timeline
  - Contact form with EmailJS integration
- **Optimized Performance** - Fast loading with Vite build optimization
- **Smooth Animations** - Powered by Framer Motion

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [EmailJS](https://www.emailjs.com/) - Email service for contact form
- [GitHub Pages](https://pages.github.com/) - Hosting

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/akshatbhargava2906/myintroduction.git
cd myintroduction
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

To manually deploy:
```bash
npm run deploy
```

## Project Structure
```
myintroduction/
├── public/              # Static assets (images, etc.)
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .gitignore
├── package.json
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

## Customization

### Updating Content

- **Hero Section**: Edit `src/components/Hero.jsx` - Update name, title, bio, and social links
- **Projects**: Edit the `projects` array in `src/components/Projects.jsx`
- **Skills**: Edit the `skillCategories` array in `src/components/Skills.jsx`
- **Experience**: Edit the `experiences` array in `src/components/Experience.jsx`
- **Contact Info**: Update contact details in `src/components/Contact.jsx`

### Changing Colors

The color scheme is based on warm orange/amber tones. To change:
- Edit Tailwind classes in component files
- Modify `tailwind.config.js` for custom colors

### Adding Images

Place images in the `public/` folder and reference them as:
```jsx
<img src={`${import.meta.env.BASE_URL}your-image.jpg`} alt="Description" />
```

## 📧 Contact Form Setup

The contact form uses EmailJS. To set it up:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file or directly in `Contact.jsx`

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Akshat Atul Bhargava**

- GitHub: [@akshatbhargava2906](https://github.com/akshatbhargava2906)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/yourprofile)
- Email: akshatatulbhargava@gmail.com

## Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Claude (Obviously)

---

⭐ If you found this project helpful, please consider giving it a star!
