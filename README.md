# Calza Calendar API

A Node.js API that serves personalized calendar events in iCalendar format.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The calendar feed will be available at `http://localhost:3000/calendar.ics`

## Deployment

This project is configured for deployment on Render.com:

1. Push your code to a GitHub repository
2. Create a new Web Service on Render.com
3. Connect your GitHub repository
4. Use the following settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables: None required

## Calendar Subscription

Once deployed, you can subscribe to the calendar feed using:

- Google Calendar: Add calendar > From URL > Enter your deployed URL
- Apple Calendar: File > New Calendar Subscription > Enter your deployed URL

The calendar feed URL will be: `https://your-app-name.onrender.com/calendar.ics` 