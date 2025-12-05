# GTMarket

GTMarket is an AI-powered marketplace application built with modern web technologies.

## Features

- AI-powered conversational interface
- Real-time communication with Socket.IO
- Document generation and export
- Voice interaction capabilities
- Secure authentication and authorization

## Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **AI/ML**: Google Generative AI (Gemini)
- **Speech**: Google Cloud Speech-to-Text & Text-to-Speech
- **Database**: (To be configured)
- **Frontend**: HTML, CSS, JavaScript
- **Real-time**: Socket.IO

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Cloud credentials (for speech services)
- Gemini API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/GTMarket.git
cd GTMarket
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`

5. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues

## Project Structure

```
GTMarket/
├── src/
│   ├── api/          # API routes and middleware
│   ├── interfaces/   # TypeScript interfaces
│   ├── models/       # Data models
│   ├── services/     # Business logic services
│   ├── ui/           # UI components
│   ├── utils/        # Utility functions
│   └── index.ts      # Application entry point
├── public/           # Static files
├── dist/             # Compiled output
└── exports/          # Generated exports
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support, please open an issue in the GitHub repository.
