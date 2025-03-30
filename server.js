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
  ttl: 60 // 1 minute
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
      },
      // Add native RSVP functionality
      method: 'REQUEST',
      sequence: 0,
      attendees: [
        {
          email: 'events@calza.app',
          name: 'Calza',
          role: 'CHAIR'
        }
      ],
      // Enable native RSVP
      rsvp: true,
      rsvpStatus: 'NEEDS-ACTION',
      // Add these properties for better RSVP support
      class: 'PUBLIC',
      transparency: 'TRANSPARENT',
      // Add a unique identifier for each event
      uid: `calza-${event.event_id}@calza.app`,
      // Add a link to the event
      url: `https://calza.app/events/${event.event_id}`
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
    
    // Generate ETag based on content hash
    const etag = require('crypto')
      .createHash('md5')
      .update(icsContent)
      .digest('hex');
    
    // Set proper headers for calendar subscription
    res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=60, must-revalidate'); // Cache for 1 minute, must revalidate
    res.setHeader('Last-Modified', new Date().toUTCString());
    res.setHeader('ETag', `"${etag}"`);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    // Check if client's cached version matches
    const ifNoneMatch = req.headers['if-none-match'];
    if (ifNoneMatch && ifNoneMatch === `"${etag}"`) {
      res.status(304).end(); // Not Modified
      return;
    }
    
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