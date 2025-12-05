# 🦇 MarketHero (GTMarket) 🎃

**MarketHero** is an AI-powered SOP (Standard Operating Procedure) generator with a spooky Halloween theme! Transform your Go-To-Market strategies into comprehensive documentation with the help of dark AI magic.

> 🎃 **Halloween Special Edition**: Now featuring a complete Halloween makeover with black & orange colors, bat-winged logo, spooky fonts, and glowing effects!

## ✨ Features

### Core Functionality
- 🧛 **AI-Powered Conversations**: Chat with a vampire AI assistant to document your workflows
- 📜 **SOP Generation**: Automatically create comprehensive Standard Operating Procedures
- 🦇 **Voice Input**: Speak your workflows using voice recognition (with blood-red recording pulse!)
- 📤 **Multi-Format Export**: Export SOPs as PDF, DOCX, or Agent.MD format
- 🔮 **Real-Time Analytics**: Monitor system health and API performance
- 👻 **Guest Authentication**: Quick access without complex setup

### Halloween Theme 🎃
- ⚫ **Dark Mode**: Spooky black background with orange accents
- 🦇 **Custom Logo**: Bat-winged MarketHero logo with glowing red eyes
- 👻 **Spooky Icons**: Ghosts, bats, skulls, and more throughout the UI
- ✨ **Glowing Effects**: Orange glow on buttons, borders, and interactive elements
- 🎭 **Horror Fonts**: Creepster, Nosifer, and Butcherman fonts
- 🕷️ **Animations**: Floating, flickering, and pulsing spooky effects

## Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **AI/ML**: Google Generative AI (Gemini)
- **Speech**: Google Cloud Speech-to-Text & Text-to-Speech
- **Database**: (To be configured)
- **Frontend**: HTML, CSS, JavaScript
- **Real-time**: Socket.IO

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Cloud credentials (optional, for speech services)
- Gemini API key

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/mmteles/GTMarket.git
cd GTMarket
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
```bash
cp .env.example .env
# Edit .env with your API keys
```

4. **Start the spooky server** 🦇:
```bash
npm run dev
```

5. **Open in browser**:
Visit `http://localhost:3000` and experience the Halloween magic! 🎃

### 🎃 Halloween Theme

The app now features a complete Halloween transformation! See:
- [HALLOWEEN_THEME.md](./HALLOWEEN_THEME.md) - Full theme documentation
- [HALLOWEEN_QUICK_START.md](./HALLOWEEN_QUICK_START.md) - Quick setup guide
- [THEME_PREVIEW.md](./THEME_PREVIEW.md) - Visual preview

### 🌐 Deployment Options

#### Netlify (Recommended)
```bash
npm run netlify:deploy
```
See [NETLIFY_QUICK_START.md](./NETLIFY_QUICK_START.md) for details.

#### Vercel
```bash
vercel deploy
```

#### Local Development
```bash
npm run dev
```

## 📜 Scripts

### Development
- `npm run dev` - Start development server (with spooky logging!)
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server

### Deployment
- `npm run netlify:dev` - Start Netlify development server
- `npm run netlify:deploy` - Deploy to Netlify

### Testing & Quality
- `npm test` - Run tests
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues

### Theme
- `node apply-halloween-theme.js` - Apply Halloween theme to HTML files

## 📁 Project Structure

```
GTMarket/
├── src/
│   ├── api/              # API routes and middleware
│   │   ├── routes/       # Express routes
│   │   ├── middleware/   # Auth, logging, validation
│   │   └── services/     # Business logic
│   ├── interfaces/       # TypeScript interfaces
│   ├── models/           # Data models
│   ├── services/         # Core services (AI, speech, SOP generation)
│   ├── ui/               # UI components
│   ├── utils/            # Utility functions
│   └── index.ts          # Application entry point
├── public/               # Static files & Halloween theme
│   ├── halloween-theme.css      # 🎃 Spooky styles
│   ├── markethero-logo.svg      # 🦇 Bat-winged logo
│   ├── markethero-icon.svg      # 🦇 Header icon
│   ├── favicon.svg              # 🦇 Browser icon
│   ├── index.html               # Main chat interface
│   ├── dashboard.html           # System monitoring
│   ├── api-dashboard-new.html   # API logs viewer
│   └── sop-view.html            # SOP document viewer
├── netlify/
│   └── functions/        # Netlify serverless functions
├── dist/                 # Compiled TypeScript output
├── exports/              # Generated SOP exports
└── docs/                 # Documentation
```

