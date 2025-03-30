const express = require('express');
const app = express();
const ical = require('ical-generator').default;
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// Load your event data from a CSV file
const loadEvents = () => {
  // This is a simple implementation. For your hack night,
  // you can replace this with actual CSV parsing if needed.
  return [
    {
      event_id: "evt_001",
      source: "@liftonic_nyc",
      event_type: "fitness",
      title: "Morning Strength Training",
      description: "Complete 45-minute weight training class focusing on all major muscle groups. Perfect for building strength and maintaining form.",
      start_datetime: "2025-03-31T07:30:00",
      end_datetime: "2025-03-31T08:15:00",
      location_name: "Liftonic East Village",
      location_address: "32 East 1st St, New York, NY",
      neighborhood: "East Village",
      personalized_title: "Morning strength fix...",
      calendar_title: "Morning strength fix..."
    },
    {
      event_id: "evt_002",
      source: "@yogaflow_nyc",
      event_type: "fitness",
      title: "Lunchtime Vinyasa Flow",
      description: "Midday yoga class to stretch and energize. All levels welcome. Perfect for a midday reset.",
      start_datetime: "2025-03-31T12:00:00",
      end_datetime: "2025-03-31T12:45:00",
      location_name: "Yoga Flow Studio",
      location_address: "45 West 14th St, New York, NY",
      neighborhood: "Union Square",
      personalized_title: "Lunchtime yoga flow",
      calendar_title: "Lunchtime yoga flow"
    },
    {
      event_id: "evt_003",
      source: "@nyc_jazz_club",
      event_type: "music",
      title: "Jazz Night with The Blue Note Quartet",
      description: "Experience an evening of smooth jazz with The Blue Note Quartet. Doors open at 7:30 PM.",
      start_datetime: "2025-03-31T20:00:00",
      end_datetime: "2025-03-31T23:00:00",
      location_name: "Blue Note Jazz Club",
      location_address: "131 W 3rd St, New York, NY",
      neighborhood: "Greenwich Village",
      personalized_title: "Jazz that doesn't disappoint...",
      calendar_title: "Jazz that doesn't disappoint..."
    },
    {
      event_id: "evt_004",
      source: "@foodie_nyc",
      event_type: "food",
      title: "Taco Tuesday at La Taqueria",
      description: "Authentic Mexican tacos and margaritas. Happy hour from 5-7 PM.",
      start_datetime: "2025-04-01T18:00:00",
      end_datetime: "2025-04-01T20:00:00",
      location_name: "La Taqueria",
      location_address: "78 2nd Ave, New York, NY",
      neighborhood: "East Village",
      personalized_title: "Taco Tuesday vibes...",
      calendar_title: "Taco Tuesday vibes..."
    },
    {
      event_id: "evt_005",
      source: "@art_nyc",
      event_type: "art",
      title: "Contemporary Art Exhibition Opening",
      description: "Opening night of 'Modern Perspectives' featuring emerging NYC artists. Free entry with RSVP.",
      start_datetime: "2025-04-01T19:00:00",
      end_datetime: "2025-04-01T21:00:00",
      location_name: "Gallery 456",
      location_address: "456 Broadway, New York, NY",
      neighborhood: "SoHo",
      personalized_title: "This exhibit is buzzing...",
      calendar_title: "This exhibit is buzzing..."
    }
  ];
};

// Create calendar instance
const calendar = ical({
  name: 'Calza Events',
  description: 'Personalized events from Instagram',
  timezone: 'America/New_York',
  ttl: 60 * 60 * 24 // 24 hours
});

// Generate iCalendar feed
const generateCalendarFeed = (events) => {
  // Clear existing events
  calendar.clear();

  // Add each event to the calendar
  events.forEach(event => {
    calendar.createEvent({
      id: event.event_id,
      summary: event.calendar_title,
      description: `${event.description}\n\nSource: ${event.source}\nNeighborhood: ${event.neighborhood}`,
      start: new Date(event.start_datetime),
      end: new Date(event.end_datetime),
      location: {
        title: event.location_name,
        address: event.location_address
      },
      categories: [{
        name: event.event_type
      }],
      status: 'CONFIRMED',
      busyStatus: 'BUSY',
      organizer: {
        name: 'Calza',
        email: 'events@calza.app'
      }
    });
  });

  return calendar.toString();
};

// Set up Express routes
app.get('/calendar.ics', (req, res) => {
  try {
    const events = loadEvents();
    const icsContent = generateCalendarFeed(events);
    
    // Set proper headers for calendar subscription
    res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    res.send(icsContent);
  } catch (error) {
    console.error('Error generating calendar feed:', error);
    res.status(500).send('Error generating calendar feed');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Calendar feed available at http://localhost:${PORT}/calendar.ics`);
});