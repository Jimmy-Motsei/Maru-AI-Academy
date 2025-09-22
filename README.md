# Maru AI Academy

A comprehensive AI productivity training platform built with Next.js and Azure Functions.

## Project Structure

```
/app        # Next.js front-end (PWA)
/api        # Azure Functions (Node/TS) for backend
/schemas    # SQL migrations & seeds
/.github/workflows  # CI/CD YAML files
/content    # Training content (Beginner & Intermediate Streams)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Azure account (for deployment)

### Development

1. Install dependencies:
```bash
npm install
cd api && npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

3. Run the development server:
```bash
npm run dev
```

4. Run the API locally:
```bash
cd api && npm start
```

### Database Setup

1. Run migrations:
```bash
npm run db:migrate
```

2. Seed initial data:
```bash
npm run db:seed
```

## Deployment

The application is configured for deployment to Azure Static Web Apps with Azure Functions.

### CI/CD

- **Main branch**: Automatically deploys to production
- **Database changes**: Migrations run automatically when schema files change
- **Pull requests**: Run tests and type checking

### Manual Deployment

1. Build the application:
```bash
npm run build
cd api && npm run build
```

2. Deploy to Azure using Azure CLI or VS Code Azure extension

## Content Structure

### Beginner Stream
- Module 1: AI Made Simple (Foundations & Safety)
- Module 2: Prompts that work at work
- Module 3: Picking tools & no-code quick wins
- Module 4: Your first live workflow (Capstone)

### Intermediate Stream
- Module 1: From ad-hoc prompts to repeatable workflows
- Module 2: Semantic search & private knowledge
- Module 3: No-code automations that stick
- Module 4: Measurement, governance & handover

## API Endpoints

- `GET /api/modules` - List all modules
- `GET /api/modules/{id}` - Get specific module
- `GET /api/users` - List users (admin)
- `POST /api/users` - Create user
- `GET /api/progress/{userId}` - Get user progress

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is proprietary to Maru AI Academy.
