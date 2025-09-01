# Vidyuth 2K25 🎉

<div align="center">

![Vidyuth 2K25](https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/9fc3208f-c059-44a0-99b1-91c9a4a26f78.png)

**Annual College Fest Website for VidyaVardhaka College of Engineering, Mysuru**

[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-11.3.0-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![AI Powered](https://img.shields.io/badge/AI-Powered-purple?style=for-the-badge&logo=openai)](https://ai.google.dev/)

**🗓️ April 25-27, 2025 | 📍 VidyaVardhaka College of Engineering, Mysuru**

</div>

## 🎯 Overview

**Vidyuth 2K25** is the official website for the annual college fest of VidyaVardhaka College of Engineering, Mysuru. This modern, responsive web application features a countdown timer, event timeline, registration system, and interactive UI elements designed to create an engaging experience for students and visitors.

---

## ✨ Features

### 🕒 **Live Countdown Timer**
- Real-time countdown to the fest start date (April 25, 2025)
- Dynamic display of days, hours, minutes, and seconds
- Auto-refreshing every second

### 📅 **Interactive Event Timeline**
- Chronologically ordered event schedule
- Date and time information for each event
- Beautiful card-based layout with hover effects
- Complete 3-day fest coverage (April 25-27, 2025)

### 📝 **Event Registration System**
- User-friendly registration form
- Date picker for event selection
- Form validation and submission handling
- Contact information collection

### 🎨 **Modern UI/UX Design**
- Vibrant teal accent colors (#008080)
- Light backgrounds with bright highlights
- Smooth hover animations and transitions
- Mobile-responsive design
- Bold typography for enhanced readability

### 📞 **Contact Information**
- Dedicated contact section
- Email and phone information
- Easy communication channels

---

## 🎪 Event Lineup

### **Day 1 - April 25, 2025**
- **9:00 AM** - Auto Extravaganza
- **10:00 AM** - Mehendi Competition
- **2:00 PM** - Gaming Tournament
- **7:00 PM** - Dance Night

### **Day 2 - April 26, 2025**
- **9:00 AM** - Hackathons and Workshops
- **10:00 AM** - Math Tea Club
- **11:00 AM** - Treasure Hunt
- **2:00 PM** - Dance and Singing Competitions

### **Day 3 - April 27, 2025**
- **10:00 AM** - Art Exhibition
- **11:00 AM** - Dog Show
- **7:00 PM** - Night Concerts
- **9:00 PM** - Music & Dance Party

---

## 🛠️ Tech Stack

<table>
<tr>
<td><strong>Frontend</strong></td>
<td>
  <img src="https://img.shields.io/badge/Next.js-black?logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript" alt="TypeScript"/>
</td>
</tr>
<tr>
<td><strong>Styling</strong></td>
<td>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/shadcn/ui-000000?logo=shadcnui" alt="shadcn/ui"/>
  <img src="https://img.shields.io/badge/Radix_UI-161618?logo=radixui" alt="Radix UI"/>
</td>
</tr>
<tr>
<td><strong>Backend & Database</strong></td>
<td>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase" alt="Firebase"/>
  <img src="https://img.shields.io/badge/TanStack_Query-FF4154?logo=reactquery" alt="TanStack Query"/>
</td>
</tr>
<tr>
<td><strong>AI Integration</strong></td>
<td>
  <img src="https://img.shields.io/badge/Google_AI-4285F4?logo=google" alt="Google AI"/>
  <img src="https://img.shields.io/badge/Genkit-purple" alt="Genkit"/>
</td>
</tr>
<tr>
<td><strong>Development Tools</strong></td>
<td>
  <img src="https://img.shields.io/badge/Zod-3E67B1?logo=zod" alt="Zod"/>
  <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform" alt="React Hook Form"/>
  <img src="https://img.shields.io/badge/date--fns-770C56?logo=date-fns" alt="date-fns"/>
</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (18.0 or later)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LoganthP/DevCom-Final-Project.git
   cd DevCom-Final-Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   
   # AI Configuration (Optional)
   GOOGLE_GENAI_API_KEY=your_google_ai_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:9002` to see the application.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx           # Main homepage with all sections
│   ├── layout.tsx         # Root layout component
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── card.tsx
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── calendar.tsx
│   │   └── ...
│   └── layout/           # Layout components
├── ai/                   # AI integration (optional)
├── lib/
│   └── utils.ts          # Utility functions
└── docs/
    └── blueprint.md      # Project specifications
```

---

## 🎨 Design System

### Color Palette
- **Primary**: Vibrant Teal (#008080) - Innovation and energy
- **Background**: Light backgrounds with bright accents
- **Text**: Bold typography for enhanced readability
- **Interactive**: Smooth hover effects and transitions

### Typography
- **Font**: Inter - Clean, modern sans-serif
- **Headings**: Bold weights for impact
- **Body**: Optimized for readability

### Components
- **Cards**: Clean, organized layout with hover effects
- **Forms**: User-friendly with validation
- **Timeline**: Chronological event display
- **Countdown**: Real-time timer with dynamic updates

---

## 📊 Development Scripts

```bash
# Development
npm run dev              # Start development server with Turbopack (port 9002)
npm run genkit:dev       # Start AI development environment (optional)
npm run genkit:watch     # Watch mode for AI flows (optional)

# Production
npm run build            # Build for production
npm run start            # Start production server

# Quality Assurance
npm run lint             # Run ESLint
npm run typecheck        # TypeScript type checking
```

---

## 🔧 Configuration

### Next.js Configuration
- **Turbopack**: Enabled for faster development builds
- **TypeScript**: Strict mode with build error handling
- **Port**: 9002 (customizable)

### Tailwind CSS
- **Custom Theme**: Festival-themed color palette
- **Component Library**: shadcn/ui integration
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth transitions and hover effects

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Manual Deployment
1. Build the application: `npm run build`
2. Upload build files to your hosting provider
3. Configure environment variables on the server

---

## 🎯 Key Features Deep Dive

### Countdown Timer
- **Real-time Updates**: Automatically refreshes every second
- **Responsive Design**: Adapts to different screen sizes
- **Dynamic Calculation**: Calculates time difference to April 25, 2025
- **Visual Appeal**: Eye-catching display with proper formatting

### Event Timeline
- **Chronological Order**: Events sorted by date and time
- **Interactive Cards**: Hover effects for better UX
- **Detailed Information**: Event name, time, and description
- **Responsive Grid**: Adapts to mobile and desktop layouts

### Registration System
- **Form Validation**: Built-in validation with error handling
- **Date Selection**: Interactive calendar for event dates
- **User Experience**: Smooth form interactions
- **Data Collection**: Name, email, and event preferences

---

## 🚦 Performance

- **Fast Loading**: Optimized with Next.js and Turbopack
- **Responsive Images**: Automatic image optimization
- **Efficient Bundling**: Tree shaking and code splitting
- **SEO Optimized**: Meta tags and structured data

---

## 🔒 Security

- **Environment Variables**: Secure configuration management
- **Form Validation**: Input sanitization and validation
- **Firebase Integration**: Secure backend services
- **Type Safety**: TypeScript for compile-time error checking

---

## 🤝 Contributing

We welcome contributions to make Vidyuth 2K25 even better!

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Standards
- **ESLint**: Follow the configured rules
- **TypeScript**: Strict type checking
- **Prettier**: Code formatting
- **Conventional Commits**: Clear commit messages

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

- **LoganthP** - *Lead Developer* - [@LoganthP](https://github.com/LoganthP)

---

## 🏫 About VidyaVardhaka College of Engineering

**VidyaVardhaka College of Engineering, Mysuru** is a premier engineering institution known for its academic excellence and vibrant campus culture. Vidyuth 2K25 represents the spirit of innovation, creativity, and celebration that defines our college community.

---

## 📞 Contact Information

**Vidyuth 2K25 Organizing Committee**

- 📧 **Email**: info@vidyuth2k25.com
- 📱 **Phone**: +91 9876543210
- 🏫 **Address**: VidyaVardhaka College of Engineering, Mysuru, Karnataka
- 🌐 **Website**: [www.vidyuth2k25.com](https://www.vidyuth2k25.com)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI Components
- [Firebase](https://firebase.google.com/) - Backend Infrastructure
- [Radix UI](https://www.radix-ui.com/) - Low-level UI Primitives

---

<div align="center">

**🎉 Join us for Vidyuth 2K25 - Where Innovation Meets Celebration! 🎉**

[⭐ Star this repo](https://github.com/LoganthP/DevCom-Final-Project) • [🐛 Report Bug](https://github.com/LoganthP/DevCom-Final-Project/issues) • [✨ Request Feature](https://github.com/LoganthP/DevCom-Final-Project/issues)

**Made with ❤️ for VidyaVardhaka College of Engineering, Mysuru**

</div>