## 🎨 Theme Customization

Want to modify the Halloween theme or create your own?

1. Edit `public/halloween-theme.css` for colors and styles
2. Replace logo files in `public/` directory
3. Run `node apply-halloween-theme.js` to update all pages
4. See [HALLOWEEN_THEME.md](./HALLOWEEN_THEME.md) for detailed customization guide

## 📚 Documentation

- [SETUP.md](./SETUP.md) - Complete setup guide
- [HALLOWEEN_THEME.md](./HALLOWEEN_THEME.md) - Theme documentation
- [HALLOWEEN_QUICK_START.md](./HALLOWEEN_QUICK_START.md) - Quick theme guide
- [THEME_PREVIEW.md](./THEME_PREVIEW.md) - Visual preview
- [NETLIFY_QUICK_START.md](./NETLIFY_QUICK_START.md) - Netlify deployment
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Production deployment
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Common issues

## 🦇 MarketHero Branding

**MarketHero** is your hero in documenting Go-To-Market strategies! The bat-winged logo represents:
- **Wings**: Speed and agility in documentation
- **Bat**: Night vision - seeing what others miss
- **Letter M**: MarketHero brand identity
- **Glowing Eyes**: AI intelligence and insight
- **Fangs**: Biting into complex problems

## 🌟 Key Technologies

- **AI**: Google Gemini for intelligent conversation and SOP generation
- **Speech**: Google Cloud Speech-to-Text & Text-to-Speech
- **Backend**: Node.js, Express, TypeScript
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Real-time**: WebSocket for live updates
- **Deployment**: Netlify Functions, Vercel, or traditional hosting

## 🎃 Halloween Features

- Custom bat-winged logo with glowing red eyes
- Black & orange color scheme throughout
- Spooky fonts: Creepster, Nosifer, Butcherman
- Animated floating and flickering effects
- Blood-red recording pulse for voice input
- Ghost and vampire avatars for users and AI
- Glowing orange borders and shadows
- Haunted house navigation icons
- Ancient scroll document styling

## 🐛 Troubleshooting

### Theme not showing?
```bash
# Clear browser cache
Cmd+Shift+R (Mac) or Ctrl+Shift+F5 (Windows)

# Verify theme file exists
ls public/halloween-theme.css
```

### Server won't start?
```bash
# Check Node version
node --version  # Should be v18+

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
```bash
# Clean and rebuild
rm -rf dist
npm run build
```

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for more help.

## 📈 Performance

- **Theme CSS**: ~8KB (minified)
- **Logo Assets**: ~5KB total
- **Load Time**: <50ms impact
- **Animations**: Hardware-accelerated
- **Mobile**: Fully responsive

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 88+     | ✅ Full |
| Firefox | 85+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 88+     | ✅ Full |

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💬 Support

For support:
- 📧 Open an issue in the GitHub repository
- 📖 Check the documentation files
- 🔍 Search existing issues

## 🎉 Credits

- **Theme Design**: Halloween 2024 Special Edition
- **Logo**: Custom MarketHero bat-winged design
- **Fonts**: Google Fonts (Creepster, Nosifer, Butcherman)
- **AI**: Google Gemini
- **Speech**: Google Cloud

---

<div align="center">

### 🦇 MarketHero - A Hero in Documenting Go-To-Market Strategies 🎃

**Made with 🧛 by the MarketHero team**

[Website](http://localhost:3000) • [Documentation](./SETUP.md) • [Report Bug](https://github.com/mmteles/GTMarket/issues) • [Request Feature](https://github.com/mmteles/GTMarket/issues)

</div>
