const express = require('express');
const app = express();
const ical = require('ical-generator').default;
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const events = require('./events');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Load your event data from a CSV file
const loadEvents = () => {
  // This is a simple implementation. For your hack night,
  // you can replace this with actual CSV parsing if needed.
  return events;
};

// Create calendar instance
const calendar = ical({
  name: 'Calza Events',
  description: 'Personalized events from Instagram',
  timezone: 'America/New_York',
  ttl: 60 * 5 // 5 minutes
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
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/calendar.ics', (req, res) => {
  try {
    const events = loadEvents();
    const icsContent = generateCalendarFeed(events);
    
    // Set proper headers for calendar subscription
    res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=300'); // Cache for 5 minutes
    res.setHeader('Last-Modified', new Date().toUTCString());
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
  console.log(`Calendar feed available at https://calza-calendar-api.onrender.com/calendar.ics`);
});