# ServiceHub - Service Marketplace Platform

A modern, feature-rich service marketplace connecting customers with trusted service providers.

## Features

- **User Authentication**: Separate customer and provider accounts with role-based access
- **Job Management**: Post, browse, and manage service jobs
- **Bidding System**: Service providers can bid on jobs
- **Real-time Messaging**: Direct communication between customers and providers
- **Dashboard**: Role-specific dashboards for customers and providers
- **Profile Management**: User profiles with ratings and reviews
- **Category System**: Organized service categories
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Backend Ready**: Firebase integration prepared

## Project Structure

```
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Auth/        # Authentication components
│   │   ├── Chat/        # Messaging components
│   │   ├── Dashboard/   # Dashboard components
│   │   └── Common/      # Shared components
│   ├── context/         # React Context providers
│   ├── data/            # Mock data and constants
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── styles/          # CSS files
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # App entry point
└── ...config files
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

### Preview Production Build

Preview the production build:
```bash
npm run preview
```

## Available Routes

- `/` - Home page
- `/jobs` - Browse all jobs
- `/jobs/:id` - Job detail page
- `/post-job` - Post a new job
- `/dashboard` - User dashboard (role-based)
- `/messages` - Messaging center
- `/profile` - User profile
- `/settings` - User settings
- `/how-it-works` - Platform information
- `/support` - Support center
- `/legal` - Terms & privacy
- `/signin` - Sign in
- `/signup` - Sign up

## Features in Detail

### For Customers
- Post jobs with detailed requirements
- Review and accept bids from providers
- Direct messaging with providers
- Track job progress
- Rate and review completed work

### For Service Providers
- Browse available jobs by category
- Submit competitive bids
- Showcase skills and portfolio
- Build reputation through ratings
- Manage active and completed jobs

## Future Enhancements

- React Router for better navigation
- Firebase/backend integration for real data
- Payment processing integration
- Advanced search and filtering
- File upload for job attachments
- Email notifications
- Mobile app version

## License

Private - All rights reserved

## Support

For support, email support@servicehub.com or visit the support page.
